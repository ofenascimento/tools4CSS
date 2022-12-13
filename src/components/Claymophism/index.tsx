import React from 'react';
import style from './styles.module.scss';
import { Slider } from '@material-ui/core';
import { useControls } from '../../hooks/useControls';
import { hexToRgb } from '../../utils/hexToRGB';
import CopyButton from '../CopyButton';
import Textarea from '../Textarea';

const Claymorphism = () => {
  const { trasnparency, setTransparency, color, setColor, depth, setDepth } =
    useControls();

  const r = hexToRgb(color)?.r;
  const g = hexToRgb(color)?.g;
  const b = hexToRgb(color)?.b;

  return (
    <div className={style.app}>
      <div className={style.background}>
        <div
          className={style.container}
          style={{
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
          <Textarea
            height={120}
            value={`background-color: rgba(255, 255, 255, ${trasnparency}); box-shadow: 35px 35px 68px 0px rgba(${r}, ${g}, ${b}, 0.5), inset -${depth}px -${depth}px 16px 0px rgba(${r}, ${g}, ${b}, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);`}
          />
          <CopyButton
            textToCopy={`background-color: rgba(255, 255, 255, ${trasnparency}); box-shadow: 35px 35px 68px 0px rgba(${r}, ${g}, ${b}, 0.5), inset -${depth}px -${depth}px 16px 0px rgba(${r}, ${g}, ${b}, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);`}
          />
        </div>
      </div>
    </div>
  );
};

export default Claymorphism;
