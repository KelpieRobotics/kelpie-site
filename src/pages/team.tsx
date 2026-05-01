import siteConfig from "@/websiteconfig.json";
import teamData from "@/teamData.json";
import members from "@/members.json";
import { useState} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Head from "next/head";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import * as BsIcons from "react-icons/bs";

export default function TeamMembers() {
  const teamMembers = members.teamMembers;
  const teams = teamData.teams;
  const years = siteConfig.years;

  const [selectedYear, setSelectedYear] = useState(2026);
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const filteredTeamMembers = filterTeamMembersByYear(
    teamMembers,
    selectedYear,
  );
  const filteredTeams = filterTeamsByYear(teams, selectedYear);

  function filterTeamMembersByYear(teamMembers, year) {
    return teamMembers.filter((member) => member.yearsActive.includes(year));
  }

  function filterTeamsByYear(teams, year) {
    return teams
      .map((team) => {
        const yearEntry = team.yearsData.find((entry) => entry.year === year);
        if (!yearEntry) return null;

        return {
          ...team,
          yearsData: yearEntry,
        };
      })
      .filter(Boolean);
  }

  function getMembersByIds(ids) {
    return teamMembers.filter((member) => ids.includes(member.id));
  }
  function getMemberById(id) {
    return teamMembers.find((member) => member.id === id);
  }

  function sortClosure(a, b) {
    if (a.image && !b.image) {
      return -1;
    } else if (!a.image && b.image) {
      return 1;
    }

    return a.name.localeCompare(b.name);
  }

  const IconImport = ({ name }) => {
    const Icon = BsIcons[name];
    return Icon ? <Icon className="w-10 h-10 text-white" /> : null;
  };

  const MemberTemplate = ({ member }) => {
    return (
      <div className="rounded-xl overflow-hidden bg-white shadow-lg flex flex-row items-center justify-start h-full">
        {member.image && (
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover rounded-xl border-4"
              style={{ borderColor: "#d8f3ef" }}
            />
          </div>
        )}
        <div className="py-2 px-4">
          <div className="name-div">
            <h2 className="text-xl text-black">{member.name}</h2>
          </div>
          <div className="program-div flex-auto">
            <h3 className="text-black">{member.program}</h3>
          </div>
        </div>

        {/* <div className='flex-auto'>
          {member.personalSite && (
            <a href={member.personalSite} className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">
              Personal Website
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div> */}
      </div>
    );
  };

  const TeamTemplate = ({ team }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div className="bg-teal-600 rounded-xl shadow-lg flex-1 p-6 m-2">
        <div
          onClick={() => setCollapsed((prev) => !prev)}
          className="flex justify-between items-center"
        >
          <div className="flex gap-3">
            <IconImport name={team.icon} />
            <h1 className="text-5xl text-white font-bold" style={{fontFamily: "Tetra-ITC"}}>{team.name}</h1>
          </div>
          {collapsed ? (
            <BsChevronDown className="w-6 h-6 text-white" />
          ) : (
            <BsChevronUp className="w-6 h-6 text-white" />
          )}
        </div>

        {!collapsed && (
          <div>
            <div className="mt-5">
              <ul className="text-white list-disc list-inside text-xl">
                {team.description.map((line) => (
                  <li key={line} className="ms-2 mb-2">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" rounded-xl p-5 mt-4 bg-teal-700">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {team.yearsData.CTO && (
                  <div>
                    <h2 className="text-xl mb-3 text-white font-bold">CTO</h2>
                    <div className="flex flex-col gap-3">
                      <MemberTemplate
                        member={getMemberById(team.yearsData.CTO)}
                      ></MemberTemplate>
                    </div>
                  </div>
                )}
                {team.yearsData.Junior && (
                  <div>
                    <h2 className="text-xl mb-3 text-white font-bold">
                      Junior Lead
                    </h2>
                    <div className="flex flex-col gap-3">
                      <MemberTemplate
                        member={getMemberById(team.yearsData.Junior)}
                      ></MemberTemplate>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-4">
                {team.yearsData.coreMembers && (
                  <div>
                    <h2 className="text-xl my-3 text-white font-bold">
                      Core Members
                    </h2>
                    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {getMembersByIds(team.yearsData.coreMembers)
                        .sort((a, b) => sortClosure(a, b))
                        .map((member) => (
                          <li key={member.name}>
                            <MemberTemplate member={member}></MemberTemplate>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {team.yearsData.generalMembers && (
                  <div className="mb-5">
                    <h2 className="text-xl my-3 text-white font-bold">
                      General Members
                    </h2>
                    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {getMembersByIds(team.yearsData.generalMembers)
                        .sort((a, b) => sortClosure(a, b))
                        .map((member) => (
                          <li key={member.name}>
                            <MemberTemplate member={member}></MemberTemplate>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Team | Kelpie Robotics</title>
      </Head>
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-end text-left text-white overflow-hidden"
        style={{ height: "50vh", width: "100%" }}
      >
        <Navbar />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/branding/Good Full team.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "30% 40%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.30) 100%)",
          }}
        />

        <div
          className={`relative flex flex-col items-center md:px-16 lg:px-24 pb-10`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style={{fontFamily: "Tetra-ITC"}}>
            Meet Our Team
          </h1>
          <p
            className={`text-lg text-center mx-2 text-gray-300 max-w-2xl opacity-100 translate-y-0 opacity-0 translate-y-4`}
          >
            A community of students dedicated to learning and problem-solving.
          </p>
        </div>
      </section>
      <div className="bg-white p-5">
        <div className="p-4">
          {/* Text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight" style={{fontFamily: "Tetra-ITC"}}>
            About the Team
          </h2>

          {/* Separator — pushed to the right when flipped */}
          <div
            className={`w-14 h-1 rounded-full mb-8`}
            style={{ backgroundColor: "#00A99D" }}
          />
          <div className="flex">
            <div className="text-lg text-gray-600 leading-relaxed">
              <div>
                <p>
                  "Kelpie Robotics was founded in 2022 by a group of passionate
                  engineering students at the University of Ottawa. At the
                  forefront of this initiative was our current CEO, Juan Hiedra
                  Primera, who sought to create a hands-on environment where
                  students could apply their technical knowledge to real-world
                  ocean challenges through robotics."
                </p>
                <br />
                <p>
                  What began as a small exploratory project quickly evolved into
                  a structured organization committed to innovation,
                  sustainability, and technical excellence. Since its founding,
                  the team has grown to include approximately 50 active members,
                  spanning multiple engineering disciplines and academic years.
                </p>
              </div>
            </div>

            {/* Decoration */}
            <div className="justify-center items-center p-2">
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
            </div>
          </div>

          <div className="flex flex-column justify-between items-center ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-2 text-gray-900 leading-tight" style={{fontFamily: "Tetra-ITC"}}>
              Kelpie's {selectedYear} Subteams
            </h1>
          </div>
          <div
            className={`w-14 h-1 rounded-full mb-8 `}
            style={{ backgroundColor: "#00A99D" }}
          />
          <div className="flex flex-column justify-between flex-wrap gap-2">
            <p className="text-lg text-gray-600">
              To maintain efficiency and specialization, the team is divided
              into five sub-teams, each focusing on a core area of the project:
            </p>
            <div>
              <label
                htmlFor="yearSelect"
                className="mr-2 text-gray-900 text-xl"
              >
                View other years:
              </label>
              <select
                id="yearSelect"
                className="px-3 py-1 rounded-lg text-gray-900"
                value={selectedYear}
                onChange={handleYearChange}
              >
                {years
                  .sort((a, b) => b - a)
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <ul>
          {filteredTeams.map((team) => (
            <li key={team.name} className="flex flex-col">
              <TeamTemplate team={team}></TeamTemplate>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <h2 className="text-xl my-3 text-black font-bold" style={{fontFamily: "Tetra-ITC"}}>
            All {selectedYear} Team Members
          </h2>
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {filteredTeamMembers
              .sort((a, b) => sortClosure(a, b))
              .map((member) => (
                <li key={member.name} className="flex flex-col">
                  <MemberTemplate member={member}></MemberTemplate>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
