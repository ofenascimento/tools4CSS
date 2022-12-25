import React from 'react';
import style from './styles.module.scss';
import Switch from 'react-switch';
import CopyButton from '../CopyButton';
import Textarea from '../Textarea';
import { useControls } from '../../hooks/useControls';
import ColorInput from '../ColorInput';
import DirectionButton from '../DirectionButton';

const BackgroundGradient = () => {
  const {
    colorVariant1,
    setColorVariant1,
    colorVariant2,
    setColorVariant2,
    direction,
    setDirection,
    animated,
    setAnimated,
  } = useControls();

  return (
    <div
      className={`${animated ? style.animatedApp : style.app}  `}
      style={{
        backgroundImage: `linear-gradient(${direction}, ${colorVariant1}, ${
          animated ? colorVariant1 + ',' : ''
        } ${colorVariant2} ${animated ? ',' + colorVariant2 : ''})`,
        height: '100vh',
      }}
    >
      <div className={style.background}></div>
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
          <div>
            <div className={style.label}>
              <span>Animation</span>
            </div>
            <div className={style.Icheckbox}>
              <Switch
                checked={animated}
                onChange={(
                  nextChecked: boolean | ((prevState: boolean) => boolean),
                ) => {
                  setAnimated(nextChecked);
                  setDirection('-80deg');
                }}
                className={style.checkbox}
                onColor='#fff'
                onHandleColor='#0f54b4'
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                offColor='#ffffff'
                offHandleColor='#464852'
                activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                height={20}
                width={48}
                id='material-switch'
              />
              {animated ? (
                <div className={style.label}>
                  <span> Use SCSS ⚠️</span>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={style.copy}>
          <Textarea
            height={170}
            value={`background-image: linear-gradient(${direction}, ${colorVariant1}, ${colorVariant2});${
              animated
                ? '\nbackground-size: 400% 400%;\nanimation: gradient 10s ease infinite;\n@keyframes gradient {\n0% { background-position: 0% 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0% 50%; }}'
                : ''
            } `}
          />
          <CopyButton
            textToCopy={`background-image: linear-gradient(${direction}, ${colorVariant1}, ${colorVariant2});${
              animated
                ? '\nbackground-size: 400% 400%;\nanimation: gradient 10s ease infinite;\n@keyframes gradient {\n0% { background-position: 0% 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0% 50%; }}'
                : ''
            } `}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundGradient;
