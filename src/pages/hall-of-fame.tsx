import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { SectionText, SectionTitle } from "@/components/Paragraph";
import {
    BubblesSmall,
    BubblesWide,
    FishSchool,
    Jellyfish,
    SeaweedNarrow,
    SeaweedTall,
    Waves,
} from "@/components/SeaDecor";

const HallOfFame = () => {
    return (
        <div>
            <Head><title>Hall of Fame | Kelpie Robotics</title></Head>
            <Navbar />
            <div className="relative h-[50vh] w-full">
            <Image
                src="/assets/hall-of-fame/cool-mirrory-banner-image.png"
                alt="banner"
                fill
                className="object-cover object-[center_60%]"
            />
             <div className="absolute bottom-20 z-10 flex flex-col items-start px-8 md:px-16 lg:px-24 max-w-5xl">
                <h1 className="relative text-white text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-tetra">
                    Hall of Fame
                </h1>
                <p className="relative text-lg text-gray-200 max-w-2xl">
                    Our past ROVs
                </p>
            </div>
            </div>
            <div className="relative overflow-hidden pb-20">

            {/* Background decorations */}
            <BubblesWide className="absolute max-lg:opacity-5 top-10 left-10 opacity-20 pointer-events-none" />
            <Jellyfish className="absolute max-md:hidden top-[460px] right-4 opacity-15 pointer-events-none" />
            <Jellyfish className="absolute top-1/3 left-10 opacity-20 pointer-events-none" />
            <FishSchool className="absolute top-1/2 right-24 opacity-20 pointer-events-none" />
            <BubblesSmall className="absolute bottom-52 left-6 opacity-20 pointer-events-none" />
            <SeaweedNarrow className="absolute bottom-[20px] right-0 opacity-20 pointer-events-none" />
            <Waves className="absolute bottom-0 left-0 w-full opacity-15 pointer-events-none" />

            <div className="relative z-10 mt-20 mx-auto px-8 max-w-6xl space-y-16">

            <section className="overflow-hidden">
            <SectionTitle>KELP-I</SectionTitle>
            <Image
                src="/assets/hall-of-fame/kelp-i.png"
                alt="KELP-I"
                className="rounded-lg mb-4 w-full h-auto sm:w-2/5 sm:float-right sm:ml-8"
                width={869}
                height={573}
            />
            <SectionText>
                KELP-I was Kelpie Robotics’ debut ROV.
                Equipped with a camera array and object manipulator, 
                it was designed to meet the specifications required to 
                compete on the global stage. Nicknamed “the tie-fighter”, 
                the vehicle’s frame was largely inspired by a quadcopter design,
                due to the benefits to weight distribution. Utilizing 6 thrusters, 
                the ROV was given mobility in four cardinal directions, 
                as well as rotation around a fixed pivot. All components combined 
                had a total weight of 17.4kg and the volume was 50cm x 50cm x 40cm. 
                One of the tools used was a custom-modified gripper. 
                This singular tool allowed KELP-I to complete numerous tasks. 
                The team ranked 13th out of 20 teams at World Championships 
                in the Explorer Class.
            </SectionText>
            </section>

            <section className="overflow-hidden">
            <SectionTitle>KELP-II</SectionTitle>
            <Image
                src="/assets/hall-of-fame/kelp-ii.png"
                alt="KELP-II"
                className="rounded-lg mb-4 w-full h-auto sm:w-1/4 sm:float-left sm:mr-8"
                width={471}
                height={630}
            />
            <SectionText>
                KELP-II prioritized maneuverability, modularity, and efficiency.
                This was achieved through the inclusion of a modular system for onboard electronics, 
                a custom power monitoring system, and a virtual reality compatible pilot interface 
                and copilot graphical user interface pair. The frame was constructed from lightweight 
                aluminum extrusion and taps for rigidity. The ROV weighed in at 23.5kg with a volume 
                of 60cm x 60cm x 50cm. Additionally, the design utilized three servo-mounted cameras, 
                to ensure a wide field of vision, as well as 8 thrusters for increased range of motion 
                in 6 degrees of freedom. This year the team ranked 18th out of 23 overall in the World 
                Championship.
            </SectionText>
            </section>

            <section className="overflow-hidden">
            <SectionTitle>SELK-I</SectionTitle>
            <Image
                src="/assets/hall-of-fame/selk-i.png"
                alt="SELK-I"
                className="rounded-lg mb-4 w-full h-auto sm:w-2/5 sm:float-right sm:ml-8"
                width={827}
                height={643}
            />
            <SectionText>
                SELK-I was designed to be lightweight and high-performance. The ROV included 8
                thrusters and cameras mounted both to servos and statically. Built from aluminum 
                U-channels, joints and custom 3D printed components, it weighed in at 18.1kg and 
                had a volume that was half the size of the previous year’s design. This design 
                also included upgraded electronic components, including a new Pixhawk, orange Pi, 
                and 9 ESCs. The ROV featured a claw manipulator system, using different arms for 
                grasping large objects and precision tasks. The tools were designed to be easily 
                interchangeable, making the transition between tasks smooth and effortless. 
                At the World Championships, Kelpie scored 14 out of 24, smashing our previous 
                performances.
            </SectionText>
            </section>

            <section className="overflow-hidden pb-10">
            <SectionTitle>SELK-II</SectionTitle>
            <Image
                src="/assets/hall-of-fame/selk-ii.png"
                alt="SELK-II"
                className="rounded-lg mb-4 w-full h-auto sm:w-1/3 sm:float-left sm:mr-8"
                width={596}
                height={598}
            />
            <SectionText>
                Our smallest ROV to date, SELK-II was designed to be as agile and compact as possible
                in order to complete tasks with ease. It is made from an aluminum base plate with 
                aluminum U-channels forming a frame to support the tools, buoyancy, and the tether’s 
                strain relief. The design was centred around the base plate, allowing for increased 
                stability of the ROV. The 8 thrusters on the frame feature an updated shroud design 
                which aids in SELK-II’s compact footprint. Three cameras make up the field of view 
                with the main navigation camera being servo-mounted beneath the plate, enabling a 
                bi-directional tool setup. The tools featured in the design include a claw, a 
                spinning hook, and a quick-release mount for extra attachments. SELK-II is Kelpie’s 
                best performance to date at the World Championships, earning 13/36 overall and our 
                best in-pool score by over 100 points!
            </SectionText>
            </section>

        </div>
        </div>
        <Footer />
        </div>
    );
};

export default HallOfFame;