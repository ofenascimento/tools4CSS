import React from "react";
import Card from "../../Card/Card";
import CSSTools from "./CSSTools";
import CSSGenerators from "./CSSGenerators";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import CSSComponents from "./CSSComponents";

const Tools = () => {
  return (
    <div className="w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4" id="generators">
      <div className="  w-full flex justify-between px-2 lg:px-0 items-center py-8">
        <h1 className="lg:leading-08 text-3xl font-GilroyBold dark:text-white">
          CSS Generators
        </h1>
        <Link href='css-generators' >
          <div className="flex justify-center items-center gap-2 cursor-pointer ">
            <span  className="lg:leading-08 text-base font-GilroyMedium  dark:text-white text-black border-b-2 border-blue-700">
              See All
            </span>
            <div className=" dark:text-white text-black">
              <MdArrowForward />
            </div>
          </div>
        </Link>
      </div>
      <CSSGenerators />

      <div className="  w-full flex justify-between px-2 lg:px-0 items-center py-8">
        <h1 className="lg:leading-08 text-3xl font-GilroyBold dark:text-white">
          CSS Tools
        </h1>
        <Link href='/css-tools' >
          <div className="flex justify-center items-center gap-2 cursor-pointer">
          <span  className="lg:leading-08 text-base font-GilroyMedium  dark:text-white text-black border-b-2 border-blue-700">
              See All
            </span>
            <div className=" dark:text-white text-black">
              <MdArrowForward />
            </div>
          </div>
        </Link>
      </div>
      <CSSTools />

      <div className="  w-full flex justify-between px-2 lg:px-0 items-center py-8">
        <h1 className="lg:leading-08 text-3xl font-GilroyBold dark:text-white">
          CSS Components
        </h1>
        <Link href='/css-components' >
          <div className="flex justify-center items-center gap-2 cursor-pointer">
          <span  className="lg:leading-08 text-base font-GilroyMedium  dark:text-white text-black border-b-2 border-blue-700">
              See All
            </span>
            <div className=" dark:text-white text-black">
              <MdArrowForward />
            </div>
          </div>
        </Link>
      </div>
      <CSSComponents />

    </div>
  );
};

export default Tools;
