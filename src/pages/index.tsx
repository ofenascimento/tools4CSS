import type { NextPage } from 'next';
import { SEO } from '../components/SEO';
import Footer from '../components/Footer';
import HeaderApp from '../components/Header';
import Main from '../components/Main';
import VideoComponent from '../components/VideoComponent';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        shouldExcludeTitleSuffix
        title='Tools4CSS'
        description='Free CSS Generator. Our tools are designed to help you streamline your code development with dynamic and intuitive CSS generators.'
      />
      <HeaderApp />
      <Main />
      <VideoComponent />
      <Footer />
    </>
  );
};

export default Home;
