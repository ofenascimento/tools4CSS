import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './styles.module.scss';

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <Image src='/logo-white.png' alt='' width={190} height={60} />
      </div>
      <div className={style.textLogo}>
        <h1>Tools4CSS</h1>
      </div>
      <div className={style.links}>
      <Link href='/tools/neumorphism'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Neumorphism</div>
            </div>
          </div>
        </Link>
        <Link href='/tools/claymorphism'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Claymorphism</div>
            </div>
          </div>
        </Link>
        <Link href='/tools/glassmorphism'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Glassmorphism</div>
            </div>
          </div>
        </Link>
        <Link href='/tools/text-gradient'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Text Gradient</div>
            </div>
          </div>
        </Link>
        <Link href='/tools/background-gradient'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Background Gradient</div>
            </div>
          </div>
        </Link>
        
        
      </div>

      <div className={style.footer}>
        Made with ❤️ by
        <span>
          <Link href='https://gomestzx.github.io'> gomestzx</Link>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
