import React from "react";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@mui/styles";
import { useTheme } from "../../context/ThemeContext";
import { ICustomSlider } from "./types";

const useStyles = makeStyles({
  thumb: {
    backgroundColor: "#fff",
  },
  rail: {
    backgroundColor: "#fff",
  },
  track: {
    backgroundColor: "#fff",
  },
});

const CustomSlider = (props: ICustomSlider) => {
  const { theme } = useTheme();
  const classes = useStyles();

  return (
    <Slider
      sx={{
        color: theme === "dark" ? "#2563eb" : "#2563eb", 
      }}
      classes={theme === "dark" ? classes : undefined}
      {...props}
      onChange={(event: any, value: any) => {
        if (props.onChange) {
          props.onChange(event, value);
        }
      }}
    />
  );
};

export default CustomSlider;
