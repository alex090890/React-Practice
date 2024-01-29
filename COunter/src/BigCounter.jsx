import React, { useState } from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';
import Counter3 from './Counter3';

export default function BigCounter() {
    const [count, setCount] = useState(0);
    

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  };

    return (
        <div>
            <button onClick={decrement}>Decrease all-</button>
            <p>{Total}</p>
            <button onClick={increment}>Increase all</button>
        </div>);
}