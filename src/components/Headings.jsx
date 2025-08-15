import React from 'react'

function Headings({ head, sub1, sub2 }) {
    return (
        <div className='lg:flex w-[90%] gap-[40px] items-center mt-[100px] mx-auto'>
            <h2 className='inline lg:font-medium text-[40px] bg-[#B9FF66] px-2 lg:px-7 rounded-[7px]'>{head}</h2>
            <div className='text-justify lg:font-normal text-[18px]'>
                <p className='mt-5 text-justify lg:mt-0'>{sub1}</p>
                <p className='inline-block'>{sub2}</p>
            </div>
        </div>
    )
}

export default Headings