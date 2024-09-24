import React ,{ useState }from 'react'
import "./Header.css"
import { FaBars } from "react-icons/fa";
import logo from "../../assets/NavBar/logo.webp"
import { Link } from 'react-router-dom';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
    <nav className={`navbar ${isOpen ? "open" : ""}`} style={{position:"fixed"}}>
      <div className="navbar-logo">
        <img src={`${logo}`} height="" width="" alt="Logo" />{" "}
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeNavbar}>
          Home
        </Link>
        <Link to="/about-us" onClick={closeNavbar}>
          About Us
        </Link>
        <Link to="/projects" onClick={closeNavbar}>
          Projects
        </Link>
        <Link to="/blogs" onClick={closeNavbar}>
          Blogs
        </Link>
        <Link to="/contact-us" onClick={closeNavbar}>
          Contact Us
        </Link>
        <a>
        <FaBars />
        </a>
      </div>
      <div
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleNavbar}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
    </>
  )
}

export default Header
