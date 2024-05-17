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
        <h1 className="lg:leading-08 text-6xl xl:text-9xl lg:text-8xl flex mt-0 lg:mt-6 gap-5 font-GilroyBold">
          Lets build
        </h1>
        <h1
          className={`lg:leading-08 text-6xl xl:text-9xl lg:text-8xl ${styles.textGradient}`}
        >
          awesome
        </h1>
        <h1 className="lg:leading-08 text-6xl xl:text-9xl lg:text-8xl">
          interfaces
        </h1>
        <h3 className="text-slate-900 text-center text-xl md:text-2xl mt-2 font-GilroyMedium lg:pr-4">
          Take advantage of our tools to speed <br /> up the styling of your
          components
        </h3>
        <style>
          {`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .gradient {
              background-image: linear-gradient(80deg, #000000, #1A4FD8);
              background-size: 400% 400%;
              animation: gradient 10s ease infinite;
            }
          `}
        </style>
        <Link href="https://github.com/gomestzx/tools4CSS">
          <span className="font-EuclidMedium rounded-full px-24 text-white mt-3 cursor-pointer text-center gradient whitespace-nowrap max-w-[400px] w-full">
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
