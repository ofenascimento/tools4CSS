import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CssTool {
  name: string;
  url: string;
}

interface FavoriteContextType {
  favoriteTools: CssTool[];
  saveFavorite: (tool: CssTool) => void;
  deleteFavorite: (toolName: string) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteTools, setFavoriteTools] = useState<CssTool[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteTools') || '[]') as CssTool[];
    setFavoriteTools(storedFavorites);
  }, []);

  const saveFavorite = (tool: CssTool) => {
    const updatedFavorites = [...favoriteTools, tool];
    setFavoriteTools(updatedFavorites);
    localStorage.setItem('favoriteTools', JSON.stringify(updatedFavorites));
  };

  const deleteFavorite = (toolName: string) => {
    const updatedFavorites = favoriteTools.filter(tool => tool.name !== toolName);
    setFavoriteTools(updatedFavorites);
    localStorage.setItem('favoriteTools', JSON.stringify(updatedFavorites));
  };

  return (
    <FavoriteContext.Provider value={{ favoriteTools, saveFavorite, deleteFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoriteProvider');
  }
  return context;
};
