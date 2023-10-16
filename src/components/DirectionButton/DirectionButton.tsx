import React from 'react';
import { useControls } from '../../hooks/useControls';


const DirectionButton = () => {
    const { setDirection, animated } = useControls();
    return (
        <div className='flex gap-4'>
            <span>Direction: </span>
            <button onClick={() => setDirection('180deg')}>👆</button>
            <button onClick={() => setDirection('380deg')}>👇</button>
            <button onClick={() => setDirection('80deg')}>👈</button>
            <button onClick={() => setDirection('-80deg')}>👉</button>
        </div>

    );
};

export default DirectionButton;
