import { useEffect, useRef, useState } from 'react';

interface Fragment {
  // Target position (where the pixel belongs)
  tx: number;
  ty: number;
  // Current position (starts random)
  x: number;
  y: number;
  // Velocity
  vx: number;
  vy: number;
  size: number;
}

interface PixelTextRevealProps {
  lines: string[];
  onComplete: () => void;
}

function PixelTextReveal({ lines, onComplete }: PixelTextRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const w = parent.offsetWidth;
    const h = parent.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    // Determine font size based on screen width (matching Tailwind breakpoints)
    let fontSize: number;
    if (w >= 1024) {
      fontSize = 60; // lg:text-6xl ~ 3.75rem = 60px
    } else if (w >= 768) {
      fontSize = 48; // md:text-5xl ~ 3rem = 48px
    } else {
      fontSize = 30; // text-3xl ~ 1.875rem = 30px
    }

    // Determine left padding (matching hero px-8 md:px-16 lg:px-24)
    let padLeft: number;
    if (w >= 1024) {
      padLeft = 96; // lg:px-24 = 6rem = 96px
    } else if (w >= 768) {
      padLeft = 64; // md:px-16 = 4rem = 64px
    } else {
      padLeft = 32; // px-8 = 2rem = 32px
    }

    const lineHeight = fontSize * 1.15;
    const totalTextHeight = lines.length * lineHeight;

    // Center text vertically in the hero
    const startY = (h - totalTextHeight) / 2 + fontSize;

    // Render text offscreen to sample pixels
    const offscreen = document.createElement('canvas');
    offscreen.width = w;
    offscreen.height = h;
    const offCtx = offscreen.getContext('2d')!;
    offCtx.fillStyle = 'white';
    offCtx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    offCtx.textBaseline = 'alphabetic';
    offCtx.textAlign = 'left';

    lines.forEach((line, i) => {
      offCtx.fillText(line, padLeft, startY + i * lineHeight);
    });

    // Sample pixels from the offscreen canvas
    const imageData = offCtx.getImageData(0, 0, w, h);
    const pixels = imageData.data;

    const fragSize = 4;
    const fragments: Fragment[] = [];

    for (let y = 0; y < h; y += fragSize) {
      for (let x = 0; x < w; x += fragSize) {
        const idx = (y * w + x) * 4;
        const alpha = pixels[idx + 3];
        if (alpha > 50) {
          // Scatter from random positions across the whole canvas
          const startX = Math.random() * w;
          const startY = Math.random() * h;
          fragments.push({
            tx: x,
            ty: y,
            x: startX,
            y: startY,
            vx: 0,
            vy: 0,
            size: fragSize,
          });
        }
      }
    }

    // Animation
    const duration = 2000; // 2 seconds to assemble
    const startTime = performance.now();
    let animId: number;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const progress = easeOutCubic(rawProgress);

      ctx.clearRect(0, 0, w, h);

      for (const frag of fragments) {
        // Interpolate from scattered position to target
        const cx = frag.x + (frag.tx - frag.x) * progress;
        const cy = frag.y + (frag.ty - frag.y) * progress;

        // Slight jitter in early phase
        const jitter = (1 - progress) * 3;
        const jx = (Math.random() - 0.5) * jitter;
        const jy = (Math.random() - 0.5) * jitter;

        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + progress * 0.7})`;
        ctx.fillRect(cx + jx, cy + jy, frag.size, frag.size);
      }

      if (rawProgress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        // Hold the assembled text briefly, then fade out
        setTimeout(() => {
          let fadeStart: number | null = null;
          const fadeDuration = 400;

          const fadeOut = (ts: number) => {
            if (!fadeStart) fadeStart = ts;
            const fadeProgress = Math.min((ts - fadeStart) / fadeDuration, 1);

            ctx.clearRect(0, 0, w, h);
            ctx.globalAlpha = 1 - fadeProgress;

            for (const frag of fragments) {
              ctx.fillStyle = 'rgba(255, 255, 255, 1)';
              ctx.fillRect(frag.tx, frag.ty, frag.size, frag.size);
            }

            ctx.globalAlpha = 1;

            if (fadeProgress < 1) {
              requestAnimationFrame(fadeOut);
            } else {
              setDone(true);
              onComplete();
            }
          };

          requestAnimationFrame(fadeOut);
        }, 300);
      }
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [lines, onComplete]);

  if (done) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-20"
      style={{ pointerEvents: 'none' }}
    />
  );
}

export default PixelTextReveal;
