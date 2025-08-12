import React, { useState } from "react";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";
import AdBanner from "@/components/ADS/AdsBanner";
import AdBannerMobile from "@/components/ADS/AdsBannerMobile";

// Helper function: Convert Hex to RGB object
function hexToRgb(hexString: string) {
  let hex = hexString.trim().replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (hex.length !== 6) {
    return null;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  if ([r, g, b].some((val) => isNaN(val))) {
    return null;
  }

  return { r, g, b };
}

// Helper function: Convert RGB to HSL string
function rgbToHsl(r: number, g: number, b: number) {
  const rPrime = r / 255;
  const gPrime = g / 255;
  const bPrime = b / 255;

  const max = Math.max(rPrime, gPrime, bPrime);
  const min = Math.min(rPrime, gPrime, bPrime);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    if (max === rPrime) {
      h = ((gPrime - bPrime) / delta) % 6;
    } else if (max === gPrime) {
      h = (bPrime - rPrime) / delta + 2;
    } else {
      h = (rPrime - gPrime) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;

    s = delta / (1 - Math.abs(2 * l - 1));
  }

  const hStr = h;
  const sStr = Math.round(s * 100);
  const lStr = Math.round(l * 100);

  return `hsl(${hStr}, ${sStr}%, ${lStr}%)`;
}

const HexToHslConverter = () => {
  // Initialize state with default value "#1D4ED8" and its corresponding HSL
  const [inputHex, setInputHex] = useState("#1D4ED8");
  const [hexValue, setHexValue] = useState("#1D4ED8");
  const [hslValue, setHslValue] = useState("hsl(224, 76%, 48%)");

  const handleHexInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputHex(event.target.value);
  };

  const convertColor = () => {
    const rgbObj = hexToRgb(inputHex);

    if (!rgbObj) {
      setHexValue("Invalid");
      setHslValue("Invalid");
      return;
    }

    const { r, g, b } = rgbObj;

    let normalizedHex = inputHex.trim();
    if (!normalizedHex.startsWith("#")) {
      normalizedHex = "#" + normalizedHex;
    }
    if (normalizedHex.length === 4) {
      normalizedHex =
        "#" +
        normalizedHex
          .slice(1)
          .split("")
          .map((char) => char + char)
          .join("");
    }

    setHexValue(normalizedHex);
    setHslValue(rgbToHsl(r, g, b));
  };

  const { isFavorited, handleFavorite } = useFavoriteTool("Hex to HSL Converter");

  return (
    <>
      <SEO title="Hex to HSL Converter" />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className="flex flex-row justify-between items-center mx-4 lg:mx-0">
          <Breadcrumb
            links={[{ href: "/", label: "Home" }, { label: "Hex to HSL Converter" }]}
          />
          <FavoriteButton isFavorited={isFavorited} handleFavorite={handleFavorite} />
        </div>

        <Title
          title="Hex to HSL Converter"
          info="Convert a hexadecimal color code to its HSL representation"
        />

        <AdBanner customClassName="mt-4" dataAdSlot='9079575448' />
        <AdBannerMobile dataAdSlot='6317680736' />

        <div className="w-auto md:w-full mt-4 mx-4 lg:mx-0">
          <Textarea
            customClassName="h-14"
            placeholder="Enter the Hex code here (e.g., #1D4ED8)"
            value={inputHex}
            onChange={handleHexInput}
          />
        </div>

        <div className="mx-4 lg:mx-0 mt-2">
          <Button text="Convert" onClick={convertColor} />
        </div>

        {(hexValue || hslValue) && (
          <div className="rounded-md border p-4 mt-6 mx-4 lg:mx-0 bg-white text-gray-900 border-gray-300 dark:bg-mainDark dark:text-white dark:border-gray-600">
            <h2 className="text-xl font-bold mb-4">Conversions</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 font-medium">CODE</th>
                  <th className="py-2 font-medium">VALUE</th>
                  <th className="py-2 font-medium">HTML/CSS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2">Hex</td>
                  <td className="py-2">{hexValue}</td>
                  <td className="py-2">
                    <code className="px-1 rounded bg-gray-100 dark:bg-neutral-800">
                      background-color: {hexValue};
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">HSL</td>
                  <td className="py-2">{hslValue}</td>
                  <td className="py-2">
                    <code className="px-1 rounded bg-gray-100 dark:bg-neutral-800">
                      background-color: {hslValue};
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}


        <AdBanner customClassName="mt-4" dataAdSlot='9079575448' />
        <AdBannerMobile dataAdSlot='6317680736' />

        <Info title="What is Hex to HSL Conversion?" paragraph={<> Hex to HSL conversion is a valuable process for designers and developers working with web colors.
          <br />
          <br />
          A hexadecimal color code (such as <strong>#1D4ED8</strong>) compactly represents colors using red, green, and blue components. Converting this hex value to the HSL (Hue, Saturation, Lightness) format separates the color’s tint from its vibrancy and brightness.
          <br />
          <br />
          This conversion is especially useful for adjusting color schemes, creating consistent design patterns, and dynamically styling CSS. With HSL, it's easier to modify the lightness or saturation without altering the fundamental hue.
          <br />
          <br />
          In summary, mastering Hex to HSL conversion empowers you to work more intuitively with colors, ensuring your designs are both visually appealing and functionally consistent.</>} />

      </div>
    </>
  );
};

export default HexToHslConverter;
