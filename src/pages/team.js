import siteConfig from '@/websiteconfig';
import teamData from '@/teamData.json';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import TemplatePage from "@/reusable/TemplatePage";
import Image from 'next/image';
import Head from 'next/head';

export default function TeamMembers() {
  
  const teamMembers = siteConfig.teamMembers;
  const teams = teamData.teams;
  const years = siteConfig.years

  const [selectedYear, setSelectedYear] = useState(2025);
  const handleYearChange = event => {
    setSelectedYear(parseInt(event.target.value));
  };

  const filteredTeamMembers = filterTeamMembersByYear(teamMembers, selectedYear);
  const filteredTeams = filterTeamsByYear(teams, selectedYear);

  function filterTeamMembersByYear(teamMembers, year) {
    return teamMembers.filter(member => member.yearsActive.includes(year));
  }

  function filterTeamsByYear(teams, year) {
    return teams
      .map(team => {
        const yearEntry = team.yearsData.find(entry => entry.year === year);
        if (!yearEntry) return null;

        return {
          ...team,
          yearsData: yearEntry
        };
      })
      .filter(Boolean);
  }

  function getMembersByIds(ids) {
    return teamMembers.filter(member => ids.includes(member.id))
  }
  function getMemberById(id) {
    return teamMembers.find(member => member.id === id)
  }

  const MemberTemplate = ({member}) => {
    return (
      <div className="rounded-full overflow-hidden shadow-lg flex flex-row h-24 items-center justify-start border-2 border-teal-600">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image 
            src={member.image}
            alt={member.name}
            fill
            className="object-cover rounded-full ring-4 ring-teal-600"
          />
        </div>
        <div className="name-div w-64 ml-4">
            <h2 className="text-xl mb-2 text-black">{member.name}</h2>
          </div>
        <div className="program-div ml-4 flex-auto">
            <h3 className="text-black">{member.program}</h3>
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


  return (
    <div>
       <Head>
                <title>Team | Kelpie Robotics</title>
            </Head>
      <Navbar />
      <TemplatePage title="Team Members">
        <div>
          
          <div>
            <label htmlFor="yearSelect" className="mr-2 black-text text-xl">
              Select year:
            </label>
            <select id="yearSelect" className="px-3 py-1 rounded-lg" value={selectedYear} onChange={handleYearChange} >
              {years.map(year => (
                <option key={year} value={year}  >
                  {year}
                </option>
              ))}
            </select>
            <br />
            <br />

          </div>
          <ul>
            {filteredTeams.map(team => (
              <li key={team.name }  className="flex flex-col">
                <div className="rounded-lg bg-white flex-1">
                  <div className="name-div">
                    <h1 className="text-2xl my-3 text-black font-bold">{team.name}</h1>
                  </div>
                  <div>
                    <p>{team.description}</p>
                  </div>
                  <div>
                    <h2 className="text-xl my-3 text-black">CTO</h2>
                    <div className="flex flex-col gap-3">
                      <MemberTemplate member={getMemberById(team.yearsData.CTO)}></MemberTemplate>
                    </div>
                    
                  </div>
                  <div>
                    <h2 className="text-xl my-3 text-black">Junior Lead</h2>
                    <div className="flex flex-col gap-3">
                      <MemberTemplate member={getMemberById(team.yearsData.Junior)}></MemberTemplate>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl my-3 text-black">Core Members</h2>
                    <ul className="flex flex-col gap-3">
                      {getMembersByIds(team.yearsData.coreMembers).map(member => (
                        <li key={member.name }  className="flex flex-col">
                          <MemberTemplate member={member}></MemberTemplate>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='mb-5'>
                    <h2 className="text-xl my-3 text-black">General Members</h2>
                    <ul className="flex flex-col gap-3">
                      {getMembersByIds(team.yearsData.generalMembers).map(member => (
                        <li key={member.name }  className="flex flex-col">
                          <MemberTemplate member={member}></MemberTemplate>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredTeamMembers.map(member => (
               <li key={member.name }  className="flex flex-col gap-3">
                <MemberTemplate member={member}></MemberTemplate>
              </li>
            ))}
          </ul>
        </div>
      </ TemplatePage >
    </div>
  );
}
