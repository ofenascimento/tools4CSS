import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoriteContext';
import { useRouter } from 'next/router';

export const useFavoriteTool = (toolName: string) => {
  const { favoriteTools, saveFavorite, deleteFavorite } = useFavorites();
  const [isFavorited, setIsFavorited] = useState(false);
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    setIsFavorited(favoriteTools.some((tool) => tool.url === asPath));
  }, [favoriteTools, asPath]);

  const handleFavorite = () => {
    const tool = { name: toolName, url: asPath };
    if (isFavorited) {
      deleteFavorite(toolName);
    } else {
      saveFavorite(tool);
    }
    setIsFavorited(!isFavorited);
  };

  return { isFavorited, handleFavorite };
};
