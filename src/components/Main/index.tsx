/* eslint-disable @next/next/no-img-element */
import style from './styles.module.scss';
import React from 'react';
import { useRouter } from 'next/router';

export default function Main() {
  const router = useRouter();

  const Redirect = () => {
    router.push('/background-gradient');
  };

  return (
    <>
      <div className={style.container}>
        <h1>
          Build great designs
          <br />
          with our FREE tools
        </h1>
        <p>Enjoy our dynamic and intuitive CSS generators </p>

        <button onClick={() => Redirect()} className={style.buttonMain}>
          Try it for free 🚀
        </button>
      </div>
    </>
  );
}
