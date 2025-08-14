import React from 'react'

function Case_Card({ inp1, inp2, inp3, inp4, inp5, inp6, more }) {
    return (
        <div className=' w-[300px]'>
            <p>{inp1}</p>
            <p>{inp2}</p>
            <p>{inp3}</p>
            <p>{inp4}</p>
            <p>{inp5}</p>
            <p>{inp6}</p>
            <div className='flex gap-5 items-end'>
                <p className='pt-5 text-[#B9FF66]'>Learn More</p>
                <img src={more} alt="up-arrow" />
            </div>
        </div>
    )
}

export default Case_Card