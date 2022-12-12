import Image from 'next/image';
import React from 'react';
import { useRender } from '../../hooks/useRender';
import style from './styles.module.scss';

const Sidebar = () => {
  const { setComponent, component } = useRender();
  console.log(component);
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <Image src='/logo-white.png' alt='' width={190} height={60} />
      </div>
      <div className={style.textLogo}>
        <h1>Tools4CSS</h1>
      </div>
      <div className={style.buttons}>
        <button onClick={() => setComponent('claymorphism')}>
          <div className={style.row}>
            <div
              className={`${
                component == 'claymorphism' ? style.textActivated : style.text
              }`}
            >
              <div className={style.button}>Claymorphism</div>
            </div>
          </div>
        </button>
        <button onClick={() => setComponent('neumorphism')}>
          <div className={style.row}>
            <div
              className={`${
                component == 'neumorphism' ? style.textActivated : style.text
              }`}
            >
              <div className={style.button}>Neumorphism</div>
            </div>
          </div>
        </button>
        <button onClick={() => setComponent('glassmorphism')}>
          <div className={style.row}>
            <div
              className={`${
                component == 'glassmorphism' ? style.textActivated : style.text
              }`}
            >
              <div className={style.button}>Glassmorphism</div>
            </div>
          </div>
        </button>
        <button onClick={() => setComponent('text-gradient')}>
          <div className={style.row}>
            <div
              className={`${
                component == 'text-gradient' ? style.textActivated : style.text
              }`}
            >
              <div className={style.button}>Text Gradient</div>
            </div>
          </div>
        </button>
        <button onClick={() => setComponent('background-gradient')}>
          <div className={style.row}>
            <div
              className={`${
                component == 'background-gradient'
                  ? style.textActivated
                  : style.text
              }`}
            >
              <div className={style.button}>Background Gradient</div>
            </div>
          </div>
        </button>
      </div>

      <div className={style.footer}>
        Made with ❤️ by <span>Felipe Matheus</span>
      </div>
    </div>
  );
};

export default Sidebar;
