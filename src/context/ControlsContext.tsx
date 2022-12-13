import { createContext, useState } from 'react';

interface IControlsContext {
  blur: number;
  setBlur(e: any): void;
  borderRadius: number;
  setBorderRadius(e: any): void;
  distance: number;
  setDistance(e: any): void;
}

interface IProvider {
  children: React.ReactNode;
}

export const ControlsContext = createContext({} as IControlsContext);

export function ControlsProvider({ children }: IProvider) {
  const [blur, setBlur] = useState(20);
  const [borderRadius, setBorderRadius] = useState(25);
  const [distance, setDistance] = useState<number>(10);
  return (
    <ControlsContext.Provider
      value={{
        blur: blur,
        setBlur,
        borderRadius: borderRadius,
        setBorderRadius,
        distance: distance,
        setDistance,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
}
