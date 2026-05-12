import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { SectionText, SectionTitle } from "@/components/Paragraph";

export default function Competition() {
  return (
    <div className="bg-white">
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
        <div className="relative z-10 flex flex-col items-start px-8 md:px-16 lg:px-24 max-w-5xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style={{fontFamily: "Tetra-ITC"}}>
            The Competition
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl">
            MATE ROV 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8 py-12 flex flex-col gap-16">

        {/* What is MATE ROV */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 min-w-0">
            <div className="text-center">
            <SectionTitle divStyle="mx-auto">What is the MATE ROV Competition?</SectionTitle></div>
            <SectionText>
              The <a  className="text-teal-600 underline hover:text-teal-800 visited:text-teal-700" href="https://materovcompetition.org/"
              target="_blank"
              rel="noopener noreferrer">
             MATE ROV Competition
            </a> is a global event where student-led
              teams design remotely operated underwater vehicles (ROVs) to
              complete a variety of tasks. The competition's challenges
              encourage students to build skills in engineering, electronics,
              physics, and math, as well as learning hands-on technical skills and real world applications of robotics.
               Students from grades K–12, college, and
              university are eligible to participate.
              <br />
              <br />
              As we are an university team, Kelpie Robotics it proud to participate in the Explorer Class of the MATE ROV Competition.
            </SectionText>
          </div>
          <div className="flex-shrink-0 w-full md:w-56 lg:w-64">
            <Link
              href="https://materovcompetition.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-40 md:h-48 w-full hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/branding/MATE_ROV_Logo-01-1.png"
                  alt="MATE ROV Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col md:flex-row-reverse md:items-stretch gap-8 md:gap-12">
          <div className="flex-1 min-w-0">
            <div className="text-center">
              <SectionTitle divStyle="mx-auto">Location</SectionTitle>
            </div>
            <SectionText>
              The <a className="text-teal-600 underline hover:text-teal-800 visited:text-teal-700" href="https://materovcompetition.org/world-championship" target="_blank" rel="noopener noreferrer">MATE ROV World Championships</a> take place each year in June.
              The World Championships showcase the top 60 robotics teams from 20 countries around the world.
              The location changes in each year which challenges reflecting real marine robotics issues facing the host region.
              <br />
              <br />
              In past years Kelpie has competed in:
            </SectionText>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1 text-gray-700">
              <li>Long Beach, California — 2022</li>
              <li>Longmont, Colorado — 2023</li>
              <li>Alpena, Michigan — 2025</li>
            </ul>
            <SectionText>
              The 2026 World Championships will be held in St. John's, Newfoundland and Labrador June 25-27, marking Kelpie's fourth time competing.
            </SectionText>
          </div>

          <div className="w-full flex-1 aspect-video md:aspect-auto relative overflow-hidden rounded-xl">
            <Link
              href="https://materovcompetition.org/world-championship"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full hover:opacity-90 transition-opacity"
            >
              <Image
                src="/assets/branding/view-of-st-johns-from-battery-hotel_800.jpg"
                alt="St. John's Newfoundland"
                fill
                className="object-cover"
              />
            </Link>
          </div>
        </div>


        {/* Marine Conservation */}
    <div className="flex flex-col items-center text-center gap-4">
      <SectionTitle divStyle="mx-auto">Marine Conservation</SectionTitle>

      <div className="w-full text-left">
        <div className="float-right ml-8 mb-4 w-full md:w-1/2 aspect-video relative rounded-xl overflow-hidden">
          <Image
            src="/assets/branding/garbage.jpg"
            alt="Trash Collection"
            fill
            className="object-cover"
          />
        </div>
        <SectionText >
          Kelpie's mission aligns with the MATE program alongside the United Nations' Decade of Action for Cryospheric Sciences 
          that emphasizes the importance of ecology in marine ecosystems.
          <br/><br/>
          Through developing technologies, such as ROVs, marine ecosystems can be monitored and maintained safely 
          and responsibly to aid in conservation efforts. Kelpie's goal is to create a prototype ROV to do just that!
          <br/><br/>
          Our ROV is built with sustainability in mind. The majority of our components are reused year to 
          year and other materials are repurposed or recycled after use, reducing our environmental footprint. 
          It is also built with marine life in mind, with operation causing no ecological harm and minimized disturbance.
          <br/><br/>
          We back our environmental promise by promoting marine conservation by educating our members during 
          conferences and sharing our acquired knowledge in our events and on our social media platforms. 
          We also take part in knowledge transfer by encouraging our community to partake in responsible 
          consumption and participate in ecological protection.
          <br/><br/>
          By implementing environmentally responsible practices, Kelpie Robotics encourages the development 
          of technological solutions and increases awareness on the importance of the protection 
          of marine environments for a greener future.
        </SectionText>
      </div>


          {/* Jellyfish SVG */}
          <svg
            className="opacity-15 my-2"
            width="130"
            height="200"
            viewBox="0 0 130 200"
            fill="none"
          >
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
            <path d="M86 30 C86 16, 122 16, 122 30 C122 36, 104 38, 86 30Z" fill="#187A72" opacity="0.35" />
            <path d="M90 28 C93 20, 118 20, 120 28" stroke="white" strokeWidth="0.8" fill="none" opacity="0.3" />
            <path d="M92 37 C90 46, 93 52, 91 60" stroke="#187A72" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M100 38 C99 48, 102 54, 100 64" stroke="#00A99D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M108 38 C110 48, 106 54, 109 64" stroke="#187A72" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M116 37 C118 46, 115 52, 117 60" stroke="#00A99D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>

         {/* Video */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full aspect-video">
            <iframe
              src="https://drive.google.com/file/d/16rSpMKMHPLb5MpDgKibIU7CYThxEM62g/preview"
              className="absolute inset-0 w-full h-full rounded-xl"
              allowFullScreen
            />
          </div>
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/WIGB4HGzLF8"
              allowFullScreen
            />
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}