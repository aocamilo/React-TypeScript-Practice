import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { useCounter } from '../hooks/useCounter';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {
  const { users, nextPage, lastPage } = useUsuarios();

  const renderItem = ({
    avatar,
    first_name,
    last_name,
    email,
    id,
  }: Usuario) => {
    // const { avatar, first_name, last_name, email } = usuario;
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 75, borderRadius: 100 }}
          />
        </td>
        <td>{`${first_name} ${last_name}`}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <div>
      <h3>Usuarios</h3>
      <hr />
      <table className='table' style={{ color: 'white' }}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => renderItem(user))}</tbody>
      </table>
      <button className='btn btn-outline-primary' onClick={lastPage}>
        Anteriores
      </button>
      &nbsp;
      {/* <button className='btn btn-primary' onClick={() => incrementar()}> */}
      <button className='btn btn-outline-success' onClick={nextPage}>
        Siguientes
      </button>
    </div>
  );
};
