import React from 'react';

export default function CounterSum({ counter1, counter2, counter3, onDecrement, onIncrement }) {
  const sum = counter1 + counter2 + counter3;

  function increaseBy1() {
    sum += 1;
  }

  function decreaseBy1() {
    sum -= 1;
  }

  return (
    <div className='counterContainer'>
      <button onClick={onIncrement} className='btn'>Increase by 1</button>
      <p> {sum} </p>
      <button onClick={onIncrement} className='btn'>Decrease by 1</button>
    </div>
  );
}