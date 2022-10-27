import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/">
          <img src={logo} alt="Logo" className="img-fluid pointer" />
        </Link>

        <nav>
          <ul className="list-items">
            <li>
              <Link to="/">Home </Link>
            </li>

            <Link to="/categories">
              <li>Categories</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
