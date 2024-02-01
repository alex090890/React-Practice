import React, { useState } from 'react';

export default function Counter({ onDecrement, onIncrement, count }) {

    return (
        <div>
          <button onClick={onDecrement}>-</button>
          <p>{count}</p>
          <button onClick={onIncrement}>+</button>
        </div>
    )
}

