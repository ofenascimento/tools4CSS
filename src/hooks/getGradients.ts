import { useState, useEffect } from "react";

interface Gradient {
    _id: string;  
    color1: string;
    color2: string;
    color3?: string | null;
    name: string;
    likes: number;
  }
  

export const useGradient = () => {
  const [gradients, setGradients] = useState<Gradient[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGradients = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://tools4css.com/api/gradients');
        if (!response.ok) {
          throw new Error('Failed to fetch gradients');
        }
        const data = await response.json();
        console.log("Dados recebidos:", data);
        setGradients(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGradients();
  }, []);

  return { gradients, isLoading };
};
