import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {
  const { counter, incrementar } = useCounter(10);

  return (
    <div className='mt-5'>
      <h3>Counter: useState with hook</h3>
      <span>Valor: {counter}</span>
      <br />
      <button
        className='btn btn-outline-primary mt-2'
        onClick={() => incrementar()}
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary mt-2'
        onClick={() => incrementar(2)}
      >
        +2
      </button>
      {/* <button className='btn btn-danger mt-2' onClick={() => setCounter(0)}>
        Reset
      </button> */}
    </div>
  );
};
