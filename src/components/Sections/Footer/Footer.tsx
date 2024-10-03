import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Footer = () => {
    return (
        <div className='w-full lg:w-4/6 mx-auto text-center flex sm:flex-col md:flex-col lg:flex-row justify-center lg:justify-between items-center py-8 text-lg font font-lexend text-slate-900 flex-wrap gap-10 lg:gap-0'>
            <div className='w-full lg:w-auto'>
                <Image src="/logo.png" width={40} height={40} alt='' />
            </div>
            
            <div className='flex justify-around gap-4 dark:text-white'>
                <Link href='/privacity'>Privacy</Link>
                <Link href='/service-terms'>Service Terms</Link>
                <Link href='/about'>About</Link>
            </div>
            <p className='dark:text-white'>Made with ❤️ by gomestzx</p>  
        </div>
    )
}

export default Footer