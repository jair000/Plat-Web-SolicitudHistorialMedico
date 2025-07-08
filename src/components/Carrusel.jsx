import '../css/Carrusel.css'
import img1 from '/img/carrusel/hero-carousel-1.jpg'
import img2 from '/img/carrusel/hero-carousel-2.jpg'
import img3 from '/img/carrusel/hero-carousel-3.jpg'


function Carrusel() {
  return (
    <section id="carrusel" className="hero section">
      <div
        id="hero-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        {/* Indicadores */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Imagen atención médica" />
            <div className="container">
              <h2>Bienvenido a Medicio</h2>
              <p>Tu salud es nuestra prioridad. Accede fácilmente a tu historial médico y mantente informado sobre tu bienestar.</p>
              <a href="#about" className="btn-get-started">Conoce más</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Imagen consulta médica" />
            <div className="container">
              <h2>Solicita tu historial médico</h2>
              <p>Gestiona tus solicitudes de historial médico de manera rápida, segura y desde cualquier lugar.</p>
              <a href="#about" className="btn-get-started">Solicitar ahora</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Imagen resultados médicos" />
            <div className="container">
              <h2>Consulta tus resultados</h2>
              <p>Revisa el estado de tus solicitudes y accede a tus documentos médicos en línea, sin complicaciones.</p>
              <a href="#about" className="btn-get-started">Ver resultados</a>
            </div>
          </div>
        </div>

        {/* Controles */}
        <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  )
}

export default Carrusel
