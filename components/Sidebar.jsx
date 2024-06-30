import Link from 'next/link';
import React from 'react'

function Sidebar() {
    const navLinks = (
        <>
            <li className='bg-primary px-8 py-4 text-xl'>
                <Link href="/">Home</Link>
            </li>
            <li className='px-8 py-4 text-xl'>
                <Link href="/projects">Projects</Link>
            </li>
            <li className='px-8 py-4 text-xl'>
                <Link href="/about">About</Link>
            </li>
            <li className='px-8 py-4 text-xl'>
                <Link href="/contact">Contact</Link>
            </li>
            <li className='px-8 py-4 text-xl'>
                <Link href="/blogs">Blogs</Link>
            </li>
        </>
    );

    return (
        <div>
            <ul className="flex-col justify-center items-center space-y-2">
                {navLinks}
            </ul>
        </div>
    )
}

export default Sidebar