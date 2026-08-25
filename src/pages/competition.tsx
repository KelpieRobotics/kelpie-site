import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { SectionText, SectionTitle } from "@/components/Paragraph";
import { Jellyfish } from "@/components/SeaDecor";

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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-tetra">
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
              className="relative block h-full hover:opacity-90 transition-opacity"
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
          <Jellyfish className="opacity-15 my-2" />

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