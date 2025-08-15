import React from 'react'

function Case_Card({ inp1, inp2, inp3, inp4, inp5, inp6, more }) {
    return (
        <div className='w-[80%] text-justify mx-auto lg:w-[300px]'>
            <p className='inline lg:block'>{inp1}</p>
            <p className='inline lg:block'>{inp2}</p>
            <p className='inline lg:block'>{inp3}</p>
            <p className='inline lg:block'>{inp4}</p>
            <p className='inline lg:block'>{inp5}</p>
            <p className='inline lg:block'>{inp6}</p>
            <div className='flex gap-5 items-end'>
                <p className='pt-5 text-[#B9FF66]'>Learn More</p>
                <img src={more} alt="up-arrow" />
            </div>
            <hr className='mt-[30px] lg:hidden' />
        </div>
    )
}

export default Case_Card