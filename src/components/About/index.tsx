import style from './styles.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React, { useState } from 'react';

export default function About() {
  const [text, setText] = useState<string>('COPY');
  const [direction, setDirection] = useState<string>('-80deg');
  const Copy = () => {
    setText('COPIED 🎉');
    setTimeout(() => {
      setText('COPY');
    }, 2500);
  };
  return (
    <>
      <div className={style.container} id="works">
        <div className={style.row}>
          <div className={style.about}>
            <h1
              style={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundClip: 'text',
                background: `linear-gradient(${direction}, #096ffe, #ff00dd)`,
              }}
            >
              How it works?
            </h1>
            <p>
            Our tools are designed to help you streamline your code development with dynamic and intuitive CSS generators. Try yourself:
            </p>
            <div className={style.buttonsDirection}>
              <button onClick={() => setDirection('180deg')}>👆</button>
              <button onClick={() => setDirection('380deg')}>👇</button>
              <button onClick={() => setDirection('80deg')}>👈</button>
              <button onClick={() => setDirection('-80deg')}>👉</button>
            </div>
            <p className={style.info}>(change the direcion of gradient)</p>
          </div>
        </div>

        <div className={style.row}>
          <div className={style.cssCopy}>
            <textarea
              className={style.textarea}
              readOnly
              value={`background: linear-gradient(${direction}, #00d0ff, #ff00dd);\nbackground: -webkit-linear-gradient(${direction}, #00d0ff, #ff00dd);\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;`}
            ></textarea>

            <CopyToClipboard
              text={`background: linear-gradient(${direction}, #00d0ff, #ff00dd);\nbackground: -webkit-linear-gradient(${direction}, #00d0ff, #ff00dd);\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;`}
            >
              <button onClick={() => Copy()}>{text}</button>
            </CopyToClipboard>
            <p>Copy the CSS here ⚡️</p>
          </div>
        </div>
      </div>
    </>
  );
}
