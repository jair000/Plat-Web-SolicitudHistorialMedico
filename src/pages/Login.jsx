import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('${import.meta.env.VITE_API_URL}/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, password })
      });

      if (response.ok) {
        const data = await response.json(); // ✅ Solo una vez
        localStorage.setItem('usuario', JSON.stringify(data));
        setError('');
        alert('✅ Bienvenido, sesión iniciada');
        navigate('/home');// Redirige al home
      } else {
        const mensaje = await response.text();
        setError(mensaje);
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <section className="login-section d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 d-none d-lg-block">
            <img
              src="/src/assets/img/login/login.jpg"
              alt="Login illustration"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-5 col-md-8 col-sm-10">
            <div className="login-card shadow p-4 rounded">
              <h2 className="mb-4 text-center">Iniciar Sesión</h2>
              {error && <div className="alert alert-danger text-center">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Usuario</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Usuario"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Entrar</button>
                </div>
              </form>
              <div className="text-center mt-3">
                <a href="/Register" className='link-primary btn btn-light'>Registrate aquí</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
