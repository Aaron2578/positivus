import React from 'react'
import logo from '../assets/Logo-white.svg'
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Headings from './Headings';
function Footer() {
    return (
        <div className='w-[90%] m-auto mt-[100px] bg-black rounded-t-4xl'>
            <div className='w-[90%] m-auto pt-[50px]'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="logo" className='w-40 text-white' />
                    </div>
                    <div>
                        <ul className='hidden lg:flex gap-8 text-white font-light'>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Use Cases</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='gap-2 flex lg:gap-8'>
                        <FaLinkedin className="text-white text-xl lg:text-2xl" />
                        <FaFacebook className="text-white text-xl lg:text-2xl" />
                        <FaTwitter className="text-white text-xl lg:text-2xl" />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center'>
                    <div className='mt-[40px]'>
                        <h2 className='inline lg:font-medium text-[20px] bg-[#B9FF66] px-2 lg:px-7 rounded-[7px] font-bold'>Contact us:</h2>
                        <div className='text-white font-light'>
                            <p className='my-2'>Email: info@positivus.com</p>
                            <p className='my-2'>Phone: 555-567-8901</p>
                            <p className='my-2'>Address: 1234 Main St<br></br> Moonstone City, Stardust State 12345</p>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse lg:flex'>
                        <div className='bg-[#292A32] h-[auto] lg:h-[100px] lg:flex lg:justify-between lg:items-center rounded-3xl p-[10px] lg:p-[55px]'>
                            <form className='text-white lg:flex gap-5 lg:gap-10 rounded-3xl'>
                                <input type="text" placeholder='Email' className='w-[100%] border py-3 px-3 mb-3 lg:mb-0 lg:px-3 rounded-2xl' />
                                <button className='w-[100%] bg-[#B9FF66] p-[15px] rounded-2xl text-black'>Subscribe to news</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr className='text-white my-[20px]' />
                <div className='lg:flex justify-between items-center text-white pb-3'>
                    <div className='lg:flex gap-10'>
                        <p>© 2025 Positivus. All Rights Reserved.</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div>
                        <p>Created by Aaron</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer