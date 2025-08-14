import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

function TeamCard({ image, name, role, description, linkedin }) {
    return (
        <div className='w-[90%] m-auto mt-[50px]'>
            <div className="a w-[387px] h-[310px] bg-white border border-black rounded-[45px] p-[35px] flex flex-col justify-between shadow-sm">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-4">
                        {/* Image */}
                        <img
                            src={image}
                            alt={name}
                            className="w-[80px] h-[80px]"
                        />
                        {/* Name and Role */}
                        <div>
                            <h3 className="text-[20px] font-semibold">{name}</h3>
                            <p className="text-[16px] text-gray-700">{role}</p>
                        </div>
                    </div>
                    {/* LinkedIn Icon */}
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-[#b9ff66] w-[32px] h-[32px] flex justify-center items-center rounded-full"
                    >
                        <FaLinkedinIn size={16} />
                    </a>
                </div>
                <hr />
                {/* Description */}
                <p className="text-[18px] text-gray-600 mt-4 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default TeamCard;
