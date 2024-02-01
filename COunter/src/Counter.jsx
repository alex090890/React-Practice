import React, { useState } from 'react';

export default function Counter({ onDecrement, onIncrement, count }) {

    return (
        <div className='counterContainer'>
          <button onClick={onDecrement} className='btn'>-</button>
          <p>{count}</p>
          <button onClick={onIncrement} className='btn'>+</button>
        </div>
    )
}

