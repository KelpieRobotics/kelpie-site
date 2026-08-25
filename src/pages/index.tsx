import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BubblesMedium, BubblesSmall, BubblesWide, FishSchool, Jellyfish, SeaweedSmall, SeaweedTall, Waves } from "@/components/SeaDecor";

function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Kelpie Robotics</title>
        <meta
          name="description"
          content="Kelpie Robotics - University of Ottawa's underwater robotics team competing in the MATE ROV competition."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center text-left text-white overflow-hidden"
        style={{ height: "100vh", width: "100%" }}
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
              "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.30) 100%)",
          }}
        />

        <div
          className={`relative z-10 flex flex-col items-start px-8 md:px-16 lg:px-24 max-w-5xl transition-opacity duration-500 `}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight font-tetra">
            Diving Deeper
            <br />
            Into Innovation
          </h1>
          <p
            className={`text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed transition-all duration-700 delay-100' : 'opacity-0 translate-y-4'}`}
          >
            University of Ottawa's student-led underwater robotics team,
            competing on the world stage since 2022.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200' : 'opacity-0 translate-y-4'}`}
          >
            <Link
              href="/team"
              className="px-8 py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: "#00A99D" }}
            >
              Meet the Team
            </Link>
            <Link
              href="/contact-us"
              className="px-8 py-3 rounded-full font-semibold text-white border-2 border-white/60 hover:bg-white/10 hover:border-white transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="animate-bounce"
          >
            <path
              d="M8 0 L8 20 M2 14 L8 20 L14 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-24 px-4 relative overflow-hidden">
        {/* Fish school - top right (from sponsors page) */}
        <FishSchool className="absolute top-10 right-16 opacity-20" />

        {/* Bubbles - bottom left */}
        <BubblesSmall className="absolute bottom-8 left-10 opacity-20  z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Left — text, ~50% */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight font-tetra">
                Who We Are
              </h2>
              <div
                className="w-14 h-1 rounded-full mb-8"
                style={{ backgroundColor: "#00A99D" }}
              />
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                Kelpie Robotics is a student-led team at the University of
                Ottawa dedicated to designing, building, and piloting underwater
                remotely operated vehicles (ROVs).
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                We compete in the MATE ROV Competition, a global challenge that
                pushes teams to engineer innovative solutions to real-world
                underwater problems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our founding in 2022, we have grown into a
                multidisciplinary team of engineers, developers, and makers
                committed to advancing the field of underwater robotics.
              </p>
            </div>

            {/* Right — team photo, ~50%, max 600px */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                src="/assets/branding/Copy of team pic.jpg"
                alt="Kelpie Robotics Team"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  aspectRatio: "3/2",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section
        className="py-28 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#d8f3ef" }}
      >
        {/* Seaweed - right */}
        <SeaweedTall className="absolute bottom-0 right-8 opacity-20" />

        {/* Bubbles - top left */}
        <BubblesWide className="absolute max-sm:opacity-10 top-8 left-12 opacity-20" />

        {/* Jellyfish - top right */}
        <Jellyfish className="absolute max-sm:opacity-10 top-6 right-10 opacity-15 z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div style={{
              position: "absolute",
              inset: "-50px -50px",
              backdropFilter: "blur(8px)",
              background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(216, 243, 239) 5%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 30% 7% at 50% 7%, black 80%, transparent 100%)",
              zIndex: -1,
            }} />
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-4 block"
            >
              Our Work
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold font-tetra"
              style={{ color: "#187A72", WebkitTextStroke: "2px  #d8f3ef", paintOrder: "stroke fill" }}
            >
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect
                      x="8"
                      y="18"
                      width="32"
                      height="18"
                      rx="4"
                      stroke="#187A72"
                      strokeWidth="2"
                    />
                    <rect
                      x="14"
                      y="10"
                      width="20"
                      height="7"
                      rx="3"
                      stroke="#187A72"
                      strokeWidth="2"
                    />
                    <circle
                      cx="18"
                      cy="27"
                      r="3"
                      stroke="#00A99D"
                      strokeWidth="2"
                    />
                    <rect
                      x="4"
                      y="21"
                      width="5"
                      height="5"
                      rx="1"
                      stroke="#00A99D"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="39"
                      y="21"
                      width="5"
                      height="5"
                      rx="1"
                      stroke="#00A99D"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M24 36 L24 42 L20 46 M24 42 L28 46"
                      stroke="#187A72"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                title: "Design & Build",
                description:
                  "We engineer custom ROVs from the ground up — designing hull structures, thruster systems, onboard electronics, and control software as a fully integrated team.",
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="#187A72"
                      strokeWidth="2"
                    />
                    <path
                      d="M24 6 C24 6, 30 14, 30 24 C30 34, 24 42, 24 42 C24 42, 18 34, 18 24 C18 14, 24 6, 24 6Z"
                      stroke="#00A99D"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="6"
                      y1="24"
                      x2="42"
                      y2="24"
                      stroke="#187A72"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 15 Q24 20 38 15"
                      stroke="#187A72"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M10 33 Q24 28 38 33"
                      stroke="#187A72"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                ),
                title: "Compete Globally",
                description:
                  "We represent the University of Ottawa at the MATE ROV World Championship, competing alongside top university teams from around the world.",
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M24 4 L28 16 L40 16 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 L20 16 Z"
                      stroke="#187A72"
                      strokeWidth="2"
                      fill="none"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="24"
                      cy="22"
                      r="4"
                      stroke="#00A99D"
                      strokeWidth="2"
                    />
                  </svg>
                ),
                title: "Grow & Inspire",
                description:
                  "We cultivate hands-on engineering experience across mechanical, electrical, and software disciplines — helping students go from classroom concepts to real-world solutions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-5">{item.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#187A72" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-white py-24 px-4 relative overflow-hidden">
        {/* Bubbles - bottom right */}
        <BubblesMedium className="absolute bottom-8 right-12 opacity-20  z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Left — text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight font-tetra">
                The Challenge
              </h2>
              <div
                className="w-14 h-1 rounded-full mb-8"
                style={{ backgroundColor: "#00A99D" }}
              />
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                The MATE ROV Competition is one of the world&apos;s most
                prestigious underwater robotics challenges for college and
                university students. Teams design, build, and operate remotely
                operated vehicles to complete mission tasks inspired by
                real-world ocean industry scenarios.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Held annually, the competition draws teams from across the globe
                and challenges students to apply engineering principles to
                problems faced by professionals in marine science, offshore
                energy, and underwater exploration.
              </p>
            </div>

            {/* Right — video */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div
                style={{
                  width: "100%",
                  maxWidth: "640px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    backgroundColor: "#111",
                  }}
                >
                  <iframe
                    src="https://drive.google.com/file/d/16rSpMKMHPLb5MpDgKibIU7CYThxEM62g/preview"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      display: "block",
                    }}
                    allow="autoplay"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us & Support Us */}
      <section className="bg-white py-24 px-4 relative overflow-hidden">
        {/* Waves - bottom */}
        <Waves className="absolute bottom-0 left-0 w-full opacity-15" />

        {/* Seaweed - top right */}
        <SeaweedSmall className="absolute top-0 right-10 opacity-15  z-0" />

        <div className="max-w-6xl mx-auto relative z-10 pb-8">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Join Us */}
            <div
              className="flex-1 rounded-2xl p-12 flex flex-col"
              style={{ backgroundColor: "#d8f3ef" }}
            >
              <h3 className="text-4xl font-bold mb-4 text-gray-900 font-tetra">Join Us</h3>
              <div
                className="w-12 h-0.5 rounded-full mb-8"
                style={{ backgroundColor: "#00A99D" }}
              />
              <p className="text-lg text-gray-600 leading-relaxed mb-10 flex-1">
                Interested in experiencing what it means to be part of the
                Kelpie Robotics team? We are always looking for passionate
                students who are eager to learn and make an impact in underwater
                robotics.
              </p>
              <div>
                <Link
                  href="https://forms.gle/yJ7TaBth74qjybqz8"
                  target="_blank"
                  className="inline-block px-8 py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: "#187A72" }}
                >
                  Join Our Team
                </Link>
              </div>
            </div>

            {/* Support Us */}
            <div
              className="flex-1 rounded-2xl p-12 flex flex-col"
              style={{ backgroundColor: "#d8f3ef" }}
            >
              <h3 className="text-4xl font-bold mb-4 text-gray-900 font-tetra">
                Support Us
              </h3>
              <div
                className="w-12 h-0.5 rounded-full mb-8"
                style={{ backgroundColor: "#00A99D" }}
              />
              <p className="text-lg text-gray-600 leading-relaxed mb-10 flex-1">
                Interested in helping support hands-on learning opportunities
                for students? Any contribution helps us build better ROVs and
                compete on the world stage. We would greatly appreciate your
                support.
              </p>
              <div>
                <Link
                  href="/sponsors"
                  className="inline-block px-8 py-3 rounded-full font-semibold border-2 transition-all hover:text-white hover:shadow-lg hover:scale-105"
                  style={{ borderColor: "#187A72", color: "#187A72" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#187A72";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#187A72";
                  }}
                >
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
