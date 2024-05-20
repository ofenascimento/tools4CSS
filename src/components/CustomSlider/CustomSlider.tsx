import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider, { SliderProps } from "@material-ui/core/Slider";
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

const CustomSlider = (props: ICustomSlider ) => {
  const { theme } = useTheme();
  const classes = useStyles();

  return <Slider
  classes={theme === "dark" ? classes : undefined}
  {...props}
  onChange={(event: any, value: any) => {
    if (props.onChange) {
      props.onChange(event, value);
    }
  }}
/>;
};

export default CustomSlider;
