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
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav text-center">
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
              className="nav-link"
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
              className="nav-link"
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
    </nav>
  );
};


export default Navbar;
