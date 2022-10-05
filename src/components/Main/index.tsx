/* eslint-disable @next/next/no-img-element */
import style from './styles.module.scss';
import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import { useRouter } from 'next/router';

export default function Main() {
  const router = useRouter();
  const [distance, setDistance] = useState<number>(5);
  const [color, setColor] = useState<string>('#b2b8c9');

  const Redirect = () => {
    router.push('/tools/neumorphism');
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
            <button
              onClick={() => Redirect()}
              className={style.buttonMain}
            >
              Try it for free 🚀
            </button>
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
                  boxShadow: `${distance}px ${distance}px 38px rgb(${r}, ${g}, ${b}), -${distance}px -${distance}px 38px #f0f8ff`,
                }}
              ></div>
            </div>
            <label>Distance of neumorphism 👇</label>
            <Slider
              value={distance}
              onChange={(e, value) => setDistance(value as number)}
              defaultValue={12}
              className={style.slider}
              max={60}
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
