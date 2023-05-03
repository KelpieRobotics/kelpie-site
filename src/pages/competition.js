import Navbar from "@/components/Navbar";
import TemplatePage from "@/reusable/TemplatePage";

export default function Competition() {

    return (
        <div>
            <Navbar />
            <TemplatePage title="Competition">
                <h2 className={'subtitle'}>Kelpie Robotics is proud to be participating in the Explorer class of the MATE ROV competition, a global event that challenges student teams to design and operate underwater robots for a range of tasks. In this competition, we will be designing and building a remotely operated underwater vehicle (ROV) to perform various tasks such as navigating through obstacles, manipulating objects, and conducting scientific experiments.<br/>Our competitive advantage is our innovative control system, which allows for precise and efficient movement of our ROV. In addition to the ROV tasks, we will also be showcasing our technical achievements in a poster session, highlighting the unique challenges we overcame during the design and build process. We are excited to be part of this competition and to represent the University of Ottawa on a global stage.</h2>
                <video controls style={{maxWidth: "750px", width:"100%"}}>
                    <source src="https://lonehaven.com/wp-content/uploads/2023/02/Kelpie-Robotics-Diving-Deeper.mp4" type="video/mp4" />
                        Your browser does not support HTML video.
                </video>
            </TemplatePage>
        </div>
    )
}