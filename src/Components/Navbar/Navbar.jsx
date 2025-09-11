import { Link } from "react-scroll";
import logo from "../../assets/Logo_recorte.png";
import "./Navbar_Style.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark container-fluid justify-content-between ${
        scrolled ? "scrolled" : ""
      }`}
    >

        <img src={logo} alt="logo" className="navbar-brand" />
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-none d-md-flex" id="navbarNavDesktop">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="sobre-mi"
                smooth={true}
                duration={500}
                spy={true}
                offset={-200}
              >
                Sobre mi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="proyectos"
                smooth={true}
                duration={500}
                spy={true}
                offset={-200}
              >
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="habilidades"
                className="nav-link text-center"
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
              >
                Habilidades
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="formacion"
                className="nav-link text-center"
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
              >
                Formación
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="offcanvas offcanvas-start text-bg-dark d-md-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Navbar
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
  </nav>
  );
};

export default Navbar;
