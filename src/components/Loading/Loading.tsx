import React from 'react';
import styles from './style.module.scss';
import { useTheme } from '@/context/ThemeContext';

const Loading = () => {
  const {theme} = useTheme()
  return (
    <div className={`${theme === 'dark' ? styles.loading : styles.loadingDark}`}></div>
  );
};

export default Loading;
