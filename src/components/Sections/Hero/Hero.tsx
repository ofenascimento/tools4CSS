import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
Image

const Hero = () => {
    return (
        <div className='bg-black h-screen w-full float-right flex flex-col justify-center items-center' id='hero'>
            <div className={`text-white text-7xl lg:text-9xl text-center leading-85 flex gap-7 mt-0 lg:mt-6`}>Lets <h1 className={`text-white text-7xl lg:text-9xl text-center leading-85 ${styles.underlineGradient}`}>build</h1></div>
            <h1 className={`text-white text-7xl lg:text-9xl text-center leading-85 ${styles.textGradient}`}>awesome</h1>
            <h1 className='text-white  text-7xl lg:text-9xl text-center leading-85'>interfaces</h1>
            <h3 className=' text-gray-500 text-3xl mx-16 my-4 lg:my-0 lg:mx-auto'>Take advantage of our tools to speed<br /> up the styling of your components</h3>
            <button className='text-white mt-4 p-6 text-3xl rounded-full bg-blue-600 hover:bg-blue-700'>Get Started</button>
        </div>
    )
}

export default Hero