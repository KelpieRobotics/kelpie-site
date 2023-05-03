import Head from 'next/head';
import { useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';
import TemplatePage from "@/reusable/TemplatePage";
import Navbar from '@/components/Navbar';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your logic for submitting the form goes here
        console.log(name, email, subject, message);
    };

    return (
        <div>
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <TemplatePage title="Contact Us">

                    <p>If you have any questions for the team, or just want to keep tabs on our progress, there are a variety of ways to contact us.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border border-gray-400 p-2 w-full"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border border-gray-400 p-2 w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="border border-gray-400 p-2 w-full"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="border border-gray-400 p-2 w-full"
                                    rows="5"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </form>
                        <div>
                            <h2 className="text-xl font-bold mb-4">Find us on social media</h2>
                            <div className="flex flex-row gap-4">
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
                                    <FaLinkedin className="text-4xl text-blue-700 hover:text-blue-900 transition-colors" />
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                                    <FaFacebook className="text-4xl text-blue-700 hover:text-blue-900 transition-colors" />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
                                    <FaTwitter className="text-4xl text-blue-700 hover:text-blue-900 transition-colors" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                                    <FaInstagram className="text-4xl text-pink-500 hover:text-pink-700 transition-colors" />
                                </a>
                                <a href="https://www.twitch.tv" target="_blank" rel="noopener" aria-label="Twitch">
                                    <FaTwitch className="text-4xl text-purple-500 hover:text-purple-700 transition-colors" />
                                </a>
                                <a href="https://www.github.com" target="_blank" rel="noopener" aria-label="GitHub">
                                    <FaGithub className="text-4xl text-gray-700 hover:text-gray-900 transition-colors" />
                                </a>
                            </div>
                            <h2 className="text-xl font-bold mt-8 mb-4">Our Location</h2>
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
