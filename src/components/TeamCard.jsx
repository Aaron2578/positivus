import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

function TeamCard({ image, name, role, description, linkedin }) {
    return (
        <div className='mt-[20px] lg:mt-[50px]'>
            <div className="a lg:w-[387px] h-auto lg:h-[310px] bg-white border border-black rounded-[45px] p-[35px] flex flex-col gap-2 shadow-sm">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-4">
                        {/* Image */}
                        <img
                            src={image}
                            alt={name}
                            className=" w-[30%] h-[30%] lg:w-[80px] lg:h-[80px]"
                        />
                        {/* Name and Role */}
                        <div>
                            <h3 className="text-[20px] font-semibold">{name}</h3>
                            <p className="text-[15px] lg:text-[16px] text-gray-700">{role}</p>
                        </div>
                    </div>
                    {/* LinkedIn Icon */}
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-[#b9ff66] hidden lg:w-[32px] lg:h-[32px] lg:flex justify-center items-center rounded-full"
                    >
                        <FaLinkedinIn size={16} />
                    </a>
                </div>
                <hr className='hidden lg:block' />
                {/* Description */}
                <p className="text-[18px] text-justify text-gray-600 mt-0 lg:mt-4 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default TeamCard;
