import siteConfig from '@/websiteconfig.json';
import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import PixelTextReveal from '@/components/PixelTextReveal';

const HERO_LINES = ['Our Sponsors'];

export default function Sponsors() {
  const sponsors = siteConfig.sponsors;
  const [textRevealed, setTextRevealed] = useState(false);
  const handleRevealComplete = useCallback(() => setTextRevealed(true), []);

  const years = sponsors.reduce<number[]>((acc, sponsor) => {
    sponsor.yearsActive.forEach((year) => {
      if (!acc.includes(year)) {
        acc.push(year);
      }
    });
    acc.sort((a, b) => b - a);
    return acc;
  }, []);

  const currentYear = years[0] || 2023;
  const currentSponsors = sponsors.filter((sponsor) =>
    sponsor.yearsActive.includes(currentYear)
  );
  const previousSponsors = sponsors.filter(
    (sponsor) => !sponsor.yearsActive.includes(currentYear)
  );

  return (
    <>
      <Head>
        <title>Sponsors | Kelpie Robotics</title>
        <meta name="description" content="Kelpie Robotics sponsors and partners supporting underwater robotics innovation." />
      </Head>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center text-left text-white overflow-hidden" style={{ height: '50vh', width: '100%' }}>
        <Navbar />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/assets/branding/Copy of table robot.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.30) 100%)',
          }}
        />

        <PixelTextReveal lines={HERO_LINES} onComplete={handleRevealComplete} />

        <div
          className={`relative z-10 flex flex-col items-start px-8 md:px-16 lg:px-24 max-w-5xl transition-opacity duration-500 ${textRevealed ? 'opacity-100' : 'opacity-0'}`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Our Sponsors
          </h1>
          <p className={`text-lg text-gray-300 mt-4 max-w-2xl transition-all duration-700 delay-200 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            The partners who make our mission possible.
          </p>
        </div>
      </section>

      {/* About Sponsorship */}
      <section className="bg-white py-20 px-4 relative overflow-hidden">
        {/* Bubbles - top right edge */}
        <svg className="absolute top-0 right-0 opacity-20 pointer-events-none" width="90" height="160" viewBox="0 0 90 160" fill="none">
          <circle cx="70" cy="20" r="14" stroke="#00A99D" strokeWidth="2" />
          <circle cx="40" cy="55" r="9" stroke="#187A72" strokeWidth="2" />
          <circle cx="78" cy="85" r="6" stroke="#00A99D" strokeWidth="2" />
          <circle cx="50" cy="120" r="16" stroke="#187A72" strokeWidth="2" />
          <circle cx="20" cy="148" r="5" stroke="#00A99D" strokeWidth="2" />
        </svg>

        {/* Seaweed - bottom left edge */}
        <svg className="absolute bottom-0 left-0 opacity-20 pointer-events-none" width="50" height="180" viewBox="0 0 50 180" fill="none">
          <path d="M14 180 C8 155, 22 140, 12 115 C2 90, 18 75, 10 50 C4 28, 16 10, 13 0" stroke="#187A72" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M36 180 C42 158, 30 142, 38 118 C46 94, 32 78, 40 54" stroke="#00A99D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>

        {/* Fish school - far left edge */}
        <svg className="absolute top-1/2 -left-2 opacity-20 pointer-events-none -translate-y-1/2" width="80" height="80" viewBox="0 0 100 80" fill="none">
          <path d="M30 15 C22 8, 8 6, 2 15 C8 24, 22 22, 30 15 Z" fill="#00A99D" />
          <path d="M33 15 L40 8 L40 22 Z" fill="#00A99D" />
          <path d="M55 35 C47 28, 33 26, 27 35 C33 44, 47 42, 55 35 Z" fill="#00A99D" />
          <path d="M58 35 L65 28 L65 42 Z" fill="#00A99D" />
          <path d="M40 60 C32 53, 18 51, 12 60 C18 69, 32 67, 40 60 Z" fill="#00A99D" />
          <path d="M43 60 L50 53 L50 67 Z" fill="#00A99D" />
        </svg>


        {/* Jellyfish - top right */}
        <svg className="absolute top-40 right-10 opacity-15 pointer-events-none" width="130" height="200" viewBox="0 0 130 200" fill="none">
          {/* Big jellyfish */}
          <path d="M8 50 C8 18, 72 18, 72 50 C72 60, 40 64, 8 50Z" fill="#00A99D" opacity="0.4" />
          <path d="M14 46 C18 28, 62 28, 66 46" stroke="white" strokeWidth="1.2" fill="none" opacity="0.35" />
          <path d="M20 44 C23 32, 57 32, 60 44" stroke="white" strokeWidth="0.8" fill="none" opacity="0.25" />
          <path d="M18 62 C15 76, 20 86, 16 100 C13 112, 18 120, 14 134" stroke="#00A99D" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M28 64 C26 80, 32 90, 28 106 C24 120, 30 130, 26 146" stroke="#187A72" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M40 65 C40 82, 40 94, 40 110 C40 124, 40 134, 38 150" stroke="#00A99D" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M52 64 C54 80, 48 90, 52 106 C56 120, 50 130, 54 146" stroke="#187A72" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M62 62 C65 76, 60 86, 64 100 C67 112, 62 120, 66 134" stroke="#00A99D" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M12 63 C10 74, 14 80, 11 90" stroke="#187A72" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
          <path d="M68 63 C70 74, 66 80, 69 90" stroke="#00A99D" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
          {/* Small jellyfish */}
          <path d="M86 30 C86 16, 122 16, 122 30 C122 36, 104 38, 86 30Z" fill="#187A72" opacity="0.35" />
          <path d="M90 28 C93 20, 118 20, 120 28" stroke="white" strokeWidth="0.8" fill="none" opacity="0.3" />
          <path d="M92 37 C90 46, 93 52, 91 60" stroke="#187A72" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M100 38 C99 48, 102 54, 100 64" stroke="#00A99D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M108 38 C110 48, 106 54, 109 64" stroke="#187A72" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M116 37 C118 46, 115 52, 117 60" stroke="#00A99D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#187A72' }}>Why Partner With Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Kelpie Robotics is a student-led team that relies on the support of our sponsors to participate in the MATE ROV competition. We are grateful for the contributions of our sponsors, who play a crucial role in helping us develop our skills and achieve our goals in the field of underwater robotics.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your support is more than just financial — it is a partnership that enables us to create a collaborative and dynamic environment for our team members to learn, grow, and thrive. We are committed to showcasing our partnership through frequent features on our social media platforms and by displaying your logo on our ROV during the competition.
          </p>
        </div>
      </section>

      {/* Current Year Sponsors */}
      <section className="bg-gray-50 py-20 px-4 relative overflow-hidden">
        {/* Waves - bottom */}
        <svg className="absolute bottom-0 left-0 w-full opacity-25" height="40" viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none">
          <path d="M0 25 C100 10, 200 35, 300 20 C400 5, 500 30, 600 20 C700 10, 800 35, 900 20 C1000 5, 1100 30, 1200 20" stroke="#00A99D" strokeWidth="3" />
          <path d="M0 35 C100 20, 200 40, 300 30 C400 18, 500 38, 600 28 C700 18, 800 40, 900 30 C1000 18, 1100 38, 1200 30" stroke="#187A72" strokeWidth="2" />
        </svg>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#187A72' }}>
            {currentYear} Sponsors
          </h2>

          {currentSponsors.length > 0 ? (
            <div className="sponsor-ticker-wrapper">
              <div className="sponsor-ticker">
                {[...currentSponsors, ...currentSponsors].map((sponsor, i) => (
                  <a
                    key={`${sponsor.name}-${i}`}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor-ticker-item"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-24 max-w-[260px] object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-8">
              No sponsors found for {currentYear}.
            </p>
          )}
        </div>
      </section>

      {/* Previous Sponsors */}
      {previousSponsors.length > 0 && (
        <section className="bg-white py-16 px-4 relative overflow-hidden">
          {/* Bubbles - top left corner */}
          <svg className="absolute top-0 left-0 opacity-15 pointer-events-none" width="60" height="100" viewBox="0 0 60 100" fill="none">
            <circle cx="30" cy="85" r="10" stroke="#00A99D" strokeWidth="2" />
            <circle cx="15" cy="58" r="6" stroke="#187A72" strokeWidth="2" />
            <circle cx="42" cy="35" r="8" stroke="#00A99D" strokeWidth="2" />
            <circle cx="22" cy="14" r="4" stroke="#187A72" strokeWidth="2" />
          </svg>
          {/* Seaweed - bottom right corner */}
          <svg className="absolute bottom-0 right-0 opacity-15 pointer-events-none" width="50" height="160" viewBox="0 0 50 160" fill="none">
            <path d="M18 160 C12 135, 26 120, 16 95 C6 70, 20 55, 14 30 C10 10, 18 0, 16 -4" stroke="#187A72" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M34 160 C40 138, 28 122, 36 97 C44 72, 30 57, 38 32" stroke="#00A99D" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#187A72' }}>
              Previous Sponsors
            </h2>
            <div className="sponsor-ticker-wrapper">
              <div className="sponsor-ticker-slow">
                {[...previousSponsors, ...previousSponsors].map((sponsor, i) => (
                  <a
                    key={`${sponsor.name}-prev-${i}`}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor-ticker-item"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-16 max-w-[180px] object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Become a Sponsor */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #187A72 0%, #00A99D 100%)' }}>
        {/* Bubbles floating up - left */}
        <svg className="absolute bottom-4 left-12 opacity-20" width="80" height="200" viewBox="0 0 80 200" fill="none">
          <circle cx="20" cy="180" r="10" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="150" r="6" stroke="white" strokeWidth="1.5" />
          <circle cx="30" cy="110" r="14" stroke="white" strokeWidth="1.5" />
          <circle cx="60" cy="70" r="4" stroke="white" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="8" stroke="white" strokeWidth="1.5" />
          <circle cx="15" cy="15" r="5" stroke="white" strokeWidth="1.5" />
        </svg>

        {/* Small fish school - right */}
        <svg className="absolute top-1/3 right-16 opacity-15" width="100" height="80" viewBox="0 0 100 80" fill="none">
          <path d="M30 15 C22 8, 8 6, 2 15 C8 24, 22 22, 30 15 Z" fill="white" />
          <path d="M33 15 L40 8 L40 22 Z" fill="white" />
          <path d="M55 35 C47 28, 33 26, 27 35 C33 44, 47 42, 55 35 Z" fill="white" />
          <path d="M58 35 L65 28 L65 42 Z" fill="white" />
          <path d="M40 60 C32 53, 18 51, 12 60 C18 69, 32 67, 40 60 Z" fill="white" />
          <path d="M43 60 L50 53 L50 67 Z" fill="white" />
        </svg>

        {/* Anchor - bottom right */}
        <svg className="absolute bottom-8 right-20 opacity-10" width="60" height="80" viewBox="0 0 60 80" fill="none">
          <circle cx="30" cy="10" r="8" stroke="white" strokeWidth="2" />
          <line x1="30" y1="18" x2="30" y2="65" stroke="white" strokeWidth="2.5" />
          <path d="M10 55 C10 70, 30 75, 30 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 55 C50 70, 30 75, 30 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="20" y1="35" x2="40" y2="35" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the companies investing in the future of underwater robotics and the next generation of engineering talent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-10 py-4 rounded-full font-semibold text-lg bg-white transition-all hover:shadow-lg hover:scale-105"
              style={{ color: '#187A72' }}
            >
              Become a Sponsor
            </Link>
            <Link
              href="/contact-us"
              className="px-10 py-4 rounded-full font-semibold text-lg text-white border-2 border-white/60 transition-all hover:bg-white/10 hover:border-white"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
