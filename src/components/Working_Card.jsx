import React, { useState } from 'react';

function Working_Card() {
    const [openIndex, setOpenIndex] = useState(0);

    const cards = [
        {
            number: '01',
            title: 'Consultation',
            content:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            number: '02',
            title: 'Research and Strategy Development',
            content:
                'We will conduct thorough research on your industry, competitors, and target audience. Based on our findings, we will create a tailored strategy designed to achieve your specific business goals.',
        },
        {
            number: '03',
            title: 'Implementation',
            content:
                'Our team will execute the agreed strategy using the latest tools, platforms, and techniques. We ensure all actions are aligned with your goals and maintain high-quality standards throughout the process.',
        },
        {
            number: '04',
            title: 'Monitoring and Optimization',
            content:
                'We will closely track the performance of implemented strategies using analytics and performance metrics. Based on the results, we will make necessary adjustments to maximize efficiency and outcomes.',
        },
        {
            number: '05',
            title: 'Reporting and Communication',
            content:
                'You will receive regular progress reports highlighting key metrics, insights, and improvements. We maintain open communication so you are always informed and involved in the process.',
        },
        {
            number: '06',
            title: 'Continual Improvement',
            content:
                'Our approach involves ongoing refinement and innovation. We continuously test new ideas, learn from data, and adapt strategies to ensure long-term growth and success.',
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-[90%] m-auto">
            {cards.map((card, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className="a w-[100%] m-auto my-[50px] rounded-4xl transition-colors duration-300"
                        style={{ backgroundColor: isOpen ? '#B9FF66' : '#F3F3F3' }}
                    >
                        <div className="w-[90%] m-auto flex flex-col">
                            {/* Header */}
                            <div className="w-full py-5 m-auto flex justify-between items-center">
                                <div className="flex justify-between items-center gap-5">
                                    <h1 className="text-[30px] lg:text-[60px] font-medium">{card.number}</h1>
                                    <h3 className="text-[20px] lg:text-[30px] font-medium">{card.title}</h3>
                                </div>

                                {/* Toggle button */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="bg-[#F3F3F3] min-w-min h-[25px] lg:w-[58px] lg:h-[58px] border rounded-full text-4xl font-extrabold flex justify-center items-center"
                                >
                                    {isOpen ? '-' : '+'}
                                </button>
                            </div>

                            {/* Divider */}
                            {isOpen && <hr />}

                            {/* Content */}
                            {isOpen && (
                                <div className="w-full py-10">
                                    <p>{card.content}</p>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Working_Card;
