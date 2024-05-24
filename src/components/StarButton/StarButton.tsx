import Link from "next/link";
import React from "react";
import styles from './styles.module.scss'
import { useTheme } from "../../context/ThemeContext";


const StarButton = () => {
  const {theme} = useTheme()
  return (
    <>
      <Link href="https://github.com/gomestzx/tools4CSS">
          <span className={`${theme === 'dark' ? styles.gradientButtonDark : styles.gradientButton} font-GilroyMedium rounded-full px-2 text-white mt-3 cursor-pointer text-center whitespace-nowrap max-w-[400px] w-full`}>
            ⭐ Give it a star on GitHub!
          </span>
        </Link>
    </>
  );
};

export default StarButton;
