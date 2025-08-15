import React from 'react'
import banner from '../assets/banner.svg'
import amazon from '../assets/amazon.svg'
import dribble from '../assets/dribble.svg'
import hubspot from '../assets/hubspot.svg'
import netflix from '../assets/netflix.svg'
import notion from '../assets/notion.svg'
import zoom from '../assets/zoom.svg'
import Button from './Button'
function Banner() {
    return (
        <div className='sm:flex flex-col w-[90%] justify-between items-center my-10 mx-auto'>
            <div className='w-[100%] flex'>
                <div className='w-[100%] lg:w-[50%]'>
                    <div className='text-[55px] lg:text-[60px] font-bold '>
                        <h1 className='inline'>Navigating the </h1>
                        <h1 className='inline'>digital landscape </h1>
                        <h1 className='inline'>for success</h1>
                    </div>
                    <div className='text-justify lg:text-[20px] font-normal leading-[28px] my-8'>
                        <p className='inline'>Our digital marketing agency helps businesses</p>
                        <p className='inline'>grow and succeed online through a range of</p>
                        <p className='inline'>services including SEO, PPC, social media marketing,</p>
                        <p className='inline'> and content creation.</p>
                    </div>
                    <Button text={'Book a Consultation'} />
                </div>
                <div className='hidden w-[0%] lg:w-[50%]'>
                    <img src={banner} alt="banner-img" />
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16 items-center">
                {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16 justify-between"> */}
                <img src={amazon} alt="amazon-img" className="mx-auto" />
                <img src={dribble} alt="dribble-img" className="mx-auto" />
                <img src={hubspot} alt="hubspot-img" className="mx-auto" />
                <img src={notion} alt="notion-img" className="mx-auto" />
                <img src={netflix} alt="netflix-img" className="mx-auto" />
                <img src={zoom} alt="zoom-img" className="mx-auto" />
            </div>
        </div>
    )
}

export default Banner