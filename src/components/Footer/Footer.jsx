import './Footer.css'
import footerWordmark from '../../assets/Group 13.png'
import partnerLogo from '../../assets/Vector 2.png'
import linkedinIcon from '../../assets/Linkedin.png'
import facebookIcon from '../../assets/Facebook.png'
import instagramIcon from '../../assets/Instagram.png'

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer paper-bg" id="contact">
      <div className="footer-main">
        <div className="footer-grid">
          <div>
            <h3>RUPEE YATRA</h3>
            <p>
              Providing individuals with quick financial solutions powered by advanced
              technology and a strong customer-first approach.
            </p>
            <h4>Partner</h4>
            <div className="partner-row">
              <img className="partner-logo" src={partnerLogo} alt="Loan2grow partner" />
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
                <img src={linkedinIcon} alt="" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src={facebookIcon} alt="" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        <img src={footerWordmark} alt="" />
      </div>
    </footer>
  )
}

export default Footer
