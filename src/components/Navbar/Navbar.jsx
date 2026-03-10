import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Lending', path: '/lending' },
]

function Navbar({ onNavigate, currentPath }) {
  return (
    <header className="top-nav">
      <div className="brand">RUPEE YATRA</div>
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
      <button className="btn btn-primary" type="button">
        Login / Signup
      </button>
    </header>
  )
}

export default Navbar
