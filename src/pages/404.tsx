import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PageErrorNotFound = () => {
    return (
        <div className='w-[100%] min-h-[78vh] flex'>
            <div className='w-screen flex justify-center'>
                <div className=' flex flex-col justify-center items-center'>
                    <Image src='/ilustrations/404.svg' width={400} height={300} alt='404 ilustration' />
                    <h1 className='text-4xl dark:text-white mt-10'>Oops! This Page Doesn't Exist.</h1>
                    <Link href='/'><div className=' bg-main py-2 px-4 text-white rounded-lg mt-4 text-center w-full cursor-pointer'>Back to home</div></Link>
                </div>
            </div>

        </div>
    )
}

export default PageErrorNotFound