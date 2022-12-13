import React, { useState } from 'react';
import style from './styles.module.scss';
import { Slider } from '@material-ui/core';
import { useControls } from '../../hooks/useControls';
import { hexToRgb } from '../../utils/hexToRGB';
import CopyButton from '../CopyButton';
import Textarea from '../Textarea';

const Glassmorphism = () => {
  const [color, setColor] = useState<string>('#8ed1fc');
  const [trasnparency, setTransparency] = useState<number>(0.15);

  const r = hexToRgb(color)?.r;
  const g = hexToRgb(color)?.g;
  const b = hexToRgb(color)?.b;

  const { blur, setBlur } = useControls();

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
          <Textarea
            height={100}
            value={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`}
          />
          <CopyButton
            textToCopy={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`}
          />
        </div>
      </div>
    </div>
  );
};

export default Glassmorphism;
