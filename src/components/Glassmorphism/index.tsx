import React, { useState } from 'react';
import style from './styles.module.scss';
import { Slider } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Glassmorphism = () => {
  const [blur, setBlur] = useState<number>(3);
  const [color, setColor] = useState<string>('#8ed1fc');
  const [trasnparency, setTransparency] = useState<number>(0.15);
  const [text, setText] = useState<string>('COPY');
  const Copy = () => {
    setText('COPIED 🎉');
    setTimeout(() => {
      setText('COPY');
    }, 2500);
  };

  interface IHexToRGBA {
    m: string;
    r: string;
    g: string;
    b: string;
  }

  function hexToRgb(hex: any) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function ({ m, r, g, b }: IHexToRGBA) {
      return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
    <div className={style.app}>
      <div className={style.background}>
        <div
          className={style.container}
          style={{
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            borderRadius: 12,
            width: '300px',
            height: '320px',
            backgroundColor: `rgba(${r}, ${g}, ${b}, ${trasnparency})`,
          }}
        ></div>
      </div>
      <div className={style.flex}>
        <div className={style.controls}>
          <div className={style.label}>
            <span>Blur</span>
            <span> {blur}</span>
          </div>
          <Slider
            value={blur}
            onChange={(e, value) => setBlur(value as number)}
            defaultValue={30}
            className={style.slider}
          />
          <div className={style.label}>
            <span>Transparency</span>
            <span> {trasnparency}</span>
          </div>
          <Slider
            style={{ width: 200, marginLeft: 20, marginRight: 20 }}
            value={trasnparency}
            onChange={(e, value) => setTransparency(value as number)}
            className={style.slider}
            step={0.05}
            min={0.0}
            max={0.99}
          />
          <div className={style.flexColor}>
            <div>
              <div className={style.label}>
                <span>Color</span>
                {color}
              </div>
              <input
                type='color'
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
            </div>
          </div>
        </div>
        <div className={style.cssCopy}>
          <textarea
            className={style.textarea}
            value={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`}
            readOnly
          ></textarea>
          <br />
          <CopyToClipboard
            text={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`}
          >
            <button onClick={() => Copy()}>{text}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Glassmorphism;
