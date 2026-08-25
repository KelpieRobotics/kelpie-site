import siteConfig from "@/websiteconfig.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { Anchor, BubblesCorner, BubblesTiny, BubblesTrail, FishSchool, Jellyfish, SeaweedMedium, SeaweedNarrow, WavesBold } from "@/components/SeaDecor";

function SponsorTicker({ sponsors, slow }) {
  const tickerClass = slow ? "sponsor-ticker-slow" : "sponsor-ticker";
  return (
    <div className="sponsor-ticker-wrapper">
      <div className={tickerClass}>
        {[...sponsors, ...sponsors].map((sponsor, i) => (
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
              className={`max-h-20 object-contain transition-opacity hover:opacity-100 'opacity-90'`}
              style={{
                filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4))",
                borderRadius: "5px",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

function SponsorSection({ title, sponsors, children, slow }) {
  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#d8f3ef" }}
    >
      {children}
      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-2xl md:text-4xl font-bold mb-10 text-center font-tetra"
          style={{ color: "#187A72"}}
        >
          {title}
        </h2>
        {sponsors.length > 0 ? (
          <SponsorTicker sponsors={sponsors} slow={slow} />
        ) : (
          <p className="text-center text-gray-500 text-lg mt-8">
            No sponsors found.
          </p>
        )}
      </div>
    </section>
  );
}

export default function Sponsors() {
  const sponsors = siteConfig.sponsors;

  const years = sponsors.reduce<number[]>((acc, sponsor) => {
    sponsor.yearsActive.forEach((year) => {
      if (!acc.includes(year)) {
        acc.push(year);
      }
    });
    acc.sort((a, b) => b - a);
    return acc;
  }, []);

  const currentYear = years[0] || 2026;
  const currentSponsors = sponsors.filter((sponsor) =>
    sponsor.yearsActive.includes(currentYear),
  );
  const previousSponsors = sponsors.filter(
    (sponsor) => !sponsor.yearsActive.includes(currentYear),
  );

  return (
    <>
      <Head>
        <title>Sponsors | Kelpie Robotics</title>
        <meta
          name="description"
          content="Kelpie Robotics sponsors and partners supporting underwater robotics innovation."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center text-left text-white overflow-hidden"
        style={{ height: "50vh", width: "100%" }}
      >
        <Navbar />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/branding/Copy of table robot.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.30) 100%)",
          }}
        />

        <div
          className={`relative z-10 flex flex-col items-start px-8 md:px-16 lg:px-24 max-w-5xl transition-opacity duration-500 `}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-tetra">
            Our Sponsors
          </h1>
          <p
            className={`text-lg text-gray-300 mt-4 max-w-2xl transition-all duration-700 delay-200`}
          >
            The partners who make our mission possible.
          </p>
        </div>
      </section>

      {/* About Sponsorship */}
      <section className="bg-white py-20 px-4 relative overflow-hidden">
        {/* Bubbles - top right edge */}
        <BubblesCorner className="absolute top-0 right-0 opacity-20 pointer-events-none" />

        {/* Seaweed - bottom left edge */}
        <SeaweedMedium className="absolute bottom-0 left-0 opacity-20 pointer-events-none" />

        {/* Fish school - far left edge */}
        <FishSchool className="absolute top-1/2 -left-2 opacity-20 pointer-events-none -translate-y-1/2" />

        {/* Jellyfish - top right */}
        <Jellyfish className="absolute top-40 right-10 opacity-15 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div style={{
            position: "absolute",
            inset: "-100px -130px",
            backdropFilter: "blur(8px)",
            background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(255, 255, 255) 5%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 80%, transparent 100%)",
            zIndex: -1,
          }} />
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 font-tetra"
            style={{ color: "#187A72", WebkitTextStroke: "2px  #ffffff", paintOrder: "stroke fill" }}
          >
            Why Partner With Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 ">
            Kelpie Robotics is a student-led team that relies on the support of
            our sponsors to participate in the MATE ROV competition. We are
            grateful for the contributions of our sponsors, who play a crucial
            role in helping us develop our skills and achieve our goals in the
            field of underwater robotics.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your support is more than just financial — it is a partnership that
            enables us to create a collaborative and dynamic environment for our
            team members to learn, grow, and thrive. We are committed to
            showcasing our partnership through frequent features on our social
            media platforms and by displaying your logo on our ROV during the
            competition.
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-20">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 font-tetra"
            style={{ color: "#187A72"}}
          >
            A Special Thanks
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are incredibly grateful for the organizations that support us at the University of Ottawa.
            We proudly work out of the University of Ottawa’s John McEntyre (JMTS)
            Team Space and thank them for their resources and encouragement 
            in our journey. In addition, we thank the Centre for Entrepreneurship 
            and Engineering Design (CEED) and the Engineering Endowment Fund (EEF) 
            from the Faculty of Engineering for their generous support.
          </p>
         
        </div>
      </section>

      {/* Current Year Sponsors */}
      <SponsorSection
        title={`${currentYear} Sponsors`}
        sponsors={currentSponsors}
        slow={false}
      >
        <WavesBold className="absolute bottom-0 left-0 w-full opacity-25" />
      </SponsorSection>

      {/* Previous Sponsors */}
      {previousSponsors.length > 0 && (
        <SponsorSection
          title="Previous Sponsors"
          sponsors={previousSponsors}
          slow={true}
        >
          <BubblesTiny className="absolute top-0 left-0 opacity-15 pointer-events-none" />
          <SeaweedNarrow className="absolute bottom-0 right-0 opacity-15 pointer-events-none" />
        </SponsorSection>
      )}

      {/* Become a Sponsor */}
      <section
        className="py-24 px-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #187A72 0%, #00A99D 100%)",
        }}
      >
        {/* Bubbles floating up - left */}
        <BubblesTrail className="absolute bottom-4 left-12 opacity-20" />

        {/* Small fish school - right */}
        <FishSchool className="absolute top-1/3 right-16 opacity-15" color="white" />

        {/* Anchor - bottom right */}
        <Anchor className="absolute bottom-8 right-20 opacity-10" />

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div style={{
            position: "absolute",
            inset: "-50px -50px",
            backdropFilter: "blur(8px)",
            background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(1, 166, 154) 10%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 80%, transparent 100%)",
            zIndex: -1,
          }} />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-tetra">
            Partner With Us
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the companies investing in the future of underwater robotics
            and the next generation of engineering talent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-10 py-4 rounded-full font-semibold text-lg bg-white transition-all hover:shadow-lg hover:scale-105 font-tetra"
              style={{ color: "#187A72"}}
            >
              Become a Sponsor
            </Link>
            <Link
              href="https://give.uottawa.ca/page/162055/donate/1?fund.id=EN328N"
              target="_blank"
              className="px-10 py-4 rounded-full font-semibold text-lg text-white border-2 border-white/60 transition-all hover:bg-white/10 hover:border-white font-tetra"
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
