import siteConfig from '@/websiteconfig';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import TemplatePage from "@/reusable/TemplatePage";

export default function Competition() {
    const sponsors = siteConfig.sponsors;
    const years = sponsors.reduce((years, sponsor) => {
        sponsor.yearsActive.forEach(year => {
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

    const filteredSponsors = filterSponsorsByYear(sponsors, selectedYear);

    function filterSponsorsByYear(sponsors, year) {
        return sponsors.filter(sponsor => sponsor.yearsActive.includes(year));
    }

    return (
        <div>
            <Navbar />
            <TemplatePage title="Sponsors">
                <h2>Kelpie Robotics is a student-led team that relies on the support of our sponsors to participate in the MATE ROV competition. We are grateful for the contributions of our sponsors, who play a crucial role in helping us develop our skills and achieve our goals in the field of underwater robotics. Through your support, you are not only investing in the future of the Canadian technology industry, but also in the development of innovative solutions for underwater exploration and research.

                    We believe that your support is more than just financial; it is a partnership that enables us to create a collaborative and dynamic environment for our team members to learn, grow and thrive. Your organization becomes a part of our team, and we are committed to showcasing our partnership through frequent features on our social media platforms and by displaying your logo on our ROV during the competition. We are excited to work together to achieve our goals and to make a positive impact on the future of underwater exploration and research.</h2>
                {/* <div style={{ display: 'flex', justifyContent: 'center' }}>

                  <img src="/assets/branding/sponsors2022.png" style={{ width: "100%", maxWidth: "750px" }} alt="" /> 
    </div> */}





            </TemplatePage>

            <div className="flex flex-col items-center justify-center bg-[url] bg-cover bg-center">

  <div className="flex justify-center">
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {filteredSponsors.map((sponsor) => (
        <li key={sponsor.name}>
          <div className="rounded-lg overflow-hidden shadow-lg backdrop-blur-sm backdrop-brightness-75 flex flex-col items-center justify-center h-64 p-4">
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center mb-2 h-40">
                <img src={sponsor.logo} alt={sponsor.name} className="h-full max-w-full" />
              </div>
              <h2 className="text-xl mb-2 text-white">{sponsor.name}</h2>
            </a>
          </div>
        </li>
      ))}
    </ul>
  
  </div>
  <div className="text-white">
  <br />
    <br />
   
    <label htmlFor="yearSelect" className="mr-2">
      Select year:
    </label>
    <select id="yearSelect" value={selectedYear} onChange={handleYearChange} className="text-black">
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>
</div>



        </div>
    )
}