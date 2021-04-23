import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { CounterWithHook } from './components/CounterWithHook';
import { Formularios } from './components/Formularios';
import { Login } from './components/Login';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';
import { Usuarios } from './components/Usuarios';

function App() {
  return (
    <>
      <h1> React + TypeScript</h1>
      <hr />

      <h2>useState</h2>

      <Counter />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre />

      <h2>UseReducer</h2>
      <hr />

      <ContadorRed />
      {/* <CounterWithHook /> */}
      {/* <Login /> */}
      {/* <Usuarios /> */}
      {/* <Formularios /> */}
    </>
  );
}

export default App;
