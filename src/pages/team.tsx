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
import { Jellyfish } from "@/components/SeaDecor";

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
          <div className="relative w-24 self-stretch min-h-24 flex-shrink-0" style={{ minHeight: "6rem" }}>
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover rounded-xl border-2"
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
            <h1 className="text-5xl text-white font-bold font-tetra">{team.name}</h1>
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
              {team.description.length === 1 ? (
                <p className="text-white text-2xl ms-3">{team.description[0]}</p>
              ) : (
                <ul className="text-white list-disc list-inside text-2xl">
                {team.description.map((line) => (
                  <li key={line} className="ms-2 mb-2">
                    {line}
                  </li>
                ))}
              </ul>
              )}
              
            </div>
            <div className=" rounded-xl p-5 mt-4 bg-teal-700">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {team.yearsData.CTO && (
                  <div>
                    <h2 className="text-xl mb-3 text-white font-bold">Chief Technology Officer</h2>
                    <div className="flex flex-col gap-3">
                      <MemberTemplate
                        member={getMemberById(team.yearsData.CTO)}
                      ></MemberTemplate>
                    </div>
                  </div>
                )}
                {team.yearsData.CCO && (
                  <div>
                    <h2 className="text-xl mb-3 text-white font-bold">Chief Operating Officer</h2>
                    <div className="flex flex-col gap-3">
                      <MemberTemplate
                        member={getMemberById(team.yearsData.CCO)}
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
                {team.yearsData.publicRelations && (
                  <div>
                    <h2 className="text-xl mb-3 text-white font-bold">Public Relations Officer</h2>
                    <div className="flex flex-col gap-3">
                      <MemberTemplate
                        member={getMemberById(team.yearsData.publicRelations)}
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
                    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
            backgroundImage: "url('/assets/branding/Good Full team.JPG')",
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-tetra">
            Meet Our Team
          </h1>
          <p
            className={`text-2xl text-center mx-2 text-gray-300 max-w-2xl opacity-100 translate-y-0 opacity-0 translate-y-4`}
          >
            A community of students dedicated to learning and problem-solving.
          </p>
        </div>
      </section>
      <div className="bg-white max-w-7xl mx-auto px-6 md:px-10 lg:px-8 py-12 flex flex-col gap-10">
        <div className="p-4">
          {/* Text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight font-tetra">
            About the Team
          </h2>

          {/* Separator — pushed to the right when flipped */}
          <div
            className={`w-14 h-1 rounded-full mb-8`}
            style={{ backgroundColor: "#00A99D" }}
          />
          <div className="flex">
            <div className="text-xl text-gray-600 leading-relaxed">
              <div>
                <p>
                  Kelpie Robotics was founded in 2022 by a group of passionate
                  engineering students at the University of Ottawa. At the
                  forefront of this initiative was our current CEO, Juan Hiedra
                  Primera, who sought to create a hands-on environment where
                  students could apply their technical knowledge to real-world
                  ocean challenges through robotics.
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
            <div className="absolute" style={{top: "450px", right: "40px"}}>
              <Jellyfish className="opacity-15" />
            </div>
          </div>

          <div className="flex flex-column justify-between items-center ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-14 text-gray-900 leading-tight font-tetra">
              Kelpie's {selectedYear} Subteams
            </h1>
          </div>
          <div
            className={`w-14 h-1 rounded-full mb-8 `}
            style={{ backgroundColor: "#00A99D" }}
          />
          <div className="flex flex-column justify-between flex-wrap gap-2">
            <p className="text-xl text-gray-600">
              To maintain efficiency and specialization, the team is divided
              into sub-teams, each focusing on a core area of the project:
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
          <h2 className="text-xl my-3 text-black font-bold font-tetra">
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
