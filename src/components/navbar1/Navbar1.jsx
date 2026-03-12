import './Navbar1.css'
import brandLogo from '../../assets/Vector.png'
import adminAvatar from '../../assets/Ellipse 109.png'

function Navbar1() {
  return (
    <header className="navbar1">
      <img className="navbar1-brand" src={brandLogo} alt="Rupee Yatra" />

      <button className="navbar1-user" type="button">
        <img src={adminAvatar} alt="Main Admin" />
        <span>Main Admin</span>
        <span className="navbar1-caret" aria-hidden="true">
          ▼
        </span>
      </button>
    </header>
  )
}

export default Navbar1
