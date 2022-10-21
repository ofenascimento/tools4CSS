import type { NextPage } from 'next';
import HeaderMobile from '../../components/HeaderDash';
import { SEO } from '../../components/SEO';
import Sidebar from '../../components/Sidebar';
import TextGradient from '../../components/TextGradient';


const TextGradientPage: NextPage = () => {
  return (
    <div>
      <SEO title='Text Gradient'/>
      <HeaderMobile />
      <div className='grid'>
        <Sidebar />
        <TextGradient />
      </div>
    </div>
  );
};

export default TextGradientPage;
