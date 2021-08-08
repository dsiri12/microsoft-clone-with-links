import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/">
        <img
          src="https://i.ibb.co/wwLhz98/logo.png"
          alt="Microsoft"
          className="logo"
        />
      </NavLink>

      <ul className="main-menu">
        <li>
          <NavLink to="/office" activeClassName="selected">
            Office
          </NavLink>
        </li>
        <li>
          <NavLink to="/windows" activeClassName="selected">
            Windows
          </NavLink>
        </li>
        <li>
          <NavLink to="/surface" activeClassName="selected">
            Surface
          </NavLink>
        </li>
        <li>
          <NavLink to="/xbox" activeClassName="selected">
            Xbox
          </NavLink>
        </li>
        <li>
          <NavLink to="/deals" activeClassName="selected">
            Deals
          </NavLink>
        </li>
        <li>
          <NavLink to="/support" activeClassName="selected">
            Support
          </NavLink>
        </li>
      </ul>

      <ul className="right-menu">
        <li>
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
