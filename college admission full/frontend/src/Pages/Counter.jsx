import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const targetCount = 10000;
  const timeLimit = 1; // 1 second in milliseconds
  const incrementAmount = 100; // Adjust this to control the speed

  useEffect(() => {
    const startTime = Date.now();

    const updateCount = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (count < targetCount && elapsedTime < timeLimit) {
        setCount((prevCount) => prevCount + incrementAmount);
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  }, [count]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">{count}</h1>
    </div>
  );
};

export default Counter;
