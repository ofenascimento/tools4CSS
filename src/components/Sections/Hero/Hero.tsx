import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import StarButton from "../../StarButton/StarButton";
import Banner from "../../Banner/Banner";
import { MdArrowRightAlt, MdAutoFixHigh } from "react-icons/md";

const Hero = () => {
  return (
    <div
      className="w-full md:w-5/6 lg:w-4/6 mt-4 md:mt-0 mx-auto flex justify-center items-center flex-wrap px-2"
      id="hero"
    >
      <div className="w-full flex flex-col justify-center items-center leading-10 font-GilroyBold">
        <h1 className="lg:leading-08 text-6xl lg:text-7xl mt-0 lg:mt-6 gap-5 font-GilroyBold text-center dark:text-white">
          Let&apos;s build{" "}
          <span className={`${styles.textGradient} inline`}>awesome</span> and{" "}
          <span>functional</span>{" "}
          <span className="whitespace-nowrap">
            interface
            <span className={styles.wave}>s</span>
          </span>
        </h1>
        <h3 className="text-slate-800 text-center w-4/5 text-xl md:text-2xl mt-5 mb-2 font-DMSans font-light lg:pr-4 dark:text-white lg:leading-6">
          Take advantage of our CSS tools and generators to speed up the styling
          of your components
        </h3>
        {/* <Link href="#generators">
          <span
            className=" font-GilroyMedium text-center rounded-lg mt-4 bg-blue-700 hover:bg-blue-800 px-24 text-white cursor-pointer mx-2   flex gap-2 justify-center items-center"

          >
            Discover All Tools <MdAutoFixHigh size={20} />
          </span>
        </Link> */}
        <button
          onClick={() => window.location.hash = '#generators'}
          className="group cursor-pointer font-light mt-4 border-none outline-none bg-black dark:bg-transparent"
          style={{
            fontSize: '17px',
            borderRadius: '0.75em',
          }}
        >
          <span
            className="box-border border-2 dark:border-0 flex justify-center items-center gap-2 
               border-black px-24 bg-blue-700 text-white 
               transition-transform duration-100 ease transform 
               -translate-y-[0.2em] 
               group-hover:-translate-y-[0.33em] dark:group-hover:-translate-y-[0.2em]
               group-active:translate-y-0 
               font-GilroyMedium font-light text-base py-2"
            style={{
              borderRadius: '0.75em'
            }}
          >
            Discover All Tools <MdAutoFixHigh size={20} />
          </span>
        </button>

      </div>
      <Banner />
    </div>
  );
};

export default Hero;
