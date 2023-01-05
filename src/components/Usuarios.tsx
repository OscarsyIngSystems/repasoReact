import { Usuario } from "../interfaces/reqRes.interface";
import { useUsuarios } from "../hooks/useUsuarios";
export const Usuarios = () => {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

  const renderUsuario = (usuario: Usuario) => {
    return (
      <tr key={usuario.id}>
        <th>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{ width: 50, borderRadius: 100 }}
          />
        </th>
        <th>
          {usuario.first_name} {usuario.last_name}
        </th>
        <th>{usuario.email}</th>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderUsuario(usuario))}</tbody>
      </table>
      <button onClick={paginaAnterior} className="btn btn-primary">
        Anteriores
      </button>
      &nbsp;
      <button onClick={paginaSiguiente} className="btn btn-primary">
        Siguientes
      </button>
    </>
  );
};
