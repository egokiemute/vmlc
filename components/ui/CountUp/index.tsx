'use client'
import React, { useState, useEffect } from 'react';

interface CountUpProps {
  amount: number;
  duration: number;
  plus: string;
  begin: number | false;
}

const CountUp: React.FC<CountUpProps> = ({ amount, duration, plus, begin }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = amount / (duration / 100); // Calculate how much to increment by per interval

    const timer = setInterval(() => {
      start += increment;
      if (start >= amount) {
        setCount(amount);
        clearInterval(timer); // Stop when the final amount is reached
      } else {
        setCount(Math.ceil(start)); // Round the value to display a whole number
      }
    }, 100); // 100ms interval

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [amount, duration]);

  return <p className='font-baseneue text-[140px] md:text-[180px] py-0 flex items-center gap-1'><span>{begin}</span><span>{count}</span><span>{plus}</span></p>;
};

export default CountUp;
