import React from 'react';
import style from './styles.module.scss';
import CopyButton from '../CopyButton';
import Textarea from '../Textarea';
import { useControls } from '../../hooks/useControls';
import ColorInput from '../ColorInput';
import DirectionButton from '../DirectionButton';

const UnderlineGradient = () => {
  const { colorVariant1, setColorVariant1, colorVariant2, setColorVariant2, direction } =
    useControls();

  return (
    <div className={style.app}>
      <div className={style.background}>
        <div className={style.container}>
          <h1
            style={{
              backgroundImage: `linear-gradient(${direction}, ${colorVariant1},${colorVariant2} 100%)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 0.3em',
              backgroundPosition: '0 80%',
            }}
          >
            Tools4CSS
          </h1>
        </div>
      </div>
      <div className={style.flex}>
        <div className={style.controls}>
          <ColorInput
            label='Color 1'
            preview={colorVariant1}
            onChange={(e) => setColorVariant1(e.target.value)}
            value={colorVariant1}
          />
          <ColorInput
            label='Color 2'
            preview={colorVariant2}
            onChange={(e) => setColorVariant2(e.target.value)}
            value={colorVariant2}
          />
          <DirectionButton />
        </div>
        <div className={style.copy}>
          <Textarea
            height={120}
            value={`background-image: linear-gradient(${direction}, ${colorVariant1},${colorVariant2} 100%); \n background-repeat: no-repeat; \n background-size: 100% 0.3em; \n background-position: 0 80%;`}
          />
          <CopyButton textToCopy={`background-image: linear-gradient(${direction}, ${colorVariant1},${colorVariant2} 100%); \n background-repeat: no-repeat; \n background-size: 100% 0.3em; \n background-position: 0 80%;`} />
        </div>
      </div>
    </div>
  );
};

export default UnderlineGradient;
