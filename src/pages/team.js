import siteConfig from "@/websiteconfig";
import teamData from "@/teamData.json";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Head from "next/head";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

export default function TeamMembers() {
  const teamMembers = siteConfig.teamMembers;
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
            />
          </div>
        )}
        <div className="p-2">
          <div className="name-div w-64 ml-4">
            <h2 className="text-xl text-black">{member.name}</h2>
          </div>
          <div className="program-div ml-4 flex-auto">
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
          <h1 className="text-3xl mb-3 text-white font-bold">{team.name}</h1>
          {collapsed ? (
            <BsChevronDown className="w-6 h-6 text-white" />
          ) : (
            <BsChevronUp className="w-6 h-6 text-white" />
          )}
        </div>

        {!collapsed && (
          <div>
            <div>
              <p className="text-white ">{team.description}</p>
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
                    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {getMembersByIds(team.yearsData.coreMembers).map(
                        (member) => (
                          <li key={member.name}>
                            <MemberTemplate member={member}></MemberTemplate>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
                {team.yearsData.generalMembers && (
                  <div className="mb-5">
                    <h2 className="text-xl my-3 text-white font-bold">
                      General Members
                    </h2>
                    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {getMembersByIds(team.yearsData.generalMembers).map(
                        (member) => (
                          <li key={member.name}>
                            <MemberTemplate member={member}></MemberTemplate>
                          </li>
                        ),
                      )}
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
      <Navbar />
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "0.375rem",
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
          padding: "1rem",
          margin: "2rem",
        }}
      >
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold mb-4">Team Members</h1>
        </div>
        <div>
          <div className="flex justify-center">
            <label htmlFor="yearSelect" className="mr-2 black-text text-xl">
              Select year:
            </label>
            <select
              id="yearSelect"
              className="px-3 py-1 rounded-lg"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <br />
            <br />
          </div>
          <ul>
            {filteredTeams.map((team) => (
              <li key={team.name} className="flex flex-col">
                <TeamTemplate team={team}></TeamTemplate>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
