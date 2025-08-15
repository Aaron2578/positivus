import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headings from "./Headings";

const testimonials = [
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        role: "Marketing Director at X Corp",
    },
    {
        text: "Working with Positivus has been an amazing experience. Their strategies have helped us grow significantly in a short time. We value their expertise and highly recommend them.",
        name: "Joe",
        role: "Director at ABC Corp",
    },
    {
        text: "Positivus delivered beyond expectations. Their team is knowledgeable, efficient, and truly invested in our growth. We’ve seen fantastic results.",
        name: "Binney",
        role: "Founder at ZEYA Corp",
    },
];

export default function Testimonials() {

    return (
        <>
            <Headings head={'Testimonials'}
                sub1={'Hear from Our Satisfied Clients: Read Our Testimonials'}
                sub2={'to Learn More about Our Digital Marketing Services'} />
            <section className="w-[90%] m-auto mt-[80px] bg-black text-white py-16 px-6 rounded-4xl">
                <div className="lg:flex">
                    {testimonials.map((t, index) => (
                        <div key={index} className="w-[100%] py-5 lg:py-0 px-4 lg:w-[33.3%] h-auto">
                            <div className="card-bubble bg-[#111] border border-green-400 rounded-2xl p-6 relative min-h-[350px] flex flex-col justify-between">
                                <p className="text-gray-300 mb-6 text-justify">{t.text}</p>
                                <div>
                                    <p className="text-green-400 font-semibold">{t.name}</p>
                                    <p className="text-gray-500 text-sm">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
