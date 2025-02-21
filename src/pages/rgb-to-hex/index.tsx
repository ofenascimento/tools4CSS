import React, { useState } from "react";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";

const RgbToHexConverter = () => {
    // Default value: corresponds to RGB(29, 78, 216) => #1D4ED8
    const [inputRgb, setInputRgb] = useState("rgb(29, 78, 216)");
    const [rgbValue, setRgbValue] = useState("rgb(29, 78, 216)");
    const [hexValue, setHexValue] = useState("#1D4ED8");

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
            setHexValue("Invalid");
            return;
        }

        let r = parseInt(parts[0]);
        let g = parseInt(parts[1]);
        let b = parseInt(parts[2]);

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            setRgbValue("Invalid");
            setHexValue("Invalid");
            return;
        }

        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
            setRgbValue("Invalid");
            setHexValue("Invalid");
            return;
        }

        const normalizedRgb = `rgb(${r}, ${g}, ${b})`;
        const toHex = (num: number) => num.toString(16).padStart(2, "0").toUpperCase();
        const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

        setRgbValue(normalizedRgb);
        setHexValue(hex);
    };

    const { isFavorited, handleFavorite } = useFavoriteTool("RGB to Hex Converter");

    return (
        <>
            <SEO title="RGB to Hex Converter" />
            <div className="w-full lg:w-4/6 mx-auto font-medium">
                <div className="flex flex-row justify-between items-center mx-4 lg:mx-0">
                    <Breadcrumb
                        links={[{ href: "/", label: "Home" }, { label: "RGB to Hex Converter" }]}
                    />
                    <FavoriteButton isFavorited={isFavorited} handleFavorite={handleFavorite} />
                </div>

                <Title
                    title="RGB to Hex Converter"
                    info="Convert an RGB value to its hexadecimal representation"
                />

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

                {(rgbValue || hexValue) && (
                    <div className="rounded-md border p-4 mt-6 mx-4 lg:mx-0">
                        <h2 className="text-xl font-bold mb-4">Conversions</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2 font-medium">CODE</th>
                                    <th className="py-2 font-medium">VALUE</th>
                                    <th className="py-2 font-medium">HTML/CSS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-2">RGB</td>
                                    <td className="py-2">{rgbValue}</td>
                                    <td className="py-2">background-color: {rgbValue};</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Hex</td>
                                    <td className="py-2">{hexValue}</td>
                                    <td className="py-2">background-color: {hexValue};</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                <Info title="What is RGB to Hex Conversion?" paragraph={<> RGB to Hex conversion is a fundamental process for web developers and designers who work with color in different formats.
                    <br />
                    <br />
                    In this conversion, an RGB color value—which represents colors using numerical values for red, green, and blue (each ranging from 0 to 255)—is transformed into a hexadecimal color code.
                    <br />
                    <br />
                    For example, the RGB value <strong>rgb(29, 78, 216)</strong> corresponds to the hexadecimal code <strong>#1D4ED8</strong>.
                    <br />
                    <br />
                    Hexadecimal color codes are widely used in web development because of their compactness and ease of integration into CSS and HTML. Converting from RGB to Hex allows you to easily apply color schemes consistently across different web projects.
                    <br />
                    <br />
                    Overall, mastering RGB to Hex conversion enhances your ability to work with colors effectively, ensuring your designs maintain consistency and visual appeal in digital environments.</>} />
            </div>
        </>
    );
};

export default RgbToHexConverter;
