import React from 'react'
import Card from './Card'
import arrow from '../assets/up-icon.svg';
import img1 from '../assets/illustration (1).svg';
import img2 from '../assets/illustration (2).svg';
import img3 from '../assets/illustration (6).svg';
import img4 from '../assets/illustration (5).svg';
import img5 from '../assets/illustration (3).svg';
import img6 from '../assets/illustration (4).svg';
import Headings from './Headings';

function Services() {
    return (
        <>
            <Headings
                head={'Services'}
                sub1={'At our digital marketing agency, we offer a range of services to'}
                sub2={'help businesses grow and succeed online.These services include:'} />
            <div className='flex w-[90%] gap-[40px] items-center mt-[140px] mx-auto'>
                <Card
                    titleLine1="Search engine"
                    titleLine2="optimization"
                    highlightColor="#B9FF66"
                    bgColor="#F3F3F3"
                    arrowIcon={arrow}
                    mainImage={img1}
                    linkText="Learn More"


                />
                <Card
                    titleLine1="Pay-per-click"
                    titleLine2="advertising"
                    highlightColor="#ffffff"
                    bgColor="#B9FF66"
                    arrowIcon={arrow}
                    mainImage={img2}
                    linkText="Learn More"
                />
            </div >
            <div className='flex w-[90%] gap-[40px] items-center mt-[40px] mx-auto'>
                <Card
                    titleLine1="Social Media"
                    titleLine2="Marketing"
                    highlightColor="#fff"
                    bgColor="#000000"
                    arrowIcon={arrow}
                    mainImage={img3}
                    linkText="Learn More"
                    linkColor="#fff"
                />
                <Card
                    titleLine1="Email"
                    titleLine2="Marketing"
                    highlightColor="#B9FF66"
                    bgColor="#F3F3F3"
                    arrowIcon={arrow}
                    mainImage={img4}
                    linkText="Learn More"
                />
            </div >
            <div className='flex w-[90%] gap-[40px] items-center mt-[40px] mx-auto'>
                <Card
                    titleLine1="Content"
                    titleLine2="Creation"
                    highlightColor="#F3F3F3"
                    bgColor="#B9FF66"
                    arrowIcon={arrow}
                    mainImage={img5}
                    linkText="Learn More"
                />
                <Card
                    titleLine1="Search engine"
                    titleLine2="optimization"
                    highlightColor="#B9FF66"
                    bgColor="#000"
                    arrowIcon={arrow}
                    mainImage={img6}
                    linkText="Learn More"
                    linkColor="#fff"
                />
            </div >
        </>
    )
}

export default Services