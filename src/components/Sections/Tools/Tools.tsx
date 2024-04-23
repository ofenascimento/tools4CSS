import React from 'react'
import Card from '../../Card/Card'

const Tools = () => {
  return (
    <div className='w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4'>
      <br />
      <div className='w-auto md:w-full mt-4 font-GilroyMedium text-lg lg:mx-0 mb-6'>
        <span className='text-2xl text-center' style={{
          backgroundImage: 'linear-gradient(80deg, #1D4ED8, #4972d8 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 0.25em',
          backgroundPosition: '0 120%'
        }} >CSS Generators</span>
      </div>
      <div className='flex flex-wrap'>
        <Card title='Background Gradient' slug='background-gradient' img='1.png?version=' />
        <Card title='Text Gradient' slug='text-gradient' img='2.png?version=' />
        <Card title='Underline Gradient' slug='underline-gradient' img='3.png' />
        <Card title='Glassmorphism Generator' slug='glassmorphism' img='4.png' />
        <Card title='Neumorphism Generator' slug='neumorphism' img='5.png?version=' />
      </div>
      <div className='w-auto md:w-full mt-4 font-GilroyMedium text-lg lg:mx-0 mb-6'>
        <span className='text-2xl text-center' style={{
          backgroundImage: 'linear-gradient(80deg, #1D4ED8, #4972d8 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 0.25em',
          backgroundPosition: '0 120%'
        }} >CSS Tools</span>
      </div>
      <div className='flex flex-wrap w-full'>
        <Card title='Gradient Pallete' slug='gradient-pallete' img='6.png' />
        <Card title='CSS Formatter' slug='css-formatter' img='css-formatter.png' />
      </div>
    </div>
  )
}

export default Tools