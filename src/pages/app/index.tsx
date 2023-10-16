import type { NextPage } from 'next';
import { SEO } from '../../components/SEO';
import { useRender } from '../../hooks/useRender';
import React from 'react';
import Sidebar from '../../oldComponents/Sidebar';

// Generators
import Claymorphism from '../../oldComponents/Claymophism';
import Glassmorphism from '../../oldComponents/Glassmorphism';
import Neumorphism from '../../oldComponents/Neumorphism';
import TextGradient from '../../oldComponents/TextGradient';
import BackgroundGradient from '../../oldComponents/BackgroundGradient';
import UnderlineGradient from '../../oldComponents/UnderlineGradient';


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

const App: NextPage = () => {
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

export default App;