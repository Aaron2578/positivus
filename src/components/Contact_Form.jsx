import React from 'react';
import contact_img from '../assets/contact-img.svg';
import Button from './Button';

function Contact_Form() {
    return (
        <div className="w-[90%] h-auto max-w-6xl mx-auto bg-[#F3F3F3] rounded-4xl mt-16 p-10 flex flex-col lg:flex-row gap-10 overflow-hidden">

            {/* Form Section */}
            <div className="flex-1">
                <form className="flex flex-col gap-6">

                    {/* Radio Buttons */}
                    <div className="flex gap-6 items-center mb-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="action"
                                className="accent-[#B9FF66] w-5 h-5 outline-none"
                            />
                            Say Hi
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="action"
                                className="accent-[#B9FF66] w-5 h-5 outline-none"
                            />
                            Get Quotes
                        </label>
                    </div>

                    {/* Input Fields */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Email *</label>
                            <input
                                type="email"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Message *</label>
                            <textarea
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] resize-none"
                                placeholder="Type your message"
                                rows={5}
                            ></textarea>
                        </div>
                        <Button text={'Send Message'} />
                    </div>
                </form>
            </div>

            {/* Image Section */}
            <div className="hidden lg:flex-1 lg:flex justify-center lg:justify-end relative left-[280px] overflow-hidden">
                <img
                    src={contact_img}
                    alt="contact-img"
                    className="max-w-full h-auto object-contain"
                />
            </div>
        </div>
    );
}

export default Contact_Form;




{/* <img src={contact_img} alt="contact-img" className='relative left-[350px] overflow-hidden' /> */ }