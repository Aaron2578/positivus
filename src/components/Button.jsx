import React from 'react'

function Button({ text }) {
    return (
        <button className='bg-[#191A23] text-white rounded-2xl py-[20px] px-[35px] hover:bg-[#3f3f42]'>{text}</button>
    )
}

export default Button