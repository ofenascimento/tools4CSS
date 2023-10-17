import React from 'react'
import Card from '../../Card/Card'

const Tools = () => {
    return (
        <div className='w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4' id='blog'>
        <br />
        <div className='flex flex-wrap'>
          <Card title='Background Gradient' slug='background-gradient' img='1.png?version=' />
          <Card title='Text Gradient' slug='text-gradient' img='2.png?version=' />
          <Card title='Underline Gradient' slug='underline-gradient' img='6.png' />
          <Card title='Glassmorphism Generator' slug='glassmorphism' img='3.png' />
          {/* <Card title='Claymorphism Generator' slug='app' img='4.png' />
          <Card title='Neumorphism Generator' slug='app' img='5.png?version=' /> */}
        </div>
      </div>
    )
}

export default Tools