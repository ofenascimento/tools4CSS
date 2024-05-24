import React, { CSSProperties, FC, useEffect, useState } from "react";
import { palleteGradient } from "../../utils/gradients";

interface CardProps {
  color1: string;
  color2: string;
  zIndex: number;
}

const Card: FC<CardProps> = ({ color1, color2, zIndex }) => {
  return (
    <div
      className="card static lg:absolute m-2 lg:m-4 h-[140px] w-[100px] lg:h-[180px] lg:w-[140px]"
      style={{
        backgroundImage: `linear-gradient(80deg, ${color1}, ${color2})`,
        left: `${zIndex * 60}px`,
        zIndex: zIndex,
      }}
    >
      <style jsx>{`
        .card {
          border-radius: 1rem;
          box-shadow: -1rem 0 3rem -2rem #000;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .card:hover {
         
          background-size: 400% 400%;
          animation: gradient 2s ease infinite;
          transform: translateY(-12px) rotate(-10deg);
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

interface Palette {
  color1: string;
  color2: string;
}

const getRandomColors = (palette: Palette[], num: number): Palette[] => {
  const shuffled = palette.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const ColorGrid: FC = () => {
  const [numCards, setNumCards] = useState(4);
  const selectedColors = getRandomColors(palleteGradient, numCards);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1250) {
        setNumCards(5);
      } else if (width >= 1100 && width < 1250) {
        setNumCards(4);
      } else if (width >= 1023 && width < 1100) {
        setNumCards(3);
      } else {
        setNumCards(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridStyles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  return (
    <>
      <div style={gridStyles} className="h-[140px] lg:h-[200px]">
        {selectedColors.map((palette, index) => (
          <Card
            key={`${palette.color1}-${palette.color2}-${index}`}
            color1={palette.color1}
            color2={palette.color2}
            zIndex={index}
          />
        ))}
      </div>
    </>
  );
};

export default ColorGrid;
