import React from 'react';
import { useControls } from '../../hooks/useControls';
import style from './styles.module.scss';

const DirectionButton = () => {
  const { setDirection, animated } = useControls();
  return (
    <div>
      <div className={style.directions}>
        <div className={style.label}>
          <span>Directions </span>
        </div>
        {animated ? (
          <></>
        ) : (
          <>
            {' '}
            <button onClick={() => setDirection('180deg')}>👆</button>
            <button onClick={() => setDirection('380deg')}>👇</button>
          </>
        )}

        <button onClick={() => setDirection('80deg')}>👈</button>
        <button onClick={() => setDirection('-80deg')}>👉</button>
      </div>
    </div>
  );
};

export default DirectionButton;
