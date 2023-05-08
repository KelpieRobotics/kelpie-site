import Navbar from "@/components/Navbar";
import TemplatePage from "@/reusable/TemplatePage";
import Image from "next/image";

export default function Competition() {

    return (
        <div>
            <Navbar />
            <TemplatePage title="Sponsors">
                <h2 className={'subtitle'}>Kelpie Robotics is a student-led team that relies on the support of our sponsors to participate in the MATE ROV competition. We are grateful for the contributions of our sponsors, who play a crucial role in helping us develop our skills and achieve our goals in the field of underwater robotics. Through your support, you are not only investing in the future of the Canadian technology industry, but also in the development of innovative solutions for underwater exploration and research.

                    We believe that your support is more than just financial; it is a partnership that enables us to create a collaborative and dynamic environment for our team members to learn, grow and thrive. Your organization becomes a part of our team, and we are committed to showcasing our partnership through frequent features on our social media platforms and by displaying your logo on our ROV during the competition. We are excited to work together to achieve our goals and to make a positive impact on the future of underwater exploration and research.</h2>

                    <Image src="/assets/branding/sponsors2022.png" style={{maxWidth: "750px"}} width="100" height="100" alt=""/>

            </TemplatePage>
        </div>
    )
}