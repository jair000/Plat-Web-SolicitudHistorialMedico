import React from 'react'
import '../css/MiHistorial.css'

const historialMedico = [
  {
    fecha: '2025-04-20',
    diagnostico: 'Gripe común',
    medico: 'Dra. María López',
    foto: '/img/doctores/doctors-2.jpg',
    archivos: [
      { nombre: 'Informe.pdf', url: '/documentos/informe-gripe.pdf' },
      { nombre: 'Receta.jpg', url: '/documentos/receta-gripe.jpg' }
    ]
  },
  {
    fecha: '2025-02-10',
    diagnostico: 'Chequeo general',
    medico: 'Dr. Juan Pérez',
    foto: '/img/doctores/doctors-1.jpg',
    archivos: [
      { nombre: 'Examen.pdf', url: '/documentos/chequeo.pdf' },
      { nombre: 'Vista.jpg', url: '/documentos/receta-gripe.jpg' }
    ]
  },
  {
    fecha: '2025-02-10',
    diagnostico: 'Chequeo general',
    medico: 'Dr. Juan Pérez',
    foto: '/img/doctores/doctors-4.jpg',
    archivos: [
      { nombre: 'Examen.pdf', url: '/documentos/chequeo.pdf' },
      { nombre: 'Vista.jpg', url: '/documentos/receta-gripe.jpg' }
    ]
  },
  {
    fecha: '2025-02-10',
    diagnostico: 'Chequeo general',
    medico: 'Dr. Juan Pérez',
    foto: '/img/doctores/doctors-3.jpg',
    archivos: [
      { nombre: 'Examen.pdf', url: '/documentos/chequeo.pdf' },
      { nombre: 'Vista.jpg', url: '/documentos/receta-gripe.jpg' }
    ]
  }
]

function MiHistorial() {
  return (
    <section id="mi-historial" className="mi-historial section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Mi Historial</h2>
        <p>Doctores por quienes fuiste atendido.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {historialMedico.map((registro, index) => (
            <div className="col-md-6" key={index}>
              <div className="historial-item card shadow-sm">
                <div className="card-body">
                  <div className="doctor-img-container">
                    <img
                      src={registro.foto}
                      alt={registro.medico}
                      className="doctor-img"
                    />
                  </div>
                  <div className="historial-content">
                    <h5 className="card-title">{registro.fecha}</h5>
                    <p><strong>Diagnóstico:</strong> {registro.diagnostico}</p>
                    <p><strong>Médico tratante:</strong> {registro.medico}</p>
                    <div className="archivos">
                      <strong>Archivos:</strong>
                      <ul>
                        {registro.archivos.map((archivo, i) => (
                          <li key={i}>
                            <a
                              href={archivo.url}
                              className="btn btn-sm btn-outline-primary"
                              download
                            >
                              {archivo.nombre}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MiHistorial
