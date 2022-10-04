import React, { useState } from 'react';
import style from './styles.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Switch from 'react-switch';

const BackgroundGradient = () => {
  const [color1, setColor1] = useState<string>('#12C2E9');
  const [color2, setColor2] = useState<string>('#d954c8');
  const [animated, setAnimated] = useState(false);
  const [direction, setDirection] = useState<string>('to top');
  const [text, setText] = useState<string>('COPY');
  const Copy = () => {
    setText('COPIED 🎉');
    setTimeout(() => {
      setText('COPY');
    }, 2500);
  };

  const handleChange = (
    nextChecked: boolean | ((prevState: boolean) => boolean),
  ) => {
    setAnimated(nextChecked);
    setDirection('-80deg');
  };

  return (
    <div
      className={`${animated ? style.animatedApp : style.app}  `}
      style={{
        backgroundImage: `linear-gradient(${direction}, ${color1}, ${
          animated ? color1 + ',' : ''
        } ${color2} ${animated ? ',' + color2 : ''})`,
        height: '100vh',
      }}
    >
      <div className={style.background}></div>
      <div className={style.flex}>
        <div className={style.controls}>
          <div>
            <div className={style.label}>
              {color1}
              <span>Color 1</span>
            </div>
            <input
              type='color'
              onChange={(e) => setColor1(e.target.value)}
              value={color1}
            />
          </div>
          <div>
            <div className={style.label}>
              {color2}
              <span>Color 2</span>
            </div>
            <input
              type='color'
              onChange={(e) => setColor2(e.target.value)}
              value={color2}
            />
          </div>
          <div className={style.directions}>
            <div className={style.label}>
              <span>Directions </span>
            </div>
            {animated ? (
              <></>
            ) : (
              <>
                {' '}
                <button onClick={() => setDirection('180deg')}>👆</button>
                <button onClick={() => setDirection('380deg')}>👇</button>
              </>
            )}

            <button onClick={() => setDirection('80deg')}>👈</button>
            <button onClick={() => setDirection('-80deg')}>👉</button>
          </div>
          <div>
            <div className={style.label}>
              <span>Animation</span>
            </div>
            <div className={style.Icheckbox}>
              <Switch
                checked={animated}
                onChange={handleChange}
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
        <div className={style.cssCopy}>
          <textarea
            className={style.textarea}
            value={`background-image: linear-gradient(${direction}, ${color1}, ${color2});${
              animated
                ? '\nbackground-size: 400% 400%;\nanimation: gradient 15s ease infinite;\n@keyframes gradient {\n0% { background-position: 0% 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0% 50%; }}'
                : ''
            } `}
            readOnly
          ></textarea>
          <br />
          <CopyToClipboard
            text={`background-image: linear-gradient(${direction}, ${color1}, ${color2});${
              animated
                ? '\nbackground-size: 400% 400%;\nanimation: gradient 15s ease infinite;\n@keyframes gradient {\n0% { background-position: 0% 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0% 50%; }}'
                : ''
            } `}
          >
            <button onClick={() => Copy()}>{text}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default BackgroundGradient;
