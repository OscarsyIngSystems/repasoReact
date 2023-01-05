import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: null | string;
  username: string;
  name: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  name: "",
};

type LoginPayload = {
  username: string;
  name: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        name: "",
      };

    case "login":
      return {
        validando: false,
        token: "ABC123",
        username: action.payload.username,
        name: action.payload.name,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({ type: "login", payload: { name: "Oscar", username: "LORD" } });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };
  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>

      {state.token ? (
        <div className="alert alert-success">
          Autenticado como: {state.name}
        </div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {state.token ? (
        <button onClick={logout} className="btn btn-danger">
          Logout
        </button>
      ) : (
        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      )}
    </>
  );
};
