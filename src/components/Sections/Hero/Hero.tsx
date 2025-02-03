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
      <div className="w-full flex flex-col justify-center items-center leading-10">
        <h1 className="lg:leading-08 text-4xl max-w-3xl lg:text-6xl mt-0 lg:mt-6 gap-5 font-redHat font-extrabold text-center dark:text-white">
          Let&apos;s build{" "}
          <span className={`${styles.textGradient} inline`}>awesome</span> and{" "}
          <span>functional</span>{" "}
          <span className="whitespace-nowrap">
            interface
            <span className={styles.wave}>s</span>
          </span>
        </h1>
        <h3 className="text-slate-800 text-center max-w-xl w-4/5 text-lg mt-3 mb-2 font-semibold font-redHat lg:pr-4 dark:text-white leading-5 lg:leading-6">
          Take advantage of our CSS tools and generators to speed up the styling
          of your components
        </h3>
        <Link href="#generators">
          <span
            className=" font-GilroyMedium text-center rounded-lg mt-2 bg-blue-700 hover:bg-blue-800 px-14 text-white cursor-pointer mx-2   flex gap-2 justify-center items-center"

          >
            Discover All Tools <MdAutoFixHigh size={20} />
          </span>
        </Link>

      </div>
      {/* <Banner /> */}
    </div>
  );
};

export default Hero;
