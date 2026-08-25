import type { SVGProps } from "react";

/**
 * Jelly fish and bubbles :)
 */
type DecorProps = Pick<SVGProps<SVGSVGElement>, "className">;

type TintedDecorProps = DecorProps & { color?: string };

/** 130x200 - two jellyfish, teal. Used on 4 pages. */
export function Jellyfish({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="130" height="200" viewBox="0 0 130 200" fill="none">
      <path
        d="M8 50 C8 18, 72 18, 72 50 C72 60, 40 64, 8 50Z"
        fill="#00A99D"
        opacity="0.4"
      />
      <path
        d="M14 46 C18 28, 62 28, 66 46"
        stroke="white"
        strokeWidth="1.2"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M20 44 C23 32, 57 32, 60 44"
        stroke="white"
        strokeWidth="0.8"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M18 62 C15 76, 20 86, 16 100 C13 112, 18 120, 14 134"
        stroke="#00A99D"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M28 64 C26 80, 32 90, 28 106 C24 120, 30 130, 26 146"
        stroke="#187A72"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M40 65 C40 82, 40 94, 40 110 C40 124, 40 134, 38 150"
        stroke="#00A99D"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M52 64 C54 80, 48 90, 52 106 C56 120, 50 130, 54 146"
        stroke="#187A72"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M62 62 C65 76, 60 86, 64 100 C67 112, 62 120, 66 134"
        stroke="#00A99D"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M12 63 C10 74, 14 80, 11 90"
        stroke="#187A72"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M68 63 C70 74, 66 80, 69 90"
        stroke="#00A99D"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
                <path
        d="M86 30 C86 16, 122 16, 122 30 C122 36, 104 38, 86 30Z"
        fill="#187A72"
        opacity="0.35"
      />
      <path
        d="M90 28 C93 20, 118 20, 120 28"
        stroke="white"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M92 37 C90 46, 93 52, 91 60"
        stroke="#187A72"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M100 38 C99 48, 102 54, 100 64"
        stroke="#00A99D"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M108 38 C110 48, 106 54, 109 64"
        stroke="#187A72"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M116 37 C118 46, 115 52, 117 60"
        stroke="#00A99D"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 100x80 - three fish swimming right. */
export function FishSchool({ className = "", color = "#00A99D" }: TintedDecorProps) {
  return (
    <svg className={className} width="100" height="80" viewBox="0 0 100 80" fill="none">
      <path
        d="M30 15 C22 8, 8 6, 2 15 C8 24, 22 22, 30 15 Z"
        fill={color}
      />
      <path d="M33 15 L40 8 L40 22 Z" fill={color} />
      <path
        d="M55 35 C47 28, 33 26, 27 35 C33 44, 47 42, 55 35 Z"
        fill={color}
      />
      <path d="M58 35 L65 28 L65 42 Z" fill={color} />
      <path
        d="M40 60 C32 53, 18 51, 12 60 C18 69, 32 67, 40 60 Z"
        fill={color}
      />
      <path d="M43 60 L50 53 L50 67 Z" fill={color} />
    </svg>
  );
}

/** 60x200 - two full-height strands. */
export function SeaweedTall({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="60" height="200" viewBox="0 0 60 200" fill="none">
      <path
        d="M20 200 C14 175, 28 160, 18 135 C8 110, 24 95, 16 70 C8 45, 22 25, 18 0"
        stroke="#187A72"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M42 200 C48 178, 36 162, 44 138 C52 114, 38 98, 46 74 C54 50, 40 30, 44 8"
        stroke="#00A99D"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 50x180 - one full strand, one half. */
export function SeaweedMedium({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="50" height="180" viewBox="0 0 50 180" fill="none">
      <path
        d="M14 180 C8 155, 22 140, 12 115 C2 90, 18 75, 10 50 C4 28, 16 10, 13 0"
        stroke="#187A72"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M36 180 C42 158, 30 142, 38 118 C46 94, 32 78, 40 54"
        stroke="#00A99D"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 50x140 - two short strands. */
export function SeaweedSmall({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="50" height="140" viewBox="0 0 50 140" fill="none">
      <path
        d="M18 140 C12 118, 26 104, 16 80 C6 56, 20 42, 14 18 C10 4, 18 0, 16 -4"
        stroke="#187A72"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M34 140 C40 118, 28 104, 36 80 C44 56, 30 42, 38 18"
        stroke="#00A99D"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 60x120 - four bubbles rising left. */
export function BubblesSmall({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="60" height="120" viewBox="0 0 60 120" fill="none">
      <circle cx="30" cy="100" r="12" stroke="#00A99D" strokeWidth="2" />
      <circle cx="15" cy="70" r="7" stroke="#187A72" strokeWidth="2" />
      <circle cx="40" cy="45" r="9" stroke="#00A99D" strokeWidth="2" />
      <circle cx="20" cy="20" r="5" stroke="#187A72" strokeWidth="2" />
    </svg>
  );
}

/** 80x140 - four bubbles rising right. */
export function BubblesMedium({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="80" height="140" viewBox="0 0 80 140" fill="none">
      <circle cx="60" cy="20" r="10" stroke="#00A99D" strokeWidth="2" />
      <circle cx="25" cy="50" r="7" stroke="#187A72" strokeWidth="2" />
      <circle cx="55" cy="85" r="13" stroke="#00A99D" strokeWidth="2" />
      <circle cx="20" cy="120" r="5" stroke="#187A72" strokeWidth="2" />
    </svg>
  );
}

/** 100x160 - five bubbles, wide scatter. */
export function BubblesWide({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="100" height="160" viewBox="0 0 100 160" fill="none">
      <circle cx="70" cy="20" r="14" stroke="#00A99D" strokeWidth="2" />
      <circle cx="30" cy="55" r="9" stroke="#187A72" strokeWidth="2" />
      <circle cx="80" cy="80" r="6" stroke="#00A99D" strokeWidth="2" />
      <circle cx="50" cy="120" r="16" stroke="#187A72" strokeWidth="2" />
      <circle cx="20" cy="145" r="5" stroke="#00A99D" strokeWidth="2" />
    </svg>
  );
}

/** 90x160 - five bubbles hugging a corner. */
export function BubblesCorner({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="90" height="160" viewBox="0 0 90 160" fill="none">
      <circle cx="70" cy="20" r="14" stroke="#00A99D" strokeWidth="2" />
      <circle cx="40" cy="55" r="9" stroke="#187A72" strokeWidth="2" />
      <circle cx="78" cy="85" r="6" stroke="#00A99D" strokeWidth="2" />
      <circle cx="50" cy="120" r="16" stroke="#187A72" strokeWidth="2" />
      <circle cx="20" cy="148" r="5" stroke="#00A99D" strokeWidth="2" />
    </svg>
  );
}

/** 80x200 - six thin bubbles for dark backgrounds. */
export function BubblesTrail({ className = "", color = "white" }: TintedDecorProps) {
  return (
    <svg className={className} width="80" height="200" viewBox="0 0 80 200" fill="none">
      <circle cx="20" cy="180" r="10" stroke={color} strokeWidth="1.5" />
      <circle cx="50" cy="150" r="6" stroke={color} strokeWidth="1.5" />
      <circle cx="30" cy="110" r="14" stroke={color} strokeWidth="1.5" />
      <circle cx="60" cy="70" r="4" stroke={color} strokeWidth="1.5" />
      <circle cx="40" cy="40" r="8" stroke={color} strokeWidth="1.5" />
      <circle cx="15" cy="15" r="5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

/** 1200x40 - full-width wave rule, stretches. */
export function Waves({ className = "" }: DecorProps) {
  return (
    <svg className={className} height="40" viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none">
      <path
        d="M0 25 C80 10, 160 35, 240 22 C320 9, 400 32, 480 20 C560 8, 640 34, 720 22 C800 10, 880 33, 960 20 C1040 7, 1120 30, 1200 18"
        stroke="#00A99D"
        strokeWidth="2.5"
      />
      <path
        d="M0 35 C80 22, 160 40, 240 30 C320 18, 400 38, 480 28 C560 18, 640 40, 720 30 C800 18, 880 40, 960 28 C1040 16, 1120 38, 1200 28"
        stroke="#187A72"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** 60x80 - anchor outline for dark backgrounds. */
export function Anchor({ className = "", color = "white" }: TintedDecorProps) {
  return (
    <svg className={className} width="60" height="80" viewBox="0 0 60 80" fill="none">
      <circle cx="30" cy="10" r="8" stroke={color} strokeWidth="2" />
      <line
        x1="30"
        y1="18"
        x2="30"
        y2="65"
        stroke={color}
        strokeWidth="2.5"
      />
      <path
        d="M10 55 C10 70, 30 75, 30 65"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M50 55 C50 70, 30 75, 30 65"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="35"
        x2="40"
        y2="35"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 1200x40 - full-width wave rule, heavier stroke. */
export function WavesBold({ className = "" }: DecorProps) {
  return (
    <svg className={className} height="40" viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none">
      <path
        d="M0 25 C100 10, 200 35, 300 20 C400 5, 500 30, 600 20 C700 10, 800 35, 900 20 C1000 5, 1100 30, 1200 20"
        stroke="#00A99D"
        strokeWidth="3"
      />
      <path
        d="M0 35 C100 20, 200 40, 300 30 C400 18, 500 38, 600 28 C700 18, 800 40, 900 30 C1000 18, 1100 38, 1200 30"
        stroke="#187A72"
        strokeWidth="2"
      />
    </svg>
  );
}

/** 60x100 - four small bubbles. */
export function BubblesTiny({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="60" height="100" viewBox="0 0 60 100" fill="none">
      <circle cx="30" cy="85" r="10" stroke="#00A99D" strokeWidth="2" />
      <circle cx="15" cy="58" r="6" stroke="#187A72" strokeWidth="2" />
      <circle cx="42" cy="35" r="8" stroke="#00A99D" strokeWidth="2" />
      <circle cx="22" cy="14" r="4" stroke="#187A72" strokeWidth="2" />
    </svg>
  );
}

/** 50x160 - two strands, narrow. */
export function SeaweedNarrow({ className = "" }: DecorProps) {
  return (
    <svg className={className} width="50" height="160" viewBox="0 0 50 160" fill="none">
      <path
        d="M18 160 C12 135, 26 120, 16 95 C6 70, 20 55, 14 30 C10 10, 18 0, 16 -4"
        stroke="#187A72"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M34 160 C40 138, 28 122, 36 97 C44 72, 30 57, 38 32"
        stroke="#00A99D"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
