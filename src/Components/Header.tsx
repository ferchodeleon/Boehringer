import { useState } from "react";
import { useLocation } from "react-router-dom";

import Logo from "../assets/images/logo.png";

import "../styles/Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const onCloseMenu = () => setIsMenuOpen(false);
  const location = useLocation();
  const isOpen = isMenuOpen ? "open" : "";

  console.log(location);

  return (
    <header id="inicio" className="custom-header">
      <div className="header-logo-text">
        <img src={Logo} alt="Logo Boehringer" />
        <button
          className={`burger ${isOpen}`}
          aria-label="Abrir menú"
          onClick={toggleMenu}
        ></button>
      </div>
      <div className={`header-background ${isOpen}`}></div>
      <nav className={`header-nav header-menu ${isOpen}`}>
        <ul>
          <li>
            <a href="#inicio" onClick={onCloseMenu}>
              Inicio
            </a>
          </li>
          <li className="separator" aria-hidden="true"></li>
          <li>
            <a href="#agenda" onClick={onCloseMenu}>
              Agenda
            </a>
          </li>
          <li className="separator" aria-hidden="true"></li>
          <li>
            <a href="#speakers" onClick={onCloseMenu}>
              Speakers
            </a>
          </li>
          <li className="separator" aria-hidden="true"></li>
          <li>
            <a href="#memorias" onClick={onCloseMenu}>
              Memorias
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
