import React from 'react';
import HeaderMobile from '../../components/HeaderMobile';
import Neumorphism from '../../components/Neumorphism';
import { SEO } from '../../components/SEO';
import Sidebar from '../../components/Sidebar';

const neumorphism = () => {
  return (
    <>
      <SEO title='Neumorphism' />
      <HeaderMobile />
      <div className='grid'>
        <Sidebar />
        <Neumorphism />
      </div>
    </>
  );
};

export default neumorphism;
