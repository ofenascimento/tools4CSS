import type { NextPage } from 'next';
import Claymorphism from '../../components/Claymophism';
import HeaderMobile from '../../components/HeaderMobile';
import { SEO } from '../../components/SEO';

import Sidebar from '../../components/Sidebar';


const claymorphism: NextPage = () => {
  return (
    <div>
      <HeaderMobile />
      <SEO title='Claymorphism' />
      <div className='grid'>
        <Sidebar />
        <Claymorphism />
      </div>
    </div>
  );
};

export default claymorphism;
