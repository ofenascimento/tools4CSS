import React from 'react';

interface IColorInput {
  value?: string;
  onChange?(e: any): void;
  label?: string;
  preview?: string;
}

const ColorInput = (props: IColorInput) => {
  return (
    <div className='flex gap-4 items-center justify-center' >
      <div>
        <span>{props.label}</span>
      </div>
      <input className=' bg-transparent border-0 rounded-full focus:outline-none cursor-pointer' type='color' onChange={props.onChange} value={props.value} />
      <div>
      {props.preview}
      </div>
    </div>
  );
};

export default ColorInput;
