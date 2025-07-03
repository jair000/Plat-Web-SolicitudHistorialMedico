import React, { useState } from 'react'
import '../css/SolicitarHistorial.css'

function SolicitarHistorial() {
  const [formData, setFormData] = useState({
    tipoSolicitud: '',
    documento: null,
    centroMedico: '',
    fechaAtencion: '',
    motivo: '',
    archivoAutorizacion: null,
    metodoEntrega: '',
    aceptaTerminos: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.aceptaTerminos) {
      alert('Debes aceptar los términos y condiciones.')
      return
    }

    // Aquí iría la lógica para enviar los datos al backend
    console.log('Datos enviados:', formData)
    alert('Solicitud enviada correctamente.')
  }

  return (
    <section id="solicitar" className="medical-request section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Solicitar Historial Médico</h2>
        <p>Complete el siguiente formulario para solicitar su historial médico de forma segura.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form className="request-form" onSubmit={handleSubmit}>
          <div className="row gy-4">

            <div className="col-md-6">
              <label>Tipo de Solicitud</label>
              <select name="tipoSolicitud" className="form-control" required onChange={handleChange}>
                <option value="">Seleccione...</option>
                <option value="personal">Personal</option>
                <option value="familiar">Familiar (con autorización)</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>Documento de Identidad (PDF/JPG)</label>
              <input type="file" name="documento" accept=".pdf,.jpg,.jpeg,.png" className="form-control" required onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label>Centro Médico / Hospital</label>
              <input type="text" name="centroMedico" className="form-control" required onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label>Fecha Aproximada de Atención</label>
              <input type="date" name="fechaAtencion" className="form-control" required onChange={handleChange} />
            </div>

            <div className="col-md-12">
              <label>Motivo de Solicitud (Opcional)</label>
              <textarea name="motivo" rows="3" className="form-control" placeholder="Describa brevemente el motivo..." onChange={handleChange}></textarea>
            </div>

            <div className="col-md-6">
              <label>Autorización (PDF)</label>
              <input type="file" name="archivoAutorizacion" accept=".pdf" className="form-control" onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label>Método de Entrega</label>
              <select name="metodoEntrega" className="form-control" required onChange={handleChange}>
                <option value="">Seleccione...</option>
                <option value="ventanilla">Recojo en ventanilla</option>
                <option value="correo">Envío por correo electrónico</option>
              </select>
            </div>

            <div className="col-md-12">
              <div className="form-check">
                <input type="checkbox" name="aceptaTerminos" className="form-check-input" id="terminos" onChange={handleChange} />
                <label className="form-check-label" htmlFor="terminos">
                  He leído y acepto los <a href="/politica"> Términos y Condiciones </a> y la <a href="/privacidad">Política de Privacidad</a>.
                </label>
              </div>
            </div>

            <div className="col-md-12 text-center">
              <button type="submit" className="btn-enviar">Enviar Solicitud</button>
              <p className="mt-3 aviso">Tiempo estimado de respuesta: 5 días hábiles. Haga uso responsable del servicio.</p>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default SolicitarHistorial
