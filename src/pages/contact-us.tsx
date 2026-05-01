import Head from "next/head";
import siteConfig from "@/websiteconfig.json";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import TemplatePage from "@/reusable/TemplatePage";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/kelpie-robotics",
    icon: FaLinkedin,
    label: "LinkedIn",
    color: "text-blue-700 hover:text-blue-900",
  },
  // {
  //   href: "https://www.facebook.com/profile.php?id=100075181450829",
  //   icon: FaFacebook,
  //   label: "Facebook",
  //   color: "text-blue-700 hover:text-blue-900",
  // },
  // {
  //   href: "https://twitter.com/kelpie_robotics",
  //   icon: FaTwitter,
  //   label: "Twitter",
  //   color: "text-sky-500 hover:text-sky-700",
  // },
  {
    href: "https://www.instagram.com/kelpie_robotics/",
    icon: FaInstagram,
    label: "Instagram",
    color: "text-pink-500 hover:text-pink-700",
  },
  {
    href: "https://www.twitch.tv/kelpie_robotics.",
    icon: FaTwitch,
    label: "Twitch",
    color: "text-purple-500 hover:text-purple-700",
  },
  {
    href: "https://github.com/KelpieRobotics",
    icon: FaGithub,
    label: "GitHub",
    color: "text-gray-700 hover:text-gray-900",
  },
];

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us | Kelpie Robotics</title>
      </Head>
      <Navbar />
      <div className="relative w-full min-h-screen overflow-hidden">
        <Image
          src="/assets/gallery/2022-pool-test-1/7.jpg"
          alt="background"
          fill
          className="object-cover blur scale-105"
        />

        <div className="relative z-10 min-h-screen flex items-center justify-center max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 pt-20">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "2rem",
              boxShadow:
                "0 10px 10px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.06)",
              padding: "2rem",
              margin: "2rem",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight" style={{fontFamily: "Tetra-ITC"}}>
              Contact Us
            </h2>
            <p className="text-gray-600 text-xl mb-10">
              Have questions or want to keep up with our progress? Reach out
              through any of the channels below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column — social + contact info */}
              <div className="flex flex-col gap-8">
                {/* Social Media */}
                <div
                  className="bg-gray-50 rounded-2xl p-6 shadow-sm"
                  style={{ backgroundColor: "#e9f3f2" }}
                >
                  <h2 className="text-xl font-bold mb-4 text-gray-800" style={{fontFamily: "Tetra-ITC"}}>
                    Follow Us
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map(({ href, icon: Icon, label, color }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener"
                        aria-label={label}
                      >
                        <Icon
                          className={`text-4xl transition-colors ${color}`}
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div
                  className="bg-gray-50 rounded-2xl p-6 shadow-sm"
                  style={{ backgroundColor: "#e9f3f2" }}
                >
                  <h2 className="text-xl font-bold mb-4 text-gray-800" style={{fontFamily: "Tetra-ITC"}}>
                    Get In Touch
                  </h2>
                  <div className="flex flex-col gap-4 text-gray-600">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-xl text-teal-600 shrink-0" />
                      <span>{siteConfig.email}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaLocationArrow className="text-xl text-teal-600 shrink-0 mt-1" />
                      <span>
                        150 Louis-Pasteur Private
                        <br /> Ottawa, ON, K1N 9A7
                      </span>
                    </div>
                    <button
                      className="mt-2 bg-teal-600 hover:bg-teal-700 text-white font- py-2 px-6 rounded-lg transition-colors w-fit" style={{fontFamily: "Tetra-ITC"}}
                      onClick={() => window.open(`mailto:${siteConfig.email}`)}
                    >
                      Send Email
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column — map */}
              <div className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden min-h-64">
                <iframe
                  src="https://maps.google.com/maps?q=jmts%20uottawa&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    minHeight: "320px",
                  }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
