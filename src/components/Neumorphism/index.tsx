import React, { useEffect, useState } from 'react';
import style from './styles.module.scss';
import { Slider } from '@material-ui/core';
import { useControls } from '../../hooks/useControls';
import CopyButton from '../CopyButton';
import Textarea from '../Textarea';

const Neumorphism = () => {
  const {
    blur,
    setBlur,
    borderRadius,
    setBorderRadius,
    distance,
    setDistance,
  } = useControls();

  return (
    <div className={style.app}>
      <div className={style.background}>
        <div
          className={style.container}
          style={{
            width: '300px',
            height: '320px',
            borderRadius: `${borderRadius}px`,
            boxShadow: `${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff`,
          }}
        ></div>
      </div>
      <div className={style.flex}>
        <div className={style.controls}>
          <div className={style.label}>
            <span>Distance</span>
            <span> {distance}</span>
          </div>
          <Slider
            style={{ width: 200, marginLeft: 20, marginRight: 20 }}
            value={distance}
            onChange={(e, value) => setDistance(value as number)}
            defaultValue={30}
            className={style.slider}
            max={60}
          />
          <div className={style.label}>
            <span>Blur</span>
            <span> {blur}</span>
          </div>
          <Slider
            style={{ width: 200, marginLeft: 20, marginRight: 20 }}
            value={blur}
            onChange={(e, value) => setBlur(value as number)}
            defaultValue={30}
            className={style.slider}
          />

          <div className={style.label}>
            <span>Border Radius</span>
            <span> {borderRadius}</span>
          </div>
          <Slider
            style={{ width: 200, marginLeft: 20, marginRight: 20 }}
            value={borderRadius}
            onChange={(e, value) => setBorderRadius(value as number)}
            defaultValue={30}
            className={style.slider}
            max={60}
          />
        </div>
        <div className={style.cssCopy}>
          <Textarea
            height={120}
            value={`box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\n-webkit-box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\nborder-radius: ${borderRadius}px;`}
          />
          <CopyButton
            textToCopy={`box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\n-webkit-box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\nborder-radius: ${borderRadius}px;`}
          />
        </div>
      </div>
    </div>
  );
};

export default Neumorphism;
