import React, { ReactNode, useState, useRef, useEffect } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [visible, setVisible] = useState(false);
  const [tooltipStyles, setTooltipStyles] = useState({});
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setTooltipStyles({
          top: rect.bottom + window.scrollY,
          left: rect.left + rect.width / 2,
        });
        setVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('mouseenter', handleMouseEnter);
      currentRef.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseenter', handleMouseEnter);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className={styles.tooltip} ref={ref}>
      {children}
      {visible && (
        <div
          className={`${styles['tooltip-content']} font-EuclidRegular text-sm`}
          style={tooltipStyles}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
