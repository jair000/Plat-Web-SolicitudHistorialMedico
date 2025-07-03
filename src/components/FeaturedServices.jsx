
import '../css/FeaturedServices.css'

function FeaturedServices() {
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-4">
          {/* Servicio 1 */}
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon"><i className="fas fa-heartbeat icon"></i></div>
              <h4><a href="#" className="stretched-link">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="fas fa-pills icon"></i></div>
              <h4><a href="#" className="stretched-link">Sed ut perspici</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="fas fa-thermometer icon"></i></div>
              <h4><a href="#" className="stretched-link">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          {/* Servicio 4 */}
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="fas fa-dna icon"></i></div>
              <h4><a href="#" className="stretched-link">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
