import '../css/Doctores.css'

const doctores = [
  {
    nombre: 'Walter White',
    puesto: 'Médico Internista',
    descripcion: 'Amplio conocimiento de enfermedades comunes.',
    imagen: '/img/doctores/doctors-1.jpg',
  },
  {
    nombre: 'Sarah Jhonson',
    puesto: 'Médico Familiar',
    descripcion: 'Enfocado en el historial y atención continua.',
    imagen: '/img/doctores/doctors-2.jpg',
  },
  {
    nombre: 'William Anderson',
    puesto: 'Médico General',
    descripcion: 'Puede revisar solicitudes básicas.',
    imagen: '/img/doctores/doctors-3.jpg',
  },
  {
    nombre: 'Amanda Jepson',
    puesto: 'Médico Legal',
    descripcion: 'Validación formal de documentos.',
    imagen: '/img/doctores/doctors-4.jpg',
  },
];

function Doctores() {
  return (
    <section id="doctors" className="doctors section light-background py-5">
      <div className="container section-title text-center mb-5" data-aos="fade-up">
        <h2>Doctores</h2>
        <p>Contamos con doctores especializados que te ayudaran a seguir proceso.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {doctores.map((doc, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="team-member w-100">
                <div className="member-img position-relative">
                  <img src={doc.imagen} className="img-fluid w-100 rounded-top" alt={doc.nombre} />
                  <div className="social position-absolute start-50 translate-middle-x">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info text-center p-3 bg-white rounded-bottom shadow-sm">
                  <h4>{doc.nombre}</h4>
                  <span>{doc.puesto}</span>
                  <br />
                  <span>{doc.descripcion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctores;
