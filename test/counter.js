// counter.js
import React, { useState } from 'react';
import Display from './display';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Display value={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
