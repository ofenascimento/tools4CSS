import React, { createContext, useState } from 'react';

interface IRenderContext {
  component: string;
  setComponent(e: any): void;
}

interface IProvider {
  children: React.ReactNode;
}

export const RenderContext = createContext({} as IRenderContext);

export function RenderProvider({ children }: IProvider) {
  const [component, setComponent] = useState('claymorphism');
  return (
    <RenderContext.Provider value={{ component: component, setComponent }}>
      {children}
    </RenderContext.Provider>
  );
}
