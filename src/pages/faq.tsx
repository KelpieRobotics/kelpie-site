import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ParagraphSection } from "@/components/Paragraph";

function FAQTitle({ children }) {
  return (
    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 leading-tight">
      {children}
    </h3>
  );
}

function FAQText({ children }) {
  return (
    <h3 className="text-lg text-gray-600 leading-relaxed">
      {children}
    </h3>
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
        style={{ height: "50vh", width: "100%" }}
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
              "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.30) 100%)",
          }}
        />

        <div
          className={`relative z-10 flex flex-col items-start px-8 md:px-16 lg:px-24 max-w-5xl`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </section>
      <div className="bg-white p-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
          General Questions
        </h2>

        <div
          className={`w-14 h-1 rounded-full mb-8`}
          style={{ backgroundColor: "#00A99D" }}
        />
        <FAQTitle>Why should I join the team?</FAQTitle>
        <FAQText>
          Joining the team gives you hands-on experience that goes beyond what
          you learn in class. You’ll develop practical interdisciplinary skills
          and grow your network at no cost.
        </FAQText>
        <br />
        <FAQTitle>
          How many competitions have you competed in and where?
        </FAQTitle>
        <FAQText>
          This is our 5th season and we’ve competed 3 times at the MATE ROV
          World Championships which takes place each year in June. We have
          competed in:
        </FAQText>
        <FAQText>
        <ul>
          <li>Long Beach, California in 2022</li>
          <li>Longmont, Colorado in 2023</li>
          <li>Alpena, Michigan in 2025</li>
          <li>This year we are headed to St. John’s, Newfoundland</li>
        </ul>
        </FAQText>

        <FAQText>
          <FAQTitle>
            What makes Kelpie different from other competitive teams at uOttawa?
          </FAQTitle>
          <FAQText>
            Kelpie isn’t just a competitive engineering team, we pride ourselves
            on our corporate responsibility to our community, sharing our
            knowledge and helping the environment. We are the only team which
            has a business component to our competition so members learn
            technical documentation for their work, as well as presentation and
            marketing skills. We are only one of the few competitive engineering
            teams at uOttawa with a software team, providing experience to
            students in software engineering, computer engineering and computer
            science!
          </FAQText>
          <FAQTitle>How is Kelpie structured?</FAQTitle>
          <FAQText>
            Kelpie is organized into 4 sub-teams, each with around 4 to 8
            members: Mechanical, Electrical, Software and Logistics. Each
            sub-team meets weekly to work on tasks, and general meetings are
            held for all members. Each-sub team is led and mentored by their
            Chief Technology Officer (CTO) and a Junior Lead, who are more
            senior team members guiding the design process. The whole team is
            managed by the CEO and COO who keep everything running smoothly.
          </FAQText>
          <FAQTitle>Do you host workshops or social events?</FAQTitle>
          <FAQText>
            Yes, we host several workshops each semester to teach practical
            skills to the community and we organize social fundraising events a
            few times per semester.
          </FAQText>
          <FAQTitle>
            What are you seeking to improve about your next competitions or
            robot builds?
          </FAQTitle>
          <FAQText>
            For this year’s 2026 competition, we’re aiming for a smaller frame
            to improve stability, increase our involvement with the community
            and expand our outreach efforts.
          </FAQText>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            Joining the Team
          </h2>
          <div
            className={`w-14 h-1 rounded-full mb-8`}
            style={{ backgroundColor: "#00A99D" }}
          />
          <FAQTitle>
            What sort of skills could I gain from working with Kelpie?
          </FAQTitle>
          <FAQText>
            Working with Kelpie allows you to collaborate with students from
            multiple fields, build interdisciplinary skills and learn how to
            manage deadlines. You also gain specialized skills depending on the
            sub-team you join: Mechanical: 3D modelling and simulation with
            SolidWorks 3D printing and manufacturing techniques (mill, lath,
            drill press, etc) Electrical: Soldering and crimping Circuit board
            assembly Software: – to fill out Logistics: Marketing, social media,
            publicity Planning events, workshops, and outreach initiatives
            Budgeting, finance and sponsorship management
          </FAQText>
          <FAQText>
            <FAQTitle>Can I join more than one subteam?</FAQTitle>
            Yes! We love interdisciplinary members. When you are accepted to the
            team for the year, you will be assigned to a main subteam and will
            be expected to fulfil your main tasks there, however if you have
            time then you are welcome to help the other subteams. Plus, you can
            change your subteam year to year, if you would like.
          </FAQText>
          <FAQTitle>Do I need prior robotics experience to join? </FAQTitle>
          No, prior robotics experience is not required! We’re happy to teach
          and welcome members who are willing to learn and dedicate themselves
          to the team. Experience is an asset. For example, knowing how to use
          CAD can be helpful for the mechanical sub-team members.
          <FAQTitle>Can first-year students join? </FAQTitle>
          Yes, of course! We’re happy to teach, and all students are welcome,
          regardless of their educational background.
          <FAQTitle>
            What level of English/French bilingualism is required to join the
            team?
          </FAQTitle>
          A general understanding of English is required to join the team since
          the competition is only in English. Speaking French as well is an
          asset for outreach and marketing! When does the team meet? The team
          meets for a few hours on weekends, but most work happens on your own
          time. As the competition approaches, the workload increases, and we
          hold more meetings in smaller groups to meet deadlines.
          <FAQTitle>How many hours a week do I commit? </FAQTitle>
          General members can contribute as their schedule allows, typically
          helping with small tasks for 1-2 hours per week. Core Members are key
          team members, usually assigned a weekly task requiring around 6 hours
          per week. The Winter semester is generally busier than the Fall
          semester as we approach competition season, so members may need to
          dedicate extra time during the Winter semester.
          <FAQTitle>What’s the team culture like? </FAQTitle>
          The team culture is friendly and welcoming. We’re relaxed but driven,
          focused on learning, and we like to have fun throughout the year.
          <FAQTitle>Interested in joining our team?</FAQTitle>
          Applications open at the beginning of September each year with a few
          slots often becoming available in the Winter term as well. Fill in
          this form to be notified when our applications open in September!
        </FAQText>
      </div>
      <Footer />
    </div>
  );
}
