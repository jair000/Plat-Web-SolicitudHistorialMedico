import '../css/Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">Medicio</span>
            </a>
            <div className="footer-contact pt-3">
              <p>106 La vecindad del chavo</p>
              <p>Cerro candela</p>
              <p className="mt-3"><strong>Teléfono:</strong> <span>+51 986820832</span></p>
              <p><strong>Email:</strong> <span>jair000@ejemplo.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Enlaces */}
          {[
            { title: 'Enlaces útiles', items: ['Inicio', 'Sobre nosotros', 'Servicios', 'Términos de servicio', 'Política de privacidad'] },
            { title: 'Nuestros servicios', items: ['Consulta médica', 'Historial clínico', 'Gestión de citas', 'Atención personalizada', 'Soporte en línea'] },
            { title: 'Recursos médicos', items: ['Guía de pacientes', 'Preguntas frecuentes', 'Consejos de salud', 'Noticias médicas', 'Contacto'] },
            { title: 'Información', items: ['Quiénes somos', 'Equipo médico', 'Testimonios', 'Blog', 'Ubicación'] }
          ].map((section, index) => (
            <div className="col-lg-2 col-md-3 footer-links" key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center mt-4 copyright">
        <p>©
          <span>Derechos reservados</span>
          <strong className="px-1 sitename">Medicio</strong>
          <span>Todos los derechos reservados</span>
        </p>
        <div className="credits">
          Diseñado por <a href="https://github.com/jair000" target="_blank" rel="noopener noreferrer">Samir y sus dibujitos</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer