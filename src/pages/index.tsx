import type { NextPage } from 'next';
import About from '../components/About';
import VideoComponent from '../components/VideoComponent';
import Contact from '../components/Contact';
import HeaderApp from '../components/HeaderApp';
import Main from '../components/Main';

import { SEO } from '../components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        shouldExcludeTitleSuffix
        title='Tools4CSS'
        description='Free CSS Generator | Our tools are designed to help you streamline your code development with dynamic and intuitive CSS generators'
      />
      <HeaderApp />
      <Main />
      <VideoComponent />
      <About />
      <Contact />
    </>
  );
};

export default Home;
