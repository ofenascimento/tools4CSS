import React, { useState } from "react";
import styles from "./Tooltip.module.scss";
import { ITooltip } from "./types";

const Tooltip = ({ children, text }: ITooltip) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
};

export default Tooltip;
