//para mostrar solo el contenido seleccionado, 
//por ejemplo solo el login, formulario, recuperacion de contra, etc

import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
