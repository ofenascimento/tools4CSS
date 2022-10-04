/* eslint-disable @next/next/no-img-element */
import style from './styles.module.scss';
import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import { useRouter } from 'next/router';

export default function Main() {
  const router = useRouter();
  const [depth, setDepth] = useState<number>(8);
  const [color, setColor] = useState<string>('#3377FF');

  const Redirect = () => {
    router.push('/tools/claymorphism');
  };

  interface IHexToRGBA {
    m: string;
    r: string;
    g: string;
    b: string;
  }

  function hexToRgb(hex: any) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function ({ m, r, g, b }: IHexToRGBA) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  const r = hexToRgb(color)?.r;
  const g = hexToRgb(color)?.g;
  const b = hexToRgb(color)?.b;
  return (
    <>
      <div className={style.container}>
        <div className={style.row}>
          <h1>
            Build great <br />
            designs with
            <br />
            our tools
          </h1>
          <div className={style.content}>
            <p
              onClick={() => Redirect()}
              style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
              className={style.buttonMain}
            >
              Try it for free 🚀
            </p>
            <a
              href='https://www.producthunt.com/posts/tools4css?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tools4css'
              target='_blank'
              rel='noreferrer'
            >
              
              <img
                src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=356512&theme=light'
                alt='Tools4CSS - Tools&#0032;to&#0032;help&#0032;developers&#0032;build&#0032;interfaces&#0032;modern&#0032;quickly | Product Hunt'
              />
            </a>
          </div>
        </div>

        <div className={style.row}>
          <div className={style.textMobile}>
            <h2>
              Build great designs
              <br />
              with our tools
            </h2>
          </div>
          <div className={style.mainImg}>
            <div className={style.background}>
              <div
                className={style.container}
                style={{
                  width: '320px',
                  height: '320px',
                  borderRadius: 12,
                  boxShadow: `35px 35px 68px 0px rgba(${r}, ${g}, ${b}, 0.5), inset -${depth}px -${depth}px 16px 0px rgba(${r}, ${g}, ${b}, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)`,
                }}
              ></div>
            </div>
            <label>Change the depth 👇</label>
            <Slider
              value={depth}
              onChange={(e, value) => setDepth(value as number)}
              defaultValue={12}
              className={style.slider}
              max={12}
            />
            <input
              type='color'
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
            <label>Change the color 👆</label>
          </div>
        </div>
      </div>
    </>
  );
}
