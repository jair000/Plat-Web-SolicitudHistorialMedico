import { useState } from 'react';
import '../css/Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch('${import.meta.env.VITE_API_URL}/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('✅ Mensaje enviado correctamente');
        setStatusMessage('✅ Mensaje enviado correctamente');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage('❌ Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('❌ Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      {/* Título */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contacto</h2>
        <p>Déjanos tu mensaje y te responderemos lo antes posible</p>
      </div>



      {/* Información de contacto y formulario */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Información de contacto */}
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-lg-12">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Dirección</h3>
                  <p>CERTUS Surco, Lima - Perú</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-telephone"></i>
                  <h3>Llámanos</h3>
                  <p>+51 999 999 999</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-envelope"></i>
                  <h3>Correo</h3>
                  <p>info@medicina.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="col-lg-6">
            <form className="php-email-form" onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Tu nombre"
                    value={formData.name} onChange={handleChange} required />
                </div>

                <div className="col-md-6">
                  <input type="email" name="email" className="form-control" placeholder="Tu correo"
                    value={formData.email} onChange={handleChange} required />
                </div>

                <div className="col-md-12">
                  <input type="text" name="subject" className="form-control" placeholder="Asunto"
                    value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="col-md-12">
                  <textarea name="message" rows="4" className="form-control" placeholder="Mensaje"
                    value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {loading && <div className="loading">Enviando...</div>}
                  {statusMessage && <div className="sent-message">{statusMessage}</div>}
                  <button type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                  <div className="col-md-12 text-center mt-2">
                    <a
                      href="https://wa.me/51936820832?text=Hola,%20quiero%20más%20información%20sobre%20atención%20médica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success"
                      style={{ backgroundColor: '#25D366', border: 'none' }}
                    >
                      Contactar por WhatsApp
                    </a>
                  </div>

                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
      {/* Google Maps */}
      <div className="mt-5" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 20, width: '100%', height: '370px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.614636354496!2d-76.99049523795152!3d-12.144314239708667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b81367c29a0f%3A0xc23ac16a6ad77d47!2sCERTUS%20Surco!5e0!3m2!1ses!2spe!4v1749434042150!5m2!1ses!2spe"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacto;
