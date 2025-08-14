import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='flex w-[90%] justify-between items-center my-5 mx-auto' >
            <div>
                <img src={logo} alt="Logo" className='w-30' />
            </div>
            <div className='flex justify-between gap-10 items-center text-[16px]'>
                <ul className='flex gap-10'>
                    <Link>About us</Link>
                    <Link>Services</Link>
                    <Link>Use Cases</Link>
                    <Link>Pricing</Link>
                    <Link>Blog</Link>
                </ul>
                <Link className='border p-2 rounded'>Request a quote</Link>
            </div>
        </div>
    )
}

export default NavBar