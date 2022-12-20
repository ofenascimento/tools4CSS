/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRender } from '../../hooks/useRender';
import style from './styles.module.scss';

const Sidebar = () => {
  const { setComponent, component } = useRender();
  return (
    <div className={style.sidebar}>
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
        <button onClick={() => setComponent('underline-gradient')}>
          <div className={style.row}>
            <div
              className={`${
                component == 'underline-gradient' ? style.textActivated : style.text
              }`}
            >
              <div className={style.button}>Underline Gradient</div>
            </div>
          </div>
        </button>
      </div>

      <div className={style.footer}>
      <a href="https://www.producthunt.com/posts/tools4css?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tools4css" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=356512&theme=dark" alt="Tools4CSS - Tools&#0032;to&#0032;help&#0032;developers&#0032;build&#0032;interfaces&#0032;modern&#0032;quickly | Product Hunt" width="250" height="54" /></a>
        Made with ❤️ by <span>Felipe Matheus</span>
      </div>
    </div>
  );
};

export default Sidebar;
