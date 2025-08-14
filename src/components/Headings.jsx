import React from 'react'

function Headings({ head, sub1, sub2 }) {
    return (
        <div className='flex w-[90%] gap-[40px] items-center mt-[140px] mx-auto'>
            <h2 className='font-medium text-[40px] bg-[#B9FF66] px-7 rounded-[7px]'>{head}</h2>
            <div className='font-normal text-[18px]'>
                <p>{sub1}</p>
                <p>{sub2}</p>
            </div>
        </div>
    )
}

export default Headings