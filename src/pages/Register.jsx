import '../css/Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombres: '',
    dni: '',
    fechaNacimiento: '',
    correo: '',
    celular: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombres.trim()) newErrors.nombres = 'Este campo es obligatorio.';
    if (!/^\d{8}$/.test(formData.dni)) newErrors.dni = 'Debe tener 8 dígitos.';
    if (!formData.fechaNacimiento) newErrors.fechaNacimiento = 'Seleccione una fecha.';
    if (!/\S+@\S+\.\S+/.test(formData.correo)) newErrors.correo = 'Correo inválido.';
    if (!/^\d{9}$/.test(formData.celular)) newErrors.celular = 'Debe tener 9 dígitos.';
    if (formData.password.length < 6) newErrors.password = 'Mínimo 6 caracteres.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/usuarios/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Registro exitoso');
          navigate('/login');
        } else {
          alert('Error al registrar');
        }
      } catch (error) {
        console.error('Error en el registro:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };


  return (
    <section className="register-section d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="register-card shadow p-4 rounded">
              <h2 className="mb-4 text-center">Registrarse</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombres y Apellidos</label>
                  <input
                    type="text"
                    name="nombres"
                    className={`form-control ${errors.nombres ? 'is-invalid' : ''}`}
                    value={formData.nombres}
                    onChange={handleChange}
                  />
                  {errors.nombres && <div className="invalid-feedback">{errors.nombres}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">DNI / Identificación</label>
                  <input
                    type="text"
                    name="dni"
                    className={`form-control ${errors.dni ? 'is-invalid' : ''}`}
                    value={formData.dni}
                    onChange={handleChange}
                  />
                  {errors.dni && <div className="invalid-feedback">{errors.dni}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Fecha de nacimiento</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    className={`form-control ${errors.fechaNacimiento ? 'is-invalid' : ''}`}
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                  />
                  {errors.fechaNacimiento && <div className="invalid-feedback">{errors.fechaNacimiento}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    name="correo"
                    className={`form-control ${errors.correo ? 'is-invalid' : ''}`}
                    value={formData.correo}
                    onChange={handleChange}
                  />
                  {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Número de celular</label>
                  <input
                    type="text"
                    name="celular"
                    className={`form-control ${errors.celular ? 'is-invalid' : ''}`}
                    value={formData.celular}
                    onChange={handleChange}
                  />
                  {errors.celular && <div className="invalid-feedback">{errors.celular}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success">Crear cuenta</button>
                </div>
              </form>

              <div className="text-center mt-3">
                <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
