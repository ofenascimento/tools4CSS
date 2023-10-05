import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Footer = () => {
    return (
        <div className='bg-black w-full float-right py-8'>
            <div className='md:w-4/6 px-4 mx-auto lg:max-w-7xl md:items-center md:px-8'>
                <div className='flex justify-between flex-wrap'>
                    <div >
                        <h1 className=' text-white text-4xl my-6 font-semibold'>Tools</h1>
                        <div className='flex flex-col text-gray-500 text-xl gap-2 font-semibold'>
                        <Link href=''>Glassmorphism Generator</Link>
                        <Link href=''>Background Gradient</Link>
                        <Link href=''>Text Gradient Animated</Link>
                        <Link href=''>Neumorphism Generator</Link>
                        <Link href=''>Claymorphism Generator</Link>
                        <Link href=''>Underline Gradient Gradient</Link>
                        </div>
                       
                    </div>
                    <div>
                        <h1 className=' text-white text-4xl my-6'>Help & Support</h1>
                        <div className='flex flex-col text-gray-500 text-xl gap-2 font-semibold'>
                        <Link href=''>About US</Link>
                        <Link href=''>Blog</Link>
                        <Link href=''>Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-white text-4xl my-6'>Legal</h1>
                        <div className='flex flex-col text-gray-500 text-xl gap-2 font-semibold'>
                        <Link href=''>Terms of service</Link>
                        <Link href=''>Provicy Policy</Link>
                        <Link href=''>Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer