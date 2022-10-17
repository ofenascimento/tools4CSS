import React, { useState } from 'react';
import style from './styles.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Switch from 'react-switch';

const TextGradiemt = () => {
  const [color1, setColor1] = useState<string>('#00d0ff');
  const [color2, setColor2] = useState<string>('#ff00dd');
  const [direction, setDirection] = useState<string>('-80deg');
  const [animated, setAnimated] = useState(false);
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
    <div className={style.app}>
      <div className={style.background}>
        <div className={style.container}>
          <h1
            className={`${animated ? style.animated : style.textGradient}  `}
            style={{
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundClip: 'text',
              background: `linear-gradient(${direction}, ${color1}, ${
                animated ? color1 + ',' : ''
              } ${color2} ${animated ? ',' + color2 : ''})`,
            }}
          >
            Tools4CSS
          </h1>
        </div>
      </div>
      <div className={style.flex}>
        <div className={style.controls}>
          <div>
            <div className={style.label}>
              <span>Color 1</span>
              {color1}
            </div>
            <input
              type='color'
              onChange={(e) => setColor1(e.target.value)}
              value={color1}
            />
          </div>
          <div>
            <div className={style.label}>
              <span>Color 2</span>
              {color2}
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
            value={`background: linear-gradient(${direction}, ${color1}, ${
              animated ? color1 + ',' : ''
            } ${color2}${
              animated ? ', ' + color2 : ''
            });\nbackground: -webkit-linear-gradient(${direction}, ${color1}, ${
              animated ? color1 + ',' : ''
            } ${color2}${
              animated ? ', ' + color2 : ''
            });\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;\n${
              animated
                ? 'background-size: 300% !important;\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\nanimation: animated_text 10s ease-in-out infinite;\n-moz-animation: animated_text 10s ease-in-out infinite;\n-webkit-animation: animated_text 10s ease-in-out infinite;\n@keyframes animated_text {\n0% { background-position: 0px 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0px 50%; }} '
                : ''
            }`}
            readOnly
          ></textarea>
          <br />
          <CopyToClipboard
            text={`background: linear-gradient(${direction}, ${color1}, ${
              animated ? color1 + ',' : ''
            } ${color2}${
              animated ? ', ' + color2 : ''
            });\nbackground: -webkit-linear-gradient(${direction}, ${color1}, ${
              animated ? color1 + ',' : ''
            } ${color2}${
              animated ? ', ' + color2 : ''
            });\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;\n${
              animated
                ? 'background-size: 300% !important;\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\nanimation: animated_text 10s ease-in-out infinite;\n-moz-animation: animated_text 10s ease-in-out infinite;\n-webkit-animation: animated_text 10s ease-in-out infinite;\n@keyframes animated_text {\n0% { background-position: 0px 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0px 50%; }} '
                : ''
            }`}
          >
            <button onClick={() => Copy()}>{text}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default TextGradiemt;
