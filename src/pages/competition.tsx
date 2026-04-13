import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ParagraphSection } from "@/components/Paragraph";

export default function Competition() {
  return (
    <div>
      <Head>
        <title>Competition | Kelpie Robotics</title>
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
            backgroundImage: "url('/assets/branding/Copy of wide pool.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "25% 50%",
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
          className={`relative z-10 flex flex-col items-start px-8 md:px-16 lg:px-24 max-w-5xl`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            The Competition
          </h1>
          <p
            className={`text-lg text-gray-300 mt-4 max-w-2xl opacity-100 translate-y-0 opacity-0 translate-y-4`}
          >
            MATE ROV 2026
          </p>
        </div>
      </section>
      <div>
        <div className="bg-white p-5">
          <ParagraphSection
            title="What is the MATE ROV Competition?"
            description="The MATE ROV Competition is a global event where student-led teams design remotely operated underwater vehicles (ROVs)
            to complete a variety of tasks. The competition's challenges encourage students to build skills in engineering, electronics, physics, and math.
            Students from grades K-12, collage, and university are elegiable to participate. 
            Kelpie Robotics is proud to be participating in the Explorer class of the MATE ROV competition."
            otherside={
              <div className="relative w-full h-64">
                <Link
                  href="https://materovcompetition.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/branding/MATE_ROV_Logo-01-1.png"
                    alt="mate logo"
                    fill
                    className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>
            }
          />
          <ParagraphSection
            title="Location"
            description="Schools across many countries participate in the competition, and each year it is hosted in a new location. In 2026 the competition location
            will be in Newfoundland."
            flip={true}
            otherside={
              <svg
                width="180"
                height="280"
                viewBox="0 0 80 140"
                fill="none"
                opacity="0.3"
              >
                <circle
                  cx="60"
                  cy="20"
                  r="10"
                  stroke="#00A99D"
                  strokeWidth="2"
                />
                <circle
                  cx="25"
                  cy="50"
                  r="7"
                  stroke="#187A72"
                  strokeWidth="2"
                />
                <circle
                  cx="55"
                  cy="85"
                  r="13"
                  stroke="#00A99D"
                  strokeWidth="2"
                />
                <circle
                  cx="20"
                  cy="120"
                  r="5"
                  stroke="#187A72"
                  strokeWidth="2"
                />
              </svg>
            }
          />
          <ParagraphSection
            title="Marine Conservation"
            description="Dedicated to marine conservation"
            otherside={
              <svg
                className="opacity-15"
                width="130"
                height="200"
                viewBox="0 0 130 200"
                fill="none"
              >
                {/* Big jellyfish */}
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
                {/* Small jellyfish */}
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
            }
          />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <iframe
              width="750"
              height="422"
              src="https://www.youtube.com/embed/WIGB4HGzLF8"
              frameBorder="0"
              allowFullScreen
              style={{ maxWidth: "750px", width: "100%", borderRadius: "25px" }}
            ></iframe>
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
