import type { NextPage } from 'next';
import { SEO } from '../components/SEO';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Sections/Hero/Hero';
import Tools from '../components/Sections/Tools/Tools';
import Inspired from '../components/Sections/Inspired/Inspired';
import Footer from '../components/Sections/Footer/Footer';



const Home: NextPage = () => {
  return (
    <div>
      <SEO
        shouldExcludeTitleSuffix
        title='Tools4CSS - Free CSS Generators'
        description='Free CSS Generators. Our tools are designed to help you streamline your code development with dynamic and intuitive CSS generators.'
      />
      <Navbar />
      <Hero />
      <Tools />
      <Inspired />
      <Footer />
    </div>
  );
};

export default Home;
