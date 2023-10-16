import React from 'react';
import styles from './styles.module.scss'
interface ITextarea {
  value: string;
  height?: number;
}

const Textarea = (props: ITextarea) => {
  return (
    <>
      <textarea value={props.value} readOnly className={styles.textarea} style={{height: `${props.height}px`}}></textarea>
    </>
  );
};

export default Textarea;
