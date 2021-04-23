import { useState } from 'react';

export const useCounter = (initialState: number = 0) => {
  const [counter, setCounter] = useState(initialState);

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return { counter, incrementar };
};
