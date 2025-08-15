import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuLinks = [
        { name: 'About us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Use Cases', path: '/use-cases' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className='flex w-[90%] justify-between items-center my-5 mx-auto relative'>
            <div>
                <img src={logo} alt='Logo' className='w-30' />
            </div>

            {/* Desktop menu */}
            <div className='hidden lg:flex justify-between gap-10 items-center text-[16px]'>
                <ul className='flex gap-10'>
                    {menuLinks.map((link) => (
                        <Link key={link.name} to={link.path}>
                            {link.name}
                        </Link>
                    ))}
                </ul>
                <Link to='/request-quote' className='border p-2 rounded'>
                    Request a quote
                </Link>
            </div>

            {/* Mobile menu button */}
            <div className='lg:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className='absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 lg:hidden'>
                    <ul className='flex flex-col gap-6 text-gray-800 text-lg'>
                        {menuLinks.map((link) => (
                            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                    </ul>
                    <Link
                        to='/request-quote'
                        className='mt-6 border p-2 rounded text-gray-800'
                        onClick={() => setIsOpen(false)}
                    >
                        Request a quote
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
