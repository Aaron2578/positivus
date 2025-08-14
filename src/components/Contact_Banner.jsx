import React from 'react'
import Banner from '../assets/Contact-Banner.svg'
import Button from './Button'
function Contact_Banner() {
    return (
        <div className="w-[90%] h-[347px] rounded-[45px] bg-[#F3F3F3] m-auto my-[100px] flex justify-between items-center">
            <div className='mx-[60px]'>
                <h3 className='font-medium text-[30px]'>Let’s make things happen</h3>
                <div className='font-normal text-[18px] my-[26px]'>
                    <p>Contact us today to learn more about how our digital</p>
                    <p>marketing services can help your business grow and</p>
                    <p>succeed online.</p>
                </div>
                <Button text={'Get your free proposal'} />
            </div>
            <div>
                <img src={Banner} alt="contact-banner" />
            </div>
        </div >
    )
}

export default Contact_Banner