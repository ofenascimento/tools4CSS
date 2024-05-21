import React from "react";
import { IControlsContainer } from "./types";

const ControlsContainer: React.FC<IControlsContainer> = ({ children }) => {
  return (
    <div className="border border-slate-300 rounded-md shadow-sm bg-white p-4 text-gray-700 mt-4 flex flex-wrap justify-center items-center gap-6 font-EuclidRegular mx-4 lg:mx-0 dark:bg-mainDark dark:text-white dark:border-slate-600">
      {children}
    </div>
  );
};

export default ControlsContainer;
