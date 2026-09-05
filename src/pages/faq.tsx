import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function CollapseBox({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="bg-gray-100 rounded-xl shadow-lg flex-1 p-4 m-2">
      <div
        onClick={() => setCollapsed((prev) => !prev)}
        className="flex justify-between items-center"
      >
        <div className="flex gap-3 me-4">{children[0]}</div>
        {collapsed ? (
          <BsChevronDown className="w-6 h-6 shrink-0" />
        ) : (
          <BsChevronUp className="w-6 h-6 shrink-0" />
        )}
      </div>

      {!collapsed && children[1]}
    </div>
  );
}

function FAQTitle({ children }) {
  return (
    <div className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
      {children}
    </div>
  );
}

function FAQText({ children }) {
  return (
    <div className="text-xl text-gray-600 leading-relaxed ms-4 mt-2">
      {children}
    </div>
  );
}

export default function Competition() {
  return (
    <div>
      <Head>
        <title>Questions & Answers | Kelpie Robotics</title>
      </Head>
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center text-left text-white overflow-hidden"
        style={{ height: "40vh", width: "100%" }}
      >
        <Navbar />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/branding/Copy of wide pool.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "25% 50%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.30) 100%)",
          }}
        />

        <div className={`z-10 flex flex-col items-center mt-12`}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-tetra">
            Frequently Asked Questions
          </h1>
        </div>
      </section>
      <div className="bg-white p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight text-center font-tetra">
              General Questions
            </h2>
            <div
              className={`w-14 h-1 rounded-full mb-8 mx-auto`}
              style={{ backgroundColor: "#00A99D" }}
            />
             <CollapseBox>
              <FAQTitle>
                What are you seeking to improve about your next competitions or
                robot builds?
              </FAQTitle>
              <FAQText>
                For this year’s 2026 competition, we’re aiming for a smaller
                frame to improve stability, increase our involvement with the
                community and expand our outreach efforts.
              </FAQText>
            </CollapseBox>
            <CollapseBox>
              <FAQTitle>
                How many competitions have you competed in and where?
              </FAQTitle>
              <FAQText>
                This is our 5th season and we’ve competed 3 times at the MATE
                ROV World Championships which takes place each year in June. We
                have competed in:
                <ul className="list-disc pl-5 py-2 ms-4">
                  <li>Long Beach, California in 2022</li>
                  <li>Longmont, Colorado in 2023</li>
                  <li>Alpena, Michigan in 2025</li>
                </ul>
                This year we are headed to St. John’s, Newfoundland.
              </FAQText>
            </CollapseBox>
    
            <CollapseBox>
              <FAQTitle>
                What makes Kelpie different from other competitive teams at
                uOttawa?
              </FAQTitle>
              <FAQText>
                Kelpie isn’t just a competitive engineering team, 
                we pride ourselves on our corporate responsibility, 
                doing good onto the community and  environment.
                <br />
                <br />
                We are the only team which has a business component to our
                competition so members learn technical documentation for their
                work, as well as presentation and marketing skills.
                <br />
                <br />
                We are only one of the few competitive engineering teams at
                uOttawa with a software team, providing experience to students
                in software engineering, computer engineering and computer
                science.
              </FAQText>
            </CollapseBox>
            <CollapseBox>
              <FAQTitle>How is Kelpie structured?</FAQTitle>
              <FAQText>
                Kelpie is organized into 4 sub-teams, each with around 4 to 8
                members: Mechanical, Electrical, Software and Logistics. Each
                sub-team meets weekly to work on tasks, and general meetings are
                held for all members. Each-sub team is led and mentored by their
                Chief Technology Officer (CTO) and a Junior Lead, who are more
                senior team members guiding the design process. The whole team
                is managed by the CEO and COO who keep everything running
                smoothly.
              </FAQText>
            </CollapseBox>
            <CollapseBox>
              <FAQTitle>Do you host workshops or social events?</FAQTitle>
              <FAQText>
                Yes, we host several workshops each semester to teach practical
                skills to the community and we organize social fundraising
                events a few times per semester.
              </FAQText>
            </CollapseBox>
    
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight text-center font-tetra">
              Joining the Team
            </h2>
            <div
              className={`w-14 h-1 rounded-full mb-8 mx-auto`}
              style={{ backgroundColor: "#00A99D" }}
            />
            <CollapseBox>
              <FAQTitle>Why should I join the team?</FAQTitle>
              <FAQText>
                Joining the team gives you hands-on experience that goes beyond
                what you learn in class. You’ll develop practical
                interdisciplinary skills and grow your network at no cost.
              </FAQText>
            </CollapseBox>
            <CollapseBox>
              <FAQTitle>
                What sort of skills could I gain from working with Kelpie?
              </FAQTitle>
              <FAQText>
                Working with Kelpie allows you to collaborate with students from
                multiple fields, build interdisciplinary skills and learn how to
                manage deadlines. You also gain specialized skills depending on
                the sub-team you join:
                <br />
                <br />
                <b>Mechanical:</b>
                <ul className="list-disc pl-5 py-2 ms-4">
                  <li>3D modelling and simulation with SolidWorks</li>
                  <li>
                    3D printing
                  </li>
                  <li>
                    Manufacturing techniques (mill, lathe, drill
                    press, etc)
                  </li>
                </ul>
                <b>Electrical: </b>
                <ul className="list-disc pl-5 py-2 ms-4">
                  <li>Soldering and crimping</li>
                  <li>Circuit board assembly</li>
                </ul>
                <b>Software: </b>
                <ul className="list-disc pl-5 py-2 ms-4">
                  <li>Robot control architectures and APIs</li>
                  <li>Digital communication protocols</li>
                  <li>Graphical user interface design</li>
                </ul>
                <b>Logistics: </b>
                <ul className="list-disc pl-5 py-2 ms-4">
                  <li>Marketing, social media, publicity</li>
                  <li>Planning events, workshops, and outreach initiatives</li>
                  <li>Budgeting, finance and sponsorship management</li>
                </ul>
              </FAQText>
            </CollapseBox>

            <CollapseBox>
              <FAQTitle>Can I join more than one subteam?</FAQTitle>
              <FAQText>
                Yes! We love interdisciplinary members. When you are accepted to
                the team for the year, you will be assigned to a main subteam
                and will be expected to fulfill your main tasks there, however if
                you have time then you are welcome to help the other subteams.
                Plus, you can change your subteam year to year, if you would
                like.
              </FAQText>
            </CollapseBox>
            <CollapseBox>
              <FAQTitle>Do I need prior robotics experience to join? </FAQTitle>
              <FAQText>
                No, prior robotics experience is not required! We’re happy to
                teach and welcome members who are willing to learn and dedicate
                themselves to the team. Experience is an asset. For example,
                knowing how to use CAD can be helpful for the mechanical
                sub-team members.
              </FAQText>
            </CollapseBox>
            <CollapseBox>
              <FAQTitle>Can first-year students join? </FAQTitle>
              <FAQText>
                Yes, of course! We’re happy to teach, and all students are
                welcome, regardless of their educational background.
              </FAQText>
            </CollapseBox>
            <CollapseBox>
              <FAQTitle>
                What level of English/French bilingualism is required to join
                the team?
              </FAQTitle>
              <FAQText>
                A general understanding of English is required to join the team
                since the competition is only in English. Speaking French as
                well is an asset for outreach and marketing!
              </FAQText>
            </CollapseBox>
            <CollapseBox>
            <FAQTitle>
               When does the team meet?
            </FAQTitle>
            <FAQText>
               The team meets for a few hours on weekends, but most work
                happens on your own time. As the competition approaches, the
                workload increases, and we hold more meetings in smaller groups
                to meet deadlines.
            </FAQText>
            </CollapseBox>
            <CollapseBox>
              <FAQTitle>How many hours a week do I commit? </FAQTitle>
              <FAQText>
                <b>General members</b> can contribute as their schedule allows,
                typically helping with small tasks for 1-2 hours per week.
                <br />
                <b>Core Members</b> are key team members, usually assigned a
                weekly task requiring around 6 hours per week. The Winter
                semester is generally busier than the Fall semester as we
                approach competition season, so members may need to dedicate
                extra time during the Winter semester.
              </FAQText>
            </CollapseBox>
            <CollapseBox>
              <FAQTitle>What’s the team culture like? </FAQTitle>
              <FAQText>
                The team culture is friendly and welcoming. We're driven and focused on learning,
                while also keeping a relaxed atmosphere with room for fun!
                
              </FAQText>
            </CollapseBox>
          </div>
        </div>
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight text-center mt-10 font-tetra">
          Interested in joining our team?
        </h2>
        <div className="text-xl text-gray-600 leading-relaxed text-center">
          Applications open at the beginning of September each year with a few
          slots often becoming available in the Winter term as well.
          <br />
          Fill in this form to be notified when our applications open in
          September!
          <br/>
          <br></br>

          <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3rax6G2TQDhZhNtWML1bg29_tUMlFZVkc0RU45Rlk3UlBTUFA3RUFMVEswTyQlQCN0PWcu" className="text-white bg-teal-600
          box-border border border-transparent hover:bg-teal-700 focus:ring-4 focus:ring-teal-400 
          shadow-xs text-xl font-bold leading-5 rounded-xl text-sm px-4 py-3 focus:outline-none font-tetra" target="_blank">Sign Up Today</a>

        </div>
      </div>
      <Footer />
    </div>
  );
}
