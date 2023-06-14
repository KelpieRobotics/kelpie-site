import Head from 'next/head';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';
import TemplatePage from "@/reusable/TemplatePage";
import Navbar from '@/components/Navbar';
import Link from 'next/link';
const Contact = () => {
    const handleSendEmail = () => {
        // Your logic for sending the email goes here
        console.log('Sending email...');
    };

    return (
        <div>
            <Head>
                <title>Contact Us | Kelpie Robotics</title>
            </Head>
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <TemplatePage title="Contact Us">

                    <p>If you have any questions for the team, or just want to keep tabs on our progress, there are a variety of ways to contact us.</p>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

                        <div className="flex justify-center">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Find us on social media</h2>
                                <div className="flex flex-row gap-4">
                                    <Link href="https://www.linkedin.com/company/kelpie-robotics" target="_blank" rel="noopener" aria-label="LinkedIn">
                                        <FaLinkedin className="text-4xl text-blue-700 hover:text-blue-900 transition-colors" />
                                    </Link>
                                    <Link href="https://www.facebook.com/profile.php?id=100075181450829" target="_blank" rel="noopener" aria-label="Facebook">
                                        <FaFacebook className="text-4xl text-blue-700 hover:text-blue-900 transition-colors" />
                                    </Link>
                                    <Link href="https://twitter.com/kelpie_robotics" target="_blank" rel="noopener" aria-label="Twitter">
                                        <FaTwitter className="text-4xl text-blue-700 hover:text-blue-900 transition-colors" />
                                    </Link>
                                    <Link href="https://www.instagram.com/kelpie_robotics/" target="_blank" rel="noopener" aria-label="Instagram">
                                        <FaInstagram className="text-4xl text-pink-500 hover:text-pink-700 transition-colors" />
                                    </Link>
                                    <Link href="https://www.twitch.tv/kelpie_robotics" target="_blank" rel="noopener" aria-label="Twitch">
                                        <FaTwitch className="text-4xl text-purple-500 hover:text-purple-700 transition-colors" />
                                    </Link>
                                    <Link href="https://github.com/KelpieRobotics" target="_blank" rel="noopener" aria-label="GitHub">
                                        <FaGithub className="text-4xl text-gray-700 hover:text-gray-900 transition-colors" />
                                    </Link>
                                </div>
                                <br />
                                <div className="text-center">
                                    <p>Email: kelpierobotics@gmail.com</p>
                                    <p>Address:<br />150 Louis-Pasteur Private <br /> Ottawa, ON, K1N 9A7</p>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                        onClick={() => { window.open("mailto:kelpierobotics@gmail.com") }}
                                    >
                                        Send Email
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="h-64">
                                <iframe
                                    src="https://maps.google.com/maps?q=jmts%20uottawa&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0"
                                    style={{ border: 0, width: '100%', height: '100%' }}
                                    allowFullScreen=""
                                />
                            </div>
                        </div>
                    </div>
                </TemplatePage>
            </div>
        </div>
    );
};

export default Contact;
