import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { IColorPicker } from "./types";

const ColorPicker: React.FC<IColorPicker> = ({ value, onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    if (newValue.length === 6 && !newValue.startsWith("#")) {
      newValue = "#" + newValue;
    }
    onChange(newValue);
  };

  return (
    <div className=" w-36 relative">
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleClick}
          className="p-4 rounded-full cursor-pointer"
          style={{
            backgroundColor: value,
          }}
        ></button>
        <input
          onChange={handleInputChange}
          value={value}
          className="bg-transparent w-16"
        />
      </div>

      {displayColorPicker && (
        <div className="absolute z-20 bottom-full mb-2 w-full max-w-xs">
          <div
            className="fixed inset-0"
            onClick={handleClose}
          />
          <div className="p-2 rounded">
            <HexColorPicker color={value} onChange={onChange} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
