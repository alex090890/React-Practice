import React, { useState } from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import CounterSum from './CounterSum';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  function decrement1() {
    setCount1(prevCount => prevCount - 1);
  }

  function increment1() {
    setCount1(prevCount => prevCount + 1);
  }

  function decrement2() {
    setCount2(prevCount => prevCount - 1);
  }

  function increment2() {
    setCount2(prevCount => prevCount + 1);
  }

  function decrement3() {
    setCount3(prevCount => prevCount - 1);
  }

  function increment3() {
    setCount3(prevCount => prevCount + 1);
  }

  return (
    <div>
      <Counter onDecrement={decrement1} onIncrement={increment1} count={count1} />
      <h1>+</h1>
      <Counter2 onDecrement={decrement2} onIncrement={increment2} count={count2} />
      <h1>+</h1>
      <Counter3 onDecrement={decrement3} onIncrement={increment3} count={count3} />
      <h1>=</h1>
      <CounterSum counter1={count1} counter2={count2} counter3={count3} onDecrement={decrement3} onIncrement={increment3} />
    </div>
  );
}