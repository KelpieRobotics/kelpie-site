import Navbar from "@/components/Navbar";
import TemplatePage from "@/reusable/TemplatePage";
import Head from "next/head";

export default function Competition() {

    return (
        <div>
            <Head>
                <title>Competition | Kelpie Robotics</title>
            </Head>
            <Navbar />
            <TemplatePage title="Competition">
                <h2 className={''}>Kelpie Robotics is proud to be participating in the Explorer class of the MATE ROV competition, a global event that challenges student teams to design and operate underwater robots for a range of tasks. In this competition, we will be designing and building a remotely operated underwater vehicle (ROV) to perform various tasks such as navigating through obstacles, manipulating objects, and conducting scientific experiments.<br /><br />Our competitive advantage is our innovative control system, which allows for precise and efficient movement of our ROV. In addition to the ROV tasks, we will also be showcasing our technical achievements in a poster session, highlighting the unique challenges we overcame during the design and build process. We are excited to be part of this competition and to represent the University of Ottawa on a global stage.</h2>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <iframe width="750" height="422" src="https://www.youtube.com/embed/WIGB4HGzLF8" frameborder="0" allowfullscreen style={{ maxWidth: '750px', width: '100%', borderRadius: '25px' }}></iframe>
                </div>
                <br />
            </TemplatePage>
        </div>
    )
}