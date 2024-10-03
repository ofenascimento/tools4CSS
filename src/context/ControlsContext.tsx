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
  const [tailwindPlaygroundCode, setTailwindPlaygroundCode] = useState(`<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
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
