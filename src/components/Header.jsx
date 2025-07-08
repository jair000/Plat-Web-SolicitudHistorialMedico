import '../css/Header.css';
import logo from '/img/logo.jpg';
import { useEffect } from 'react';

//react router
import { Link } from 'react-router-dom';


function Header() {
  useEffect(() => {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.getElementById('navmenu');

    const handleToggle = () => {
      nav.classList.toggle('navmenu-open');
    };

    toggle.addEventListener('click', handleToggle);
    return () => toggle.removeEventListener('click', handleToggle);
  }, []);

  return (
    <header className="header sticky-top">
      {/* Topbar */}
      <div className="topbar py-2 text-white">
        <div className="container d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
          <div className="d-none d-md-flex align-items-center">
            <i className="bi bi-clock me-2"></i> Lunes - Sábado, 8AM a 10PM
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-phone me-2"></i> Llámanos ahora +51 936820832
          </div>
        </div>
      </div>

      {/* Branding & Navigation */}
      <div className="branding py-3">
        <div className="container d-flex align-items-center justify-content-between position-relative">
          <a href="/" className="logo d-flex align-items-center me-auto d-block d-lg-none d-xl-flex">
            <img src={logo} alt="Logo Medicio" />
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#carrusel" className="active">Inicio</a></li>
              {/* <li><Link to="/carrusel" className="active">Inicio</Link></li> */}

              <li><a href="#solicitar">Solicitar Historial Médico</a></li>
              {/* <li><Link to="/solicitar">Solicitar Historial Médico</Link></li> */}

              <li><a href="#consulta-estado">Consultar Estado de Solicitudes</a></li>
              {/* <li><Link to="/consulta-estado">Consultar Estado de Solicitudes</Link></li> */}

              <li><a href="#mi-historial">Mi Historial</a></li>
              {/* <li><Link to="/mi-historial">Mi Historial</Link></li> */}

              <li><a href="#contact">Contacto</a></li>
              {/* <li><Link to="/contacto">Contacto</Link></li> */}

            </ul>
          </nav>

          <i
            className="mobile-nav-toggle d-lg-none bi bi-list"
            aria-label="Abrir menú"
            style={{ cursor: 'pointer', fontSize: '24px' }}
          ></i>
          <a href='#perfil' className="cta-btn ms-3">Ver perfil</a>
          {/* <Link to="#perfil" className="cta-btn ms-3">Ver perfil</Link> */}

        </div>
      </div>
    </header>
  );
}

export default Header;
