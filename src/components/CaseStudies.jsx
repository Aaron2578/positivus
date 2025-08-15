import React from 'react'
import Headings from './Headings'
import line from '../assets/Line.svg'
import more from '../assets/more.svg'
import Case_Card from './Case_Card'
function CaseStudies() {
    return (
        <div>
            <Headings
                head={'Case Studies'}
                sub1={'Explore Real-Life Examples of Our Proven Digital Marketing'}
                sub2={'Success through Our Case Studies'} />

            <div className="w-[90%] h-[700px] lg:h-[347px] rounded-[45px] bg-[#191A23] text-white m-auto my-[50px] lg:my-[100px] flex flex-col lg:flex lg:flex-row justify-evenly items-center">
                <Case_Card
                    inp1={'For a local restaurant, we '}
                    inp2={'implemented a targeted PPC'}
                    inp3={'campaign that resulted in a 50%'}
                    inp4={'increase in website traffic and a'}
                    inp5={'25% increase in sales.'}
                    more={more} />
                <img src={line} alt="line" className='hidden lg:block' />
                <Case_Card
                    inp1={'For a B2B software company, we '}
                    inp2={'developed an SEO strategy that'}
                    inp3={'resulted in a first page ranking '}
                    inp4={'for key keywords and a 200%'}
                    inp5={'increase in organic traffic.'}
                    more={more} />
                <img src={line} alt="line" className='hidden lg:block' />
                <Case_Card
                    inp1={'For a national retail chain, we '}
                    inp2={'created a social media '}
                    inp3={'marketing campaign that '}
                    inp4={'increased followers by 25% and'}
                    inp5={'generated a 20% increase in'}
                    inp6={'online sales.'}
                    more={more} />

            </div >
        </div>
    )
}

export default CaseStudies
