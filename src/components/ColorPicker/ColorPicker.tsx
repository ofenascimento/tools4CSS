import React, { useState } from "react";
import { ChromePicker, ColorResult, SketchPicker } from "react-color";
import { IColorPicker } from "./types";
import "./ColorPicker.module.scss";

const ColorPicker: React.FC<IColorPicker> = ({ value, onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChangeComplete = (color: ColorResult) => {
    onChange(color.hex);
  };

  return (
    <div className="w-40" style={{ position: "relative" }}>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleClick}
          className=" p-4 rounded-full cursor-pointer"
          style={{
            backgroundColor: value,
          }}
        ></button>
        <div>{value}</div>
      </div>

      {displayColorPicker && (
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            bottom: "100%",
            marginBottom: "10px",
          }}
        >
          <div
            className=" text-black"
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={handleClose}
          />

          <SketchPicker
            styles={{
              default: {
                picker: {
                  background: "#fff",
                  color: "#000",
                },
              },
            }}
            color={value}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
