import '../css/Carrusel.css'
import img1 from '../assets/img/carrusel/hero-carousel-1.jpg'
import img2 from '../assets/img/carrusel/hero-carousel-2.jpg'
import img3 from '../assets/img/carrusel/hero-carousel-3.jpg'


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
            <img src={img1} className="d-block w-100" alt="Slide 1" />
            <div className="container">
              <h2>Welcome to Medicio</h2>
              <p>Lorem ipsum dolor sit amet...</p>
              <a href="#about" className="btn-get-started">Read More</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Slide 2" />
            <div className="container">
              <h2>At vero eos et accusamus</h2>
              <p>Nam libero tempore, cum soluta nobis est...</p>
              <a href="#about" className="btn-get-started">Read More</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Slide 3" />
            <div className="container">
              <h2>Temporibus autem quibusdam</h2>
              <p>Beatae vitae dicta sunt explicabo...</p>
              <a href="#about" className="btn-get-started">Read More</a>
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
