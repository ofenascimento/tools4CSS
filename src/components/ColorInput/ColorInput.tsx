import React, { useRef } from 'react';

interface IColorInput {
  value?: string;
  onChange?(e: any): void;
  label?: string;
  preview?: string;
}

const ColorInput = ({ value, onChange, label, preview }: IColorInput) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='flex gap-4 items-center justify-center relative'>
      <div>
        <span>{label}</span>
      </div>
      <div
        className='w-8 h-8 rounded-full cursor-pointer'
        style={{ backgroundColor: value }}
        onClick={() => inputRef.current!.click()}
      >
        <input
          ref={inputRef}
          type='color'
          onChange={onChange}
          value={value}
          className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
        />
      </div>
      <div>
        <span>{preview}</span>
      </div>
    </div>
  );
};

export default ColorInput;
