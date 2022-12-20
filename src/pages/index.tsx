import type { NextPage } from 'next';
import { SEO } from '../components/SEO';
import { useRender } from '../hooks/useRender';
import React from 'react';
import Sidebar from '../components/Sidebar';

// Generators
import Claymorphism from '../components/Claymophism';
import Glassmorphism from '../components/Glassmorphism';
import Neumorphism from '../components/Neumorphism';
import TextGradient from '../components/TextGradient';
import BackgroundGradient from '../components/BackgroundGradient';
import UnderlineGradient from '../components/UnderlineGradient';


function renderSwitch(params: any) {
  switch (params) {
    case 'claymorphism':
      return <Claymorphism />;
    case 'neumorphism':
      return <Neumorphism />;
    case 'glassmorphism':
      return <Glassmorphism />;
    case 'text-gradient':
      return <TextGradient />;
    case 'background-gradient':
      return <BackgroundGradient />;
    case 'underline-gradient':
      return <UnderlineGradient />;
  }
}

const Home: NextPage = () => {
  const { component } = useRender();
  return (
    <>
      <SEO
        shouldExcludeTitleSuffix
        title='Tools4CSS - Free CSS Generators'
        description='Free CSS Generators. Our tools are designed to help you streamline your code development with dynamic and intuitive CSS generators.'
      />
      <div className='grid'>
        <Sidebar />
        {renderSwitch(component)}
      </div>
    </>
  );
};

export default Home;
