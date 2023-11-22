import clsx from 'clsx';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { IconDefinition, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { ICopyButton } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge';

const CopyButton = (props: ICopyButton) => {
  const [text, setText] = useState<string>(props.initialText ?? 'COPY');
  const [icon, setIcon] = useState<IconDefinition>(faCopy);

  const Copy = () => {
    if (props.withIcon) {
      setIcon(faCheck);
      setTimeout(() => {
        setIcon(faCopy);
      }, 2000);
    }
    setText(props.copiedText ?? 'COPIED 🎉');
    setTimeout(() => {
      setText(props.initialText ?? 'COPY');
    }, 2500);
  };
  return (
    <>
      <CopyToClipboard text={props.textToCopy}>
        <button className={twMerge(clsx('bg-blue-700 w-full text-white py-2', props.className))} onClick={() => Copy()}>
          {props.withIcon ? <FontAwesomeIcon icon={icon} /> : <span className={props.textClassName}>{text}</span>}
        </button>
      </CopyToClipboard>
    </>
  );
};

export default CopyButton;
