import { createContext, useState } from 'react';

interface IControlsContext {
  blur: number;
  setBlur(e: any): void;
  borderRadius: number;
  setBorderRadius(e: any): void;
  distance: number;
  setDistance(e: any): void;
  color: string;
  setColor(e: any): void;
  colorVariant1: string;
  setColorVariant1(e: any): void;
  colorVariant2: string;
  setColorVariant2(e: any): void;
  animated: boolean;
  setAnimated(e: any): void;
  direction: string;
  setDirection(e: any): void;
  trasnparency: number;
  setTransparency(e: any): void;
  depth: number;
  setDepth(e: any): void;
  angle: number;
  setAngle(e: any): void;
  tailwindPlaygroundCode: string;
  setTailwindPlaygroundCode(e: any): void;
}

interface IProvider {
  children: React.ReactNode;
}

export const ControlsContext = createContext({} as IControlsContext);

export function ControlsProvider({ children }: IProvider) {
  const [blur, setBlur] = useState(36);
  const [borderRadius, setBorderRadius] = useState(25);
  const [distance, setDistance] = useState(10);
  const [color, setColor] = useState('#ffffff');
  const [colorVariant1, setColorVariant1] = useState('#1D4ED8');
  const [colorVariant2, setColorVariant2] = useState('#24ff8e');
  const [animated, setAnimated] = useState(false);
  const [direction, setDirection] = useState('80deg');
  const [trasnparency, setTransparency] = useState(0.15);
  const [depth, setDepth] = useState(4);
  const [angle, setAngle] = useState(80);
  const [tailwindPlaygroundCode, setTailwindPlaygroundCode] = useState(`<div class="bg-white py-12 font-lexend dark:bg-[#282C34]">
  <div class="max-w-4xl mx-auto text-center">
    <!-- Quotation Mark -->
    <div class="text-blue-600 text-4xl mb-4">“</div>

    <!-- Testimonial Quote -->
    <p class="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
      "I hope my tool helps you in some way. Let's push for faster development and a more beautiful web together.."
    </p>

    <!-- Author & Company -->
    <div class="flex justify-center items-center space-x-4">
      <img src="https://tools4css.com/avatars/avatar5.png" alt="Company Logo" class="w-12 h-12 rounded-lg">
      <div>
        <p class="font-bold text-gray-800 dark:text-white">Felipe Nascimento</p>
        <p class="text-gray-500 dark:text-slate-300">Founder, Tools4CSS</p>
      </div>
    </div>

    <!-- Social Buttons -->
    <div class="flex flex-col mt-5 gap-2">
      <a class="bg-blue-600 mx-4 py-2 text-white rounded-xl border-4 border-blue-700">LinkedIn</a>
      <a class="bg-red-500 mx-4 py-2 text-white rounded-xl border-4 border-red-700">Instagram</a>
      <a class="bg-slate-600 mx-4 py-2 text-white rounded-xl border-4 border-gray-700">GitHub</a>
    </div>
    
  </div>
</div>`);
  return (
    <ControlsContext.Provider
      value={{
        blur: blur,
        setBlur,
        borderRadius: borderRadius,
        setBorderRadius,
        distance: distance,
        setDistance,
        color: color,
        setColor,
        colorVariant1: colorVariant1,
        setColorVariant1,
        colorVariant2: colorVariant2,
        setColorVariant2,
        animated: animated,
        setAnimated,
        direction: direction,
        setDirection,
        trasnparency: trasnparency,
        setTransparency,
        depth,
        setDepth,
        angle,
        setAngle,
        tailwindPlaygroundCode,
        setTailwindPlaygroundCode,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
}
