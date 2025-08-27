"use client";

import React, { useEffect, useRef, useState } from "react";

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
}: AdBannerTypes): JSX.Element | null => {
  const insRef = useRef<HTMLModElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [adUnfilled, setAdUnfilled] = useState(false);

  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (error: any) {
      console.log(error.message);
    }

    const observer = new MutationObserver(() => {
      const adsbygoogleStatus = insRef.current?.getAttribute("data-adsbygoogle-status");
      if (adsbygoogleStatus === "done") {
        const adStatus = insRef.current?.getAttribute("data-ad-status");
        setAdUnfilled(adStatus === "unfilled");
        setIsLoading(false);
      }
    });

    if (insRef.current) {
      observer.observe(insRef.current, {
        attributes: true,
        attributeFilter: ["data-adsbygoogle-status", "data-ad-status"],
      });
    }

    return () => observer.disconnect();
  }, []);

  if (adUnfilled) return null;

  return (
    <div
      className={`${customClassName || ""} ${mobile ? 'flex' : 'hidden md:flex'} w-full justify-center items-center relative`}
      style={fixed ? { backgroundColor: "#fff" } : {}}
    >
      <ins
        ref={insRef}
        className={`adsbygoogle bg-gray-50 dark:bg-mainDark rounded-lg relative ${isLoading ? "animate-pulse" : ""}`}
        style={{
          display: "inline-block",
          width: 728,
          height: 90,
          zIndex: 1
        }}
        data-ad-client="ca-pub-2529229033686497"
        data-ad-slot={dataAdSlot}
      >
        {isLoading && (
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100 text-base font-semibold opacity-60">
                Anúncio
          </p>
        )}
      </ins>
    </div>
  );
};

export default AdBanner;
