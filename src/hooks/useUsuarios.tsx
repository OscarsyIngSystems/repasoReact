import { useState, useRef, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes.interface";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
    return () => {
      cargarUsuarios();
    };
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: pageRef.current,
      },
    });
    console.log(pageRef.current);

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      console.log(pageRef.current);

      console.log(pageRef.current);
    } else {
      pageRef.current--;

      alert("Sin registros");
    }
  };

  const paginaSiguiente = () => {
    pageRef.current++;

    cargarUsuarios();
  };
  const paginaAnterior = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      cargarUsuarios();
    }
  };
  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
  };
};
