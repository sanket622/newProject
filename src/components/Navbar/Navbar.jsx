import './Navbar.css'
import vectorLogo from '../../assets/Vector.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Lending', path: '/lending' },
]

function Navbar({ onNavigate, currentPath }) {
  return (
    <header className="top-nav">
      <button type="button" className="brand-button" onClick={() => onNavigate('/')}>
        <img className="brand-logo" src={vectorLogo} alt="Rupee Yatra" />
      </button>
      <nav>
        {navLinks.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
            onClick={() => onNavigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="btn nav-apply-btn" type="button">
          Apply Loan
        </button>
        <button className="btn nav-repay-btn" type="button">
          Repay Loan
        </button>
      </div>
    </header>
  )
}

export default Navbar
