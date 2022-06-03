import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='sm:p-4 p-3 bg-[#eb3b3b]'>
            <h2 className='text-center text-lg text-black dark:text-white'><Link  href="/"><a className='text-black dark:text-white'>Topmojo</a></Link> | Copyright &copy; 2022</h2>
        </footer>
    )
}

export default Footer