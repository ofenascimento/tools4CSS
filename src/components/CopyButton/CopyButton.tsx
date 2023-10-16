import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

interface ICopyButton {
  textToCopy: string;
}

const CopyButton = (props: ICopyButton) => {
  const [text, setText] = useState<string>('COPY');
  const Copy = () => {
    setText('COPIED 🎉');
    setTimeout(() => {
      setText('COPY');
    }, 2500);
  };
  return (
    <>
      <CopyToClipboard text={props.textToCopy}>
        <button className=' bg-blue-700 w-full text-white py-2' onClick={() => Copy()}>
          {text}
        </button>
      </CopyToClipboard>
    </>
  );
};

export default CopyButton;
