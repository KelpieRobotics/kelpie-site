import siteConfig from "@/websiteconfig.json";
import teamData from "@/teamData.json";
import members from "@/members.json";
import { useState, useCallback } from 'react';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Image from "next/image";
import Head from "next/head";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import * as BsIcons from "react-icons/bs";
import PixelTextReveal from "@/components/PixelTextReveal";

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

  const IconImport = ({name}) => {
    const Icon = BsIcons[name];
    return Icon ? <Icon className="w-10 h-10 text-white"/> : null;
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
              className="object-cover rounded-xl border-4 border-slate-300"
            />
          </div>
        )}
        <div className="py-2 px-4">
          <div className="name-div w-64">
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
          <IconImport name={team.icon}/>
          <h1 className="text-3xl mb-3 text-white font-bold">{team.name}</h1>
          </div>
          {collapsed ? (
            <BsChevronDown className="w-6 h-6 text-white" />
          ) : (
            <BsChevronUp className="w-6 h-6 text-white" />
          )}
        </div>

        {!collapsed && (
          <div>
            <div>
              <ul className="text-white list-disc list-inside">
              { team.description.map(line => (
                <li key={line} className="p-1 ms-2">
                  <b>{line}</b>
                </li>))
              }
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
      <section className="relative flex flex-col justify-center text-left text-white overflow-hidden" style={{ height: '50vh', width: '100%' }}>
        <Navbar />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/assets/branding/Copy of team pic.jpg')", backgroundSize: 'cover', backgroundPosition: '25% 25%'}}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.30) 100%)',
          }}
        />

        <div
          className={`relative z-10 flex flex-col items-start px-8 md:px-16 lg:px-24 max-w-5xl`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Meet Our Team
          </h1>
          <p className={`text-lg text-gray-300 mt-4 max-w-2xl opacity-100 translate-y-0 opacity-0 translate-y-4`}>
            A community of students dedicated to learning and problem-solving.
          </p>
        </div>
      </section>
      <div className="bg-white p-5">
        <div className="p-4">
          <div className="flex flex-column justify-between items-center">
          <h1 className="text-4xl font-bold mb-4">Kelpie's {selectedYear} Subteams</h1>
          <div>
            <label htmlFor="yearSelect" className="mr-2 black-text text-xl">
            View other years:
          </label>
          <select
            id="yearSelect"
            className="px-3 py-1 rounded-lg"
            value={selectedYear}
            onChange={handleYearChange}
          >
            {years.sort((a, b) => b - a).map((year) => (
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
          <h2 className="text-xl my-3 text-black font-bold">
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
