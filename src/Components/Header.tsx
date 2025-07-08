import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo.webp";

import "../styles/Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const onCloseMenu = () => setIsMenuOpen(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isOpen = isMenuOpen ? "open" : "";

  console.log(location);

  const handleAgendaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onCloseMenu();

    if (location.pathname === "/") {
      // Si estamos en la página inicial, solo hacer scroll al anchor
      const agendaElement = document.getElementById("agenda");
      if (agendaElement) {
        agendaElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a la página inicial con el anchor
      navigate("/#agenda");
    }
  };

  const handleInicioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onCloseMenu();

    if (location.pathname === "/") {
      // Si estamos en la página inicial, solo hacer scroll al anchor
      const inicioElement = document.getElementById("inicio");
      if (inicioElement) {
        inicioElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a la página inicial con el anchor
      navigate("/#inicio");
    }
  };

  const handleSpeakersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onCloseMenu();

    if (location.pathname === "/") {
      // Si estamos en la página inicial, solo hacer scroll al anchor
      const speakersElement = document.getElementById("speakers");
      if (speakersElement) {
        speakersElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a la página inicial con el anchor
      navigate("/#speakers");
    }
  };

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
            <a href="/#inicio" onClick={handleInicioClick}>
              Inicio
            </a>
          </li>
          <li className="separator" aria-hidden="true"></li>
          <li>
            <a href="/#agenda" onClick={handleAgendaClick}>
              Agenda
            </a>
          </li>
          <li className="separator" aria-hidden="true"></li>
          <li>
            <a href="/#speakers" onClick={handleSpeakersClick}>
              Speakers
            </a>
          </li>
          <li className="separator" aria-hidden="true"></li>
          <li>
            <a href="/memory" onClick={onCloseMenu}>
              Memorias
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
