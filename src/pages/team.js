import siteConfig from '@/websiteconfig';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import TemplatePage from "@/reusable/TemplatePage";
import Image from 'next/image';
import Head from 'next/head';
export default function TeamMembers() {
  const teamMembers = siteConfig.teamMembers;
  const years = teamMembers.reduce((years, member) => {
    member.yearsActive.forEach(year => {
      if (!years.includes(year)) {
        years.push(year);
      }
    });
    years.sort((a, b) => b - a);
    return years;
  }, []);

  const [selectedYear, setSelectedYear] = useState(2025);

  const handleYearChange = event => {
    setSelectedYear(parseInt(event.target.value));
  };

  const filteredTeamMembers = filterTeamMembersByYear(teamMembers, selectedYear);

  function filterTeamMembersByYear(teamMembers, year) {
    return teamMembers.filter(member => member.yearsActive.includes(year));
  }

  return (
    <div>
       <Head>
                <title>Team | Kelpie Robotics</title>
            </Head>
      <Navbar />
      <TemplatePage title="Team Members">
        <div>
          
          <div>
            <label htmlFor="yearSelect" className="mr-2 black-text">
              Select year:
            </label>
            <select id="yearSelect" value={selectedYear} onChange={handleYearChange} >
              {years.map(year => (
                <option key={year} value={year}  >
                  {year}
                </option>
              ))}
            </select>
            <br />
            <br />

          </div>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredTeamMembers.map(member => (
              <li key={member.name }  className="flex flex-col">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white flex-1">
                  <img src={member.image} alt={member.name} width="100" height="100" style={{ width: "100%", height: "auto", aspectRatio: "1/1", objectFit: "cover" }} />

                  <div className="p-4 bg-white ">
                  <div className="name-div">
                      <h2 className="text-xl mb-2 text-black">{member.name}</h2>
                    </div>
                  <div className="program-div">
                      <h3 className="text-black">{member.program}</h3>
                  </div>
                    
                    {/* <div>
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ TemplatePage >
    </div>
  );
}
