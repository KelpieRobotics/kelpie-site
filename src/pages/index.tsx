import React, { useState, useCallback } from "react";
import siteConfig from "@/websiteconfig.json";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
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
        <svg
          className="absolute top-10 right-16 opacity-20"
          width="100"
          height="80"
          viewBox="0 0 100 80"
          fill="none"
        >
          <path
            d="M30 15 C22 8, 8 6, 2 15 C8 24, 22 22, 30 15 Z"
            fill="#00A99D"
          />
          <path d="M33 15 L40 8 L40 22 Z" fill="#00A99D" />
          <path
            d="M55 35 C47 28, 33 26, 27 35 C33 44, 47 42, 55 35 Z"
            fill="#00A99D"
          />
          <path d="M58 35 L65 28 L65 42 Z" fill="#00A99D" />
          <path
            d="M40 60 C32 53, 18 51, 12 60 C18 69, 32 67, 40 60 Z"
            fill="#00A99D"
          />
          <path d="M43 60 L50 53 L50 67 Z" fill="#00A99D" />
        </svg>

        {/* Bubbles - bottom left */}
        <svg
          className="absolute bottom-8 left-10 opacity-20"
          width="60"
          height="120"
          viewBox="0 0 60 120"
          fill="none"
        >
          <circle cx="30" cy="100" r="12" stroke="#00A99D" strokeWidth="2" />
          <circle cx="15" cy="70" r="7" stroke="#187A72" strokeWidth="2" />
          <circle cx="40" cy="45" r="9" stroke="#00A99D" strokeWidth="2" />
          <circle cx="20" cy="20" r="5" stroke="#187A72" strokeWidth="2" />
        </svg>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Left — text, ~50% */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
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
        <svg
          className="absolute bottom-0 right-8 opacity-20"
          width="60"
          height="200"
          viewBox="0 0 60 200"
          fill="none"
        >
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

        {/* Bubbles - top left */}
        <svg
          className="absolute top-8 left-12 opacity-20"
          width="100"
          height="160"
          viewBox="0 0 100 160"
          fill="none"
        >
          <circle cx="70" cy="20" r="14" stroke="#00A99D" strokeWidth="2" />
          <circle cx="30" cy="55" r="9" stroke="#187A72" strokeWidth="2" />
          <circle cx="80" cy="80" r="6" stroke="#00A99D" strokeWidth="2" />
          <circle cx="50" cy="120" r="16" stroke="#187A72" strokeWidth="2" />
          <circle cx="20" cy="145" r="5" stroke="#00A99D" strokeWidth="2" />
        </svg>

        {/* Jellyfish - top right */}
        <svg
          className="absolute top-6 right-10 opacity-15"
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

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: "#00A99D" }}
            >
              Our Work
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#187A72" }}
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
        <svg
          className="absolute bottom-8 right-12 opacity-20"
          width="80"
          height="140"
          viewBox="0 0 80 140"
          fill="none"
        >
          <circle cx="60" cy="20" r="10" stroke="#00A99D" strokeWidth="2" />
          <circle cx="25" cy="50" r="7" stroke="#187A72" strokeWidth="2" />
          <circle cx="55" cy="85" r="13" stroke="#00A99D" strokeWidth="2" />
          <circle cx="20" cy="120" r="5" stroke="#187A72" strokeWidth="2" />
        </svg>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Left — text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
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
        <svg
          className="absolute bottom-0 left-0 w-full opacity-15"
          height="40"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          fill="none"
        >
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

        {/* Seaweed - top right */}
        <svg
          className="absolute top-0 right-10 opacity-15"
          width="50"
          height="140"
          viewBox="0 0 50 140"
          fill="none"
        >
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

        <div className="max-w-6xl mx-auto relative z-10 pb-8">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Join Us */}
            <div
              className="flex-1 rounded-2xl p-12 flex flex-col"
              style={{ backgroundColor: "#d8f3ef" }}
            >
              <h3 className="text-4xl font-bold mb-4 text-gray-900">Join Us</h3>
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
                  href="/contact-us"
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
              <h3 className="text-4xl font-bold mb-4 text-gray-900">
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
