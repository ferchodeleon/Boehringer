import { useState } from "react";

// import "../styles/Header.css";

// import LogoImpulsa from "../assets/images/impulsa-logo.png";
// import Separator from "../assets/images/separator.png";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const onCloseMenu = () => setIsMenuOpen(false);
  const location = useLocation();
  const isOpen = isMenuOpen ? "open" : "";

  console.log(location);

  return (
    <header
      style={{
        backgroundColor: location.pathname === "/stands" ? "#E74029" : "",
      }}
    >
      <div className="header-logo">
        <img src="" alt="Logo Impulsa" />
        <button
          className={`burger ${isOpen}`}
          aria-label="Botón para abrir y cerrar el menú"
          onClick={toggleMenu}
        ></button>
      </div>
      <div className={`header-background ${isOpen}`}></div>
      <div className={`header-menu ${isOpen}`}>
        <nav>
          <ul>
            <a style={{ animationDelay: `0.${2}s` }} href="/#whatisimpulsa">
              <li onClick={onCloseMenu}>
                <span className="header-menu__img">
                  <img src="" alt="Icon Impulsa" />
                </span>
                ¿Qué es Impulsa?
              </li>
            </a>
            <a style={{ animationDelay: `0.${2}s` }} href="#whoweare">
              <li onClick={onCloseMenu}>
                <span className="header-menu__img">
                  <img src="" alt="Icon Impulsa" />
                </span>
                ¿Quiénes somos?
              </li>
            </a>
            <a style={{ animationDelay: "0.3s" }} href="#marcas">
              <li onClick={onCloseMenu}>
                <span className="header-menu__img">
                  <img src="" alt="Icon Impulsa" />
                </span>
                Marcas
              </li>
            </a>
            <a style={{ animationDelay: "0.5s" }} href="#map">
              <li onClick={onCloseMenu}>
                <span className="header-menu__img">
                  <img src="" alt="Icon Impulsa" />
                </span>
                ¿Cómo llegar?
              </li>
            </a>
            <a style={{ animationDelay: "0.5s" }} href="/stands">
              <li onClick={onCloseMenu}>
                <span className="header-menu__img">
                  <img src="" alt="Icon Impulsa" />
                </span>
                Mapa
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};
