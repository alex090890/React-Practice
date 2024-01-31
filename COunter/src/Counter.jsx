import React, { useState } from 'react';

export default function Counter(props) {


  
    const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p counter={props.Counter} >{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

