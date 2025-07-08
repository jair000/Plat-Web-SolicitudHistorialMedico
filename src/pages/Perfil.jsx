import '../css/Perfil.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Perfil() {
  const navigate = useNavigate();
  const [fotoPerfil, setFotoPerfil] = useState(null);

  const storedUser = JSON.parse(localStorage.getItem('usuario'));
  const usuario = storedUser || {};

  const handleCerrarSesion = () => {
    localStorage.removeItem('usuario'); // Limpia sesión
    navigate('/login');
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoPerfil(URL.createObjectURL(file));
    }
  };

  return (
    <section id='perfil' className="perfil-section d-flex align-items-center">
      <div className="container">
        <div className="perfil-card shadow rounded row gx-5 p-4">
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <div className="foto-perfil">
              <img
                src={fotoPerfil || '/img/perfil.jpg'}
                alt="Foto de perfil"
                className="img-thumbnail"
              />
              <div>
                <label className="form-label mt-2">Cambiar foto</label>
              </div>


              <input
                type="file"
                className="form-control form-control-sm"
                onChange={handleFotoChange}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <h3 className="mb-4 text-center text-lg-start">Mi Perfil</h3>
            <div className="row mb-2">
              <div className="col-md-6">
                <strong>Nombres y Apellidos:</strong>
                <p>{usuario.nombres}</p>
              </div>
              <div className="col-md-6">
                <strong>DNI:</strong>
                <p>{usuario.dni}</p>
              </div>
              <div className="col-md-6">
                <strong>Fecha de Nacimiento:</strong>
                <p>{usuario.fechaNacimiento}</p>
              </div>
              <div className="col-md-6">
                <strong>Correo Electrónico:</strong>
                <p>{usuario.correo}</p>
              </div>
              <div className="col-md-6">
                <strong>Celular:</strong>
                <p>{usuario.celular}</p>
              </div>
            </div>

            <div className="text-center text-lg-start mt-4">
              <button className="btn btn-outline-danger" onClick={handleCerrarSesion}>
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
