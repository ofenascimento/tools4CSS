import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="w-full lg:w-4/6 mx-auto flex justify-center items-center flex-wrap px-2"
      id="hero"
    >
      <div className="w-full flex flex-col justify-center items-center leading-10 font-GilroyBold">
        <h1 className="lg:leading-08 text-6xl xl:text-8xl lg:text-7xl mt-0 lg:mt-6 gap-5 font-GilroyBold text-center">
          Let&apos;s build{" "}
          <span className={`${styles.textGradient} inline`}>awesome</span> and{" "}
          <span className={styles.underlineGradient}>functional</span> interface
          <span className={styles.wave}>s</span>
        </h1>
        <h3 className="text-slate-900 text-center w-4/5 text-xl md:text-2xl mt-2 font-GilroyMedium lg:pr-4">
          Take advantage of our CSS tools and generators to speed up the styling
          of your components
        </h3>
        <Link href="https://github.com/gomestzx/tools4CSS">
          <span className={`${styles.gradientButton} font-EuclidMedium rounded-full px-2 text-white mt-3 cursor-pointer text-center whitespace-nowrap max-w-[400px] w-full`}>
            ⭐ Give it a star on GitHub!
          </span>
        </Link>
        <Link href="#generators">
          <span
            className="font-EuclidMedium text-center rounded-full px-24 text-white mt-1 cursor-pointer mx-8 max-w-[400px] w-full"
            style={{
              backgroundColor: "#1A4FD8",
            }}
          >
            Discover All Tools
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
