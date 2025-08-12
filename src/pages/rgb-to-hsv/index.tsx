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

function rgbToHsv(r: number, g: number, b: number) {
    const rPrime = r / 255;
    const gPrime = g / 255;
    const bPrime = b / 255;

    const max = Math.max(rPrime, gPrime, bPrime);
    const min = Math.min(rPrime, gPrime, bPrime);
    const delta = max - min;

    let h = 0;
    let s = 0;
    const v = max;

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
    }

    s = max === 0 ? 0 : delta / max;

    return `hsv(${h}, ${Math.round(s * 100)}%, ${Math.round(v * 100)}%)`;
}

const RgbToHsvConverter = () => {
    // Default value corresponds to rgb(29, 78, 216) which converts to hsv(224, 87%, 85%)
    const [inputRgb, setInputRgb] = useState("rgb(29, 78, 216)");
    const [rgbValue, setRgbValue] = useState("rgb(29, 78, 216)");
    const [hsvValue, setHsvValue] = useState("hsv(224, 87%, 85%)");

    const handleRgbInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputRgb(event.target.value);
    };

    const convertColor = () => {
        let input = inputRgb.trim();

        // Remove "rgb(" and ")" if present, then split by commas
        let cleaned = input.replace(/rgb\(/gi, "").replace(/\)/g, "");
        let parts = cleaned.split(",").map((part) => part.trim());

        if (parts.length !== 3) {
            setRgbValue("Invalid");
            setHsvValue("Invalid");
            return;
        }

        let r = parseInt(parts[0]);
        let g = parseInt(parts[1]);
        let b = parseInt(parts[2]);

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            setRgbValue("Invalid");
            setHsvValue("Invalid");
            return;
        }

        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
            setRgbValue("Invalid");
            setHsvValue("Invalid");
            return;
        }

        const normalizedRgb = `rgb(${r}, ${g}, ${b})`;
        const hsv = rgbToHsv(r, g, b);

        setRgbValue(normalizedRgb);
        setHsvValue(hsv);
    };

    const { isFavorited, handleFavorite } = useFavoriteTool("RGB to HSV Converter");

    return (
        <>
            <SEO title="RGB to HSV Converter" />
            <div className="w-full lg:w-4/6 mx-auto font-medium">
                <div className="flex flex-row justify-between items-center mx-4 lg:mx-0">
                    <Breadcrumb
                        links={[{ href: "/", label: "Home" }, { label: "RGB to HSV Converter" }]}
                    />
                    <FavoriteButton isFavorited={isFavorited} handleFavorite={handleFavorite} />
                </div>

                <Title
                    title="RGB to HSV Converter"
                    info="Convert an RGB value to its HSV representation"
                />

                <AdBanner customClassName="mt-4" dataAdSlot='9079575448' />
                <AdBannerMobile dataAdSlot='6317680736' />

                <div className="w-auto md:w-full mt-4 mx-4 lg:mx-0">
                    <Textarea
                        customClassName="h-14"
                        placeholder="Enter the RGB value here (e.g., rgb(29, 78, 216) or 29, 78, 216)"
                        value={inputRgb}
                        onChange={handleRgbInput}
                    />
                </div>

                <div className="mx-4 lg:mx-0 mt-2">
                    <Button text="Convert" onClick={convertColor} />
                </div>
                {(rgbValue || hsvValue) && (
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
                                    <td className="py-2">RGB</td>
                                    <td className="py-2">{rgbValue}</td>
                                    <td className="py-2">
                                        <code className="px-1 rounded bg-gray-100 dark:bg-neutral-800">
                                            background-color: {rgbValue};
                                        </code>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2">HSV</td>
                                    <td className="py-2">{hsvValue}</td>
                                    <td className="py-2">
                                        <code className="px-1 rounded bg-gray-100 dark:bg-neutral-800">
                                            background-color: {hsvValue};
                                        </code>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}


                <AdBanner customClassName="mt-4" dataAdSlot='9079575448' />
                <AdBannerMobile dataAdSlot='6317680736' />

                <Info title="What is RGB to HSV Conversion?" paragraph={<>  RGB to HSV conversion is an essential process for designers and developers working with color.
                    <br /><br />
                    In this conversion, an RGB color value—where each channel (red, green, and blue) is represented by a number between 0 and 255—is transformed into the HSV format, which stands for Hue, Saturation, and Value.
                    <br /><br />
                    HSV provides an alternative representation that is often more intuitive for adjusting color properties like brightness and vibrancy. For example, by modifying the 'Value' in HSV, you can easily create darker or lighter variations of the same color.
                    <br /><br />
                    Overall, understanding RGB to HSV conversion empowers you to work more effectively with color, ensuring consistent and dynamic designs across various applications.</>} />
            </div>
        </>
    );
};

export default RgbToHsvConverter;
