import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headings from "./Headings";

const testimonials = [
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
    },
    {
        text: "Working with Positivus has been an amazing experience. Their strategies have helped us grow significantly in a short time. We value their expertise and highly recommend them.",
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
    },
    {
        text: "Positivus delivered beyond expectations. Their team is knowledgeable, efficient, and truly invested in our growth. We’ve seen fantastic results.",
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
    },
];

export default function Testimonials() {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <>
            <Headings head={'Testimonials'}
                sub1={'Hear from Our Satisfied Clients: Read Our Testimonials'}
                sub2={'to Learn More about Our Digital Marketing Services'} />
            <section className="w-[90%] m-auto mt-[80px] bg-black text-white py-16 px-6 rounded-4xl">
                <Slider {...settings}>
                    {testimonials.map((t, index) => (
                        <div key={index} className="px-4">
                            <div className="card-bubble bg-[#111] border border-green-400 rounded-2xl p-6 relative min-h-[300px] flex flex-col justify-between">
                                <p className="text-gray-300 mb-6">{t.text}</p>
                                <div>
                                    <p className="text-green-400 font-semibold">{t.name}</p>
                                    <p className="text-gray-500 text-sm">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    );
}
