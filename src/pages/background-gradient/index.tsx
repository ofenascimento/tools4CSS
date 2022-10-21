import type { NextPage } from 'next';
import BackgroundGradient from '../../components/BackgroundGradient';
import HeaderMobile from '../../components/HeaderDash';
import { SEO } from '../../components/SEO';
import Sidebar from '../../components/Sidebar';


const BackgroundGradientPage: NextPage = () => {
  return (
    <div>
      <SEO title='Background Gradient'/>
      <HeaderMobile />
      <div className='grid'>
        <Sidebar />
        <BackgroundGradient />
      </div>
    </div>
  );
};

export default BackgroundGradientPage;
