import React from 'react';
import styles from './styles.module.scss';

interface IColorInput {
  value: string;
  onChange(e: any): void;
  label: string;
  preview: string;
}

const ColorInput = (props: IColorInput) => {
  return (
    <div className={styles.colorInput}>
      <div className={styles.label}>
        <span>{props.label}</span>
        {props.preview}
      </div>
      <input type='color' onChange={props.onChange} value={props.value} />
    </div>
  );
};

export default ColorInput;
