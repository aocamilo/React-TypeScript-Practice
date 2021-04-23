import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  milliseconds: number;
};

export const Timer = ({ milliseconds }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos((s) => s + 1), milliseconds);
    // return () => { //Limpieza

    // }
  }, [milliseconds]);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};
