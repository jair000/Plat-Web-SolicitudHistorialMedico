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
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Useful Links', items: ['Home', 'About us', 'Services', 'Terms of service', 'Privacy policy'] },
            { title: 'Our Services', items: ['Web Design', 'Web Development', 'Product Management', 'Marketing', 'Graphic Design'] },
            { title: 'Hic solutasetp', items: ['Molestiae accusamus iure', 'Excepturi dignissimos', 'Suscipit distinctio', 'Dilecta', 'Sit quas consectetur'] },
            { title: 'Nobis illum', items: ['Ipsam', 'Laudantium dolorum', 'Dinera', 'Trodelas', 'Flexo'] }
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
          <span>Copyright</span> 
          <strong className="px-1 sitename">Medicio</strong> 
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by  <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer