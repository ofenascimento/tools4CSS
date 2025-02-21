import React, { useState } from "react";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";

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

function formatRgb({ r, g, b }: { r: number; g: number; b: number }) {
    return `rgb(${r}, ${g}, ${b})`;
}

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

function rgbToCmyk(r: number, g: number, b: number) {
    const rPrime = r / 255;
    const gPrime = g / 255;
    const bPrime = b / 255;

    const k = 1 - Math.max(rPrime, gPrime, bPrime);
    const c = (1 - rPrime - k) / (1 - k) || 0;
    const m = (1 - gPrime - k) / (1 - k) || 0;
    const y = (1 - bPrime - k) / (1 - k) || 0;

    return `cmyk(${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(
        y * 100
    )}%, ${Math.round(k * 100)}%)`;
}

const ColorConverter = () => {
    const [inputHex, setInputHex] = useState("#1D4ED8");
    const [hexValue, setHexValue] = useState("#1D4ED8");
    const [rgbValue, setRgbValue] = useState("rgb(29, 78, 216)");
    const [hslValue, setHslValue] = useState("hsl(224, 76%, 48%)");
    const [hsvValue, setHsvValue] = useState("hsv(224, 87%, 85%)");
    const [cmykValue, setCmykValue] = useState("cmyk(87%, 64%, 0%, 15%)");

    const handleHexInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputHex(event.target.value);
    };

    const convertColor = () => {
        const rgbObj = hexToRgb(inputHex);

        if (!rgbObj) {
            setHexValue("Inválido");
            setRgbValue("Inválido");
            setHslValue("Inválido");
            setHsvValue("Inválido");
            setCmykValue("Inválido");
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
        setRgbValue(formatRgb(rgbObj));
        setHslValue(rgbToHsl(r, g, b));
        setHsvValue(rgbToHsv(r, g, b));
        setCmykValue(rgbToCmyk(r, g, b));
    };

    return (
        <>
            <SEO title="Color Converter" />
            <div className="w-full lg:w-4/6 mx-auto font-medium">
                <div className="flex flex-row justify-between items-center mx-4 lg:mx-0">
                    <Breadcrumb
                        links={[{ href: "/", label: "Home" }, { label: "Color Converter" }]}
                    />
                </div>

                <Title
                    title="Hex to RGB"
                    info="Converta o valor hexadecimal para RGB"
                />

                <div className="w-auto md:w-full mt-4 mx-4 lg:mx-0">
                    <Textarea
                        customClassName="h-14"
                        placeholder="Digite o código Hex aqui (ex: #ff5733)"
                        value={inputHex}
                        onChange={handleHexInput}
                    />
                </div>

                <div className="mx-4 lg:mx-0 mt-2">
                    <Button text="Converter" onClick={convertColor} />
                </div>

                {(hexValue || rgbValue || hslValue || hsvValue || cmykValue) && (
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
                                    <td className="py-2">Hex</td>
                                    <td className="py-2">{hexValue}</td>
                                    <td className="py-2">background-color: {hexValue};</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2">RGB</td>
                                    <td className="py-2">{rgbValue}</td>
                                    <td className="py-2">background-color: {rgbValue};</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2">HSL</td>
                                    <td className="py-2">{hslValue}</td>
                                    <td className="py-2">background-color: {hslValue};</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2">HSV</td>
                                    <td className="py-2">{hsvValue}</td>
                                    <td className="py-2">background-color: {hsvValue};</td>
                                </tr>
                                <tr>
                                    <td className="py-2">CMYK</td>
                                    <td className="py-2">{cmykValue}</td>
                                    <td className="py-2">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                <Info
                    title="What is Hex to RGB Conversion?"
                    paragraph={
                        <>
                            Hex to RGB conversion is essential for web developers and
                            designers who want to work flexibly with different color formats.
                            <br />
                            <br />
                            While a hex color code (for example, #FF5733) represents colors
                            using hexadecimal notation—with each pair of digits indicating the
                            intensity of one of the three primary colors (red, green, and
                            blue)—the RGB format represents colors using numeric values
                            ranging from 0 to 255 for each channel.
                            <br />
                            <br />
                            Historically, the hex format has become extremely popular in web
                            development due to its compact representation and ease of use in
                            CSS and HTML. However, converting hex to RGB is often necessary
                            when precise control over individual color channels is required.
                            This conversion allows developers to manipulate red, green, and
                            blue components independently, making it easier to create dynamic
                            color variations, generate custom gradients, and integrate with
                            APIs or libraries that operate on RGB values.
                            <br />
                            <br />
                            Moreover, many modern design and development tools prefer working
                            with RGB values, especially when adjustments for brightness,
                            contrast, and opacity are needed. For instance, using RGB—or its
                            extension RGBA, which includes an alpha channel for
                            transparency—provides greater flexibility in creating rich,
                            responsive designs that adapt seamlessly across different devices
                            and screen sizes.
                            <br />
                            <br />
                            In summary, understanding and implementing hex to RGB conversion
                            not only streamlines your development workflow but also enhances
                            the consistency and quality of your designs. This conversion is a
                            vital skill that bridges the gap between design aesthetics and
                            technical implementation, ensuring that colors remain true and
                            effective in both static and interactive digital environments.
                        </>
                    }
                ></Info>
            </div>
        </>
    );
};

export default ColorConverter;
