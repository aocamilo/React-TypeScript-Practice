import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {
  const [users, setUsers] = useState<Usuario[]>([]);
  // const { counter, incrementar } = useCounter(1);
  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      // const resp = await reqResApi.get<ReqResListado>(
      //   `/users?page=${counter}}`
      // );

      const resp = await reqResApi.get<ReqResListado>('/users', {
        params: {
          page: paginaRef.current,
        },
      });

      if (resp.data.data.length > 0) {
        setUsers(resp.data.data);
      } else {
        paginaRef.current--;
        alert('No hay mas registros');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    paginaRef.current++;
    cargarUsuarios();
  };
  const lastPage = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };

  return {
    users,
    nextPage,
    lastPage,
  };
};
