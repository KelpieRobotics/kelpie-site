import siteConfig from '@/websiteconfig.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-4 text-white relative overflow-hidden" style={{ backgroundColor: '#187A72' }}>
      {/* Anchor - bottom right */}
      <svg className="absolute bottom-6 right-16 opacity-10" width="60" height="80" viewBox="0 0 60 80" fill="none">
        <circle cx="30" cy="10" r="8" stroke="white" strokeWidth="2" />
        <line x1="30" y1="18" x2="30" y2="65" stroke="white" strokeWidth="2.5" />
        <path d="M10 55 C10 70, 30 75, 30 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 55 C50 70, 30 75, 30 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="35" x2="40" y2="35" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/assets/branding/Copy of kelpii.svg"
                alt="Kelpie Robotics"
                width={100}
                height={100}
              />
            </div>
            <p className="text-sm text-white/80">
              University of Ottawa's underwater robotics team, since 2022.
            </p>
          </div>

          {/* Navigation - no "Pages" heading, just list the pages */}
          <div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {siteConfig.navigation.map((nav) => (
                <li key={nav.url}>
                  <Link href={nav.url} className="hover:text-white transition-colors">
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/kelpie_robotics/',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/KelpieRobotics',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/kelpie-robotics/',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-white/80">{siteConfig.email}</p>
            <p className="text-sm text-white/80">Ottawa, ON, Canada</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Kelpie Robotics. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
}
