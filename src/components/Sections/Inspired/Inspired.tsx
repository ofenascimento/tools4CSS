import Image from 'next/image'
import React from 'react'


const Inspired = () => {
    return (
        <div className='bg-white w-full float-right'>
            <div className='md:w-4/6 px-4 py-4 mb-8 mx-auto lg:max-w-7xl md:items-center md:px-8 bg-black rounded-lg'>
                <h1 className='text-8xl  text-white text-center leading-85 gap-7 font-semibold my-6'>GET INSPIRED</h1>
                <Image src='/inspired.png' width={1600} height={866} alt='' />
            </div>
        </div>
    )
}

export default Inspired