import { useState } from 'react';

interface User {
  uid: string;
  name: string;
}

const tempUser: User = {
  uid: 'XYZ987',
  name: 'Manuela Escobar',
};

export const Usuario = () => {
  const [user, setUser] = useState<User>(tempUser);

  const Login = () => {
    setUser({
      uid: 'ABC123',
      name: 'Camilo Arango Ochoa',
    });
  };

  return (
    <div className='mt-5'>
      <h3>Usuario: useState</h3>

      <button className='btn btn-outline-primary' onClick={Login}>
        Login
      </button>

      {!user ? (
        <pre> No hay usuario </pre>
      ) : (
        <pre> {JSON.stringify(user)} </pre>
      )}
    </div>
  );
};
