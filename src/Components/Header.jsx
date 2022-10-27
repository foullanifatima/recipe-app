import logo from '../assets/Logo.png'

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <img src={logo} alt="Logo" className="img-fluid pointer" />
        <nav>
          <ul className="list-items">
            <li>Home</li>
            <li>Categories</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
