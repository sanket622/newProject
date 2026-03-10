import './Footer.css'

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer paper-bg" id="contact">
      <div className="footer-grid">
        <div>
          <h3>RUPEE YATRA</h3>
          <p>
            Providing individuals with quick financial solutions powered by advanced
            technology and a strong customer-first approach.
          </p>
          <h4>Partner</h4>
          <div className="partner-row">
            <div className="partner-logo">loan2grow</div>
            <button className="btn btn-secondary" type="button">
              Visit
            </button>
          </div>
        </div>

        <div>
          <h4>Quick Access</h4>
          <button type="button" className="footer-link" onClick={() => onNavigate('/')}>
            Home
          </button>
          <button type="button" className="footer-link" onClick={() => onNavigate('/about')}>
            About
          </button>
          <button type="button" className="footer-link" onClick={() => onNavigate('/contact')}>
            Contact
          </button>
          <button type="button" className="footer-link" onClick={() => onNavigate('/lending')}>
            Apply Now
          </button>
        </div>

        <div>
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Security Alert</a>
        </div>

        <div>
          <h4>Social Links</h4>
          <div className="social-row" aria-label="social-links">
            <a href="#" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              o
            </a>
          </div>
        </div>
      </div>

      <p className="footer-wordmark">RUPEE YATRA</p>
    </footer>
  )
}

export default Footer
