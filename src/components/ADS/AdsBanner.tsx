"use client";

import React, { useEffect } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  fixed?: boolean;
  customClassName?: string;
  mobile?: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
  fixed,
  customClassName,
  mobile
}: AdBannerTypes) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <div
      className={`${customClassName} ${mobile ? 'flex' : 'hidden md:flex'} w-full  justify-center items-center relative`}
      style={fixed ? { backgroundColor: "#fff" } : {}}
    >
     
      {/* <p
        className="absolute text-gray-500 text-base font-semibold"
        style={{
          zIndex: 0, 
          opacity: 0.5,
        }}
      >
        Publicidade
      </p> */}

     
      <ins
        className="adsbygoogle bg-gray-50 dark:bg-mainDark rounded-lg"
        style={{
          display: "inline-block",
          width: 728,
          height: 90,
          zIndex: 1, 
        }}
        data-ad-client="ca-pub-2529229033686497"
        data-ad-slot={dataAdSlot}
      ></ins>
    </div>
  );
};

export default AdBanner;
