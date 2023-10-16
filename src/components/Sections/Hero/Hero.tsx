import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'



const Hero = () => {
    return (
        <div className='w-full lg:w-4/6 mx-auto mt-8 flex justify-center items-center md:justify-between flex-wrap' id='hero'>
            <div className='w-full lg:w-2/4 font-semibold flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                <div className={` leading-85 text-6xl xl:text-8xl lg:text-6xl flex mt-0 lg:mt-6 gap-5`}>Lets <h1 className={`text-black  leading-85`}>build</h1></div>
                <h1 className={` leading-85 text-6xl xl:text-8xl lg:text-6xl ${styles.textGradient}`}>awesome</h1>
                <h1 className=' leading-85 text-6xl xl:text-8xl lg:text-6xl'>interfaces</h1>
                <h3 className=' text-slate-900 text-center lg:text-start text-2xl mt-4 font-medium lg:pr-4'>Take advantage of our tools to speed up the styling of your components</h3>
                <div className='text-white text-xl text-center mt-6 w-2/4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700'>
                    <Link href='/app' >Get Started</Link>
                </div>
            </div>
            <div className='w-full lg:w-2/4 mt-6 lg:mt-0 z-0'>
                <Image src='/app.png' width={1307} height={874} layout='responsive' alt='' />
            </div>
            
        </div>
    )
}

export default Hero