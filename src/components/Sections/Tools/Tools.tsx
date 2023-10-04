import React from 'react'
import Card from '../../Card/Card'
import styles from './styles.module.scss'

const Tools = () => {
    return (
        <div className='bg-white w-full float-right py-16' id='tools'>
            <div className='md:w-4/6 px-4 mx-auto lg:max-w-7xl md:items-center md:px-8'>
                <h1 className='text-8xl text-center leading-85 gap-7 font-semibold my-6'>SEE ALL OUR</h1>
                <h1 className=' text-blue-500 text-7xl text-center leading-85 gap-7 font-semibold my-6'><span className={`text-white text-6xl p-2 ${styles.backgroundAnimated}`}>100%  FREE TOOLS</span> </h1>
                <div className='flex flex-wrap lg:flex-nowrap gap-6 my-4 mt-10 '>
                    <Card backgroundImage='/cover/1.png' title='Glassmorphism Generator' content='Translucent background, subtle blur, soft shadows, clean and modern design' href='' />
                    <Card backgroundImage='/cover/2.png' title='Background Gradient' content="Easily create custom gradients to enhance your project's visual appeal" href='' />
                    <Card backgroundImage='/cover/3.jpg' title='Text Gradient Animated' content="Easily create custom gradients to enhance your project's visual appeal" href='' />
                </div>
                <div className='flex flex-wrap lg:flex-nowrap gap-6 my-4'>
                    <Card backgroundImage='/cover/4.jpg' title='Neumorphism Generator' content='Translucent background, subtle blur, soft shadows, clean and modern design' href='' />
                    <Card backgroundImage='/cover/5.jpg' title='Claymorphism Generator' content="Easily create custom gradients to enhance your project's visual appeal" href='' />
                    <Card backgroundImage='/cover/6.jpg' title='Underline Gradient Gradient' content="Easily create custom gradients to enhance your project's visual appeal" href='' />
                </div>
            </div>
        </div>
    )
}

export default Tools