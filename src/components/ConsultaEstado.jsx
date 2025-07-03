import '../css/ConsultaEstado.css'

const datosSolicitudes = [
  {
    fecha: '2025-05-10',
    estado: 'Pendiente',
    observaciones: 'En revisión por el área médica',
    archivo: null
  },
  {
    fecha: '2025-04-28',
    estado: 'Aprobado',
    observaciones: 'Historial disponible',
    archivo: '/documentos/historial-abril.pdf'
  },
  {
    fecha: '2025-03-15',
    estado: 'Rechazado',
    observaciones: 'Falta documento de identidad',
    archivo: null
  }
]

function ConsultaEstado() {
  return (
    <section id="consulta-estado" className="consulta-estado section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Consultar Estado de Solicitud</h2>
        <p>Revise el estado de sus solicitudes previas de historial médico.</p>
      </div>

      <div className="container table-responsive" data-aos="fade-up" data-aos-delay="100">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Fecha de Solicitud</th>
              <th>Estado</th>
              <th>Observaciones</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {datosSolicitudes.map((solicitud, index) => (
              <tr key={index}>
                <td>{solicitud.fecha}</td>
                <td>
                  <span className={`estado ${solicitud.estado.toLowerCase().replace(/\s+/g, '-')}`}>
                    {solicitud.estado}
                  </span>

                </td>
                <td>{solicitud.observaciones}</td>
                <td>
                  {solicitud.estado === 'Aprobado' && solicitud.archivo ? (
                    <a
                      href={solicitud.archivo}
                      className="btn btn-sm btn-outline-primary"
                      download
                    >
                      Descargar
                    </a>
                  ) : (
                    <span className="text-muted">No disponible</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ConsultaEstado
