import { createContext, useState } from 'react';

interface IControlsContext {
  blur: Number;
  setBlur(e: any): void;
}

interface IProvider {
  children: React.ReactNode;
}

export const ControlsContext = createContext({} as IControlsContext);

export function ControlsProvider({ children }: IProvider) {
  const [blur, setBlur] = useState(3)
  return (
    <ControlsContext.Provider value={{blur: blur, setBlur}}>{children}</ControlsContext.Provider>
  );
}
