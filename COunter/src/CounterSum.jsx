import React from 'react';

export default function CounterSum({ counter1, counter2, counter3 }) {
  const sum = counter1 + counter2 + counter3;

  return (
    <div>
      <p>Sum: {sum}</p>
    </div>
  );
}