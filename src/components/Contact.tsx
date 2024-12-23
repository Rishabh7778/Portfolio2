import React from 'react';
import Image from 'next/image';
import phone from '../assets/call.png';
import mail from '../assets/email.png';

const Contact = () => {
    return (
        <div
            className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 justify-center items-center"
            id="contact"
        >
            <div className="flex justify-center items-center w-full lg:w-auto">
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <Image src={phone} alt="phone" className="h-[80px] sm:h-[100px] md:h-[110px] w-auto mr-6" />
                        <p className="text-xl">+91-8920464643</p>
                    </li>
                    <li className="flex items-center">
                        <Image src={mail} alt="mail" className="h-[80px] sm:h-[100px] md:h-[110px] w-auto mr-6" />
                        <p className="md:text-xl">saty665566&#64;gmail&#46;com</p> {/* Escaped the '@' and '.' */}
                    </li>
                </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-xl max-w-[550px] w-full">
                <h2 className="text-5xl font-bold text-orange-400 mb-4">Let&apos;s Connect</h2> {/* Escaped the apostrophe */}
                <p className="text-white/70 mb-6">
                    Send me a message and let&apos;s schedule a call {/* Escaped the apostrophe */}
                </p>
                <form
                    className="space-y-4"
                    action="https://getform.io/f/bpjjvllb"
                    method="POST"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            name="First name"
                            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            autoComplete="off"
                            placeholder="First Name"
                            type="text"
                        />
                        <input
                            name="Last Name"
                            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Last Name"
                            type="text"
                        />
                        <input
                            name="Email"
                            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Email"
                            type="email"
                        />
                        <input
                            name="Phone Number"
                            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Phone No"
                            type="tel"
                        />
                    </div>
                    <textarea
                        name="Message"
                        className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Your Message"
                    />
                    <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
