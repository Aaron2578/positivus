import React from 'react'
import Headings from './Headings'
import TeamCard from './TeamCard'
import Button from './Button'
import per1 from '../assets/Person1.svg'
import per2 from '../assets/Person2.svg'
import per3 from '../assets/Person3.svg'
import per4 from '../assets/Person4.svg'
import per5 from '../assets/Person5.svg'
import per6 from '../assets/Person6.svg'
function Teams() {
    return (
        <div>
            <Headings
                head={'Team'}
                sub1={'Meet the skilled and experienced team behind our'}
                sub2={'successful digital marketing strategies'} />
            <div className='w-[90%] m-auto lg:flex justify-between'>
                <TeamCard
                    image={per1}
                    name={"John Smith"}
                    role={'CEO and Founder'}
                    description={'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'}
                />
                <TeamCard
                    image={per2}
                    name={"Jane Doe"}
                    role={'Director of Operations'}
                    description={'7+ years of experience in project management and team leadership. Strong organizational and communication skills'}
                />
                <TeamCard
                    image={per3}
                    name={"Michael Brown"}
                    role={'Senior SEO Specialist'}
                    description={'5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'}
                />
            </div>
            <div className='w-[90%] m-auto lg:flex justify-between'>
                <TeamCard
                    image={per4}
                    name={"Emily Johnson"}
                    role={'PPC Manager'}
                    description={'3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'}
                />
                <TeamCard
                    image={per5}
                    name={"Brian Williams"}
                    role={'Social Media Specialist'}
                    description={'4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'}
                />
                <TeamCard
                    image={per6}
                    name={"Sarah Kim"}
                    role={'Content Creator'}
                    description={'2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'}
                />
            </div>
            <div class="w-[90%] m-auto mt-[20px] text-right">
                <Button text={'See all team'} />
            </div>
        </div>
    )
}

export default Teams