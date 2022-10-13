import type { NextPage } from 'next';

import { SEO } from '../components/SEO';
import HeaderMobile from '../components/HeaderMobile';
import Sidebar from '../components/Sidebar';
import BackgroundGradient from '../components/BackgroundGradient';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        shouldExcludeTitleSuffix
        title='Tools4CSS'
        description='Free CSS Generator. Our tools are designed to help you streamline your code development with dynamic and intuitive CSS generators.'
      />
      <HeaderMobile />
      <div className='grid'>
        <Sidebar />
        <BackgroundGradient />
      </div>
    </>
  );
};

export default Home;
