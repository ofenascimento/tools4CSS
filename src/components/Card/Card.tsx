import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'
import { ICard } from './types'


const Card = (props: ICard) => {
    return (
        <div className='flex flex-col w-full lg:w-2/6 h-auto rounded-lg justify-start relative border-4 border-black ' >
            <div style={{ backgroundImage: `url("${props.backgroundImage}")`, backgroundSize: 'cover' }} className=' p-8 w-full h-6'></div>
            <div className='flex flex-col w-full px-6 pb-16'> 
                <h1 className=' text-2xl font-semibold py-2'>{props.title}</h1>
                <p>{props.content}</p>
                <a className='text-white p-2 bg-black mt-auto text-center absolute right-0 bottom-0 w-full' href={props.href}>MORE</a>
            </div>
        </div>
    )
}

export default Card