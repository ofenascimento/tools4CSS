import React, { useState } from 'react';
import style from './styles.module.scss';
import { Slider } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Claymorphism = () => {
  const [blur, setBlur] = useState<number>(0);
  const [color, setColor] = useState<string>('#74757B');
  const [trasnparency, setTransparency] = useState<number>(0.15);
  const [depth, setDepth] = useState<number>(12);
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
    <div className={style.app}>
      <div className={style.background}>
        <div
          className={style.container}
          style={{
            backdropFilter: `blur(${blur}px)`,
            boxShadow: `35px 35px 68px 0px rgba(${r}, ${g}, ${b}, 0.5), inset -${depth}px -${depth}px 16px 0px rgba(${r}, ${g}, ${b}, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)`,
            borderRadius: 12,
            width: '320px',
            height: '320px',
            backgroundColor: `rgba(255, 255, 255, ${trasnparency})`,
          }}
        ></div>
      </div>
      <div className={style.flex}>
        <div className={style.controls}>
          <div className={style.label}>
            <span>Depth</span>
            <span> {depth}</span>
          </div>
          <Slider
            style={{ width: 200, marginLeft: 20, marginRight: 20 }}
            value={depth}
            onChange={(e, value) => setDepth(value as number)}
            className={style.slider}
            max={12}
          />
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
            step={0.1}
            min={0.0}
            max={1}
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
            value={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(255, 255, 255, ${trasnparency}); box-shadow: 35px 35px 68px 0px rgba(${r}, ${g}, ${b}, 0.5), inset -${depth}px -${depth}px 16px 0px rgba(${r}, ${g}, ${b}, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);`}
            readOnly
          ></textarea>
          <br />
          <CopyToClipboard
            text={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(255, 255, 255, ${trasnparency}); box-shadow: 35px 35px 68px 0px rgba(${r}, ${g}, ${b}, 0.5), inset -${depth}px -${depth}px 16px 0px rgba(${r}, ${g}, ${b}, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);`}
          >
            <button onClick={() => Copy()}>{text}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Claymorphism;
