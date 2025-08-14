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
        <div className='flex flex-col w-[90%] justify-between items-center my-5 mx-auto'>
            <div className='w-[100%] flex'>
                <div className='w-[50%]'>
                    <div className='text-[60px] font-bold'>
                        <h1>Navigating the</h1>
                        <h1>digital landscape</h1>
                        <h1>for success</h1>
                    </div>
                    <div className='text-[20px] font-normal leading-[28px] my-8'>
                        <p>Our digital marketing agency helps businesses</p>
                        <p>grow and succeed online through a range of</p>
                        <p>services including SEO, PPC, social media marketing,</p>
                        <p> and content creation.</p>
                    </div>
                    <Button text={'Book a Consultation'} />
                </div>
                <div className='w-[50%]'>
                    <img src={banner} alt="banner-img" />
                </div>
            </div>
            <div className='flex justify-between w-[100%] mt-[70px]'>
                <img src={amazon} alt="amazon-img" className='fill-black' />
                <img src={dribble} alt="amazon-img" className='fill-black' />
                <img src={hubspot} alt="amazon-img" className='fill-black' />
                <img src={notion} alt="amazon-img" className='fill-black' />
                <img src={netflix} alt="amazon-img" className='fill-black' />
                <img src={zoom} alt="amazon-img" className='fill-black' />
            </div>
        </div>
    )
}

export default Banner