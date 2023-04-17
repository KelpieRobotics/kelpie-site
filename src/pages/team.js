import siteConfig from '@/websiteconfig';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

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

  const [selectedYear, setSelectedYear] = useState(2023);

  const handleYearChange = event => {
    setSelectedYear(parseInt(event.target.value));
  };

  const filteredTeamMembers = filterTeamMembersByYear(teamMembers, selectedYear);

  function filterTeamMembersByYear(teamMembers, year) {
    return teamMembers.filter(member => member.yearsActive.includes(year));
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Team Members</h1>
      <div>
        <label htmlFor="yearSelect" className="mr-2 black-text">
          Select year:
        </label>
        <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filteredTeamMembers.map(member => (
          <li key={member.name}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={member.image} alt={member.name} className="w-full aspect-w-4 aspect-h-3 object-cover" />
              <div className="p-4 bg-white">
                <h2 className="text-xl mb-2 text-black">{member.name}</h2>
                <h3 className="text-black">{member.program}</h3>
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
  );
}
