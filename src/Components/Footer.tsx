import BoehringerGreen from "../assets/images/footer/boehringer.svg";
import AcrossAcademy from "../assets/images/footer/across-academy.svg";
import Asociacion from "../assets/images/footer/asociacion-colombiana.svg";
import Asocolnef from "../assets/images/footer/asocolnef.svg";
import Cardiologia from "../assets/images/footer/cardiologia.svg";
import BoehringerWhite from "../assets/images/footer/boehringer-white.webp";

import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <h1 className="footer__title">#TuTurnoDeHacerHistoria</h1>
        <div className="footer__logos">
          <div className="footer__logos-section">
            <p>Invita Departamento Médico de:</p>
            <div className="footer__logos-section-logos">
              <img src={BoehringerGreen} alt="Boehringer Ingelheim" />
              <span className="footer__logos-line"></span>
              <img src={AcrossAcademy} alt="Across Academy" />
            </div>
          </div>
          <div className="footer__logos-section">
            <p>Avalado por:</p>
            <div className="footer__logos-section-logos">
              <img
                className="footer__logos-section-small"
                src={Asociacion}
                alt="Asociación Colombiana de Nefrología"
              />
              <span className="footer__logos-line"></span>
              <img
                className="footer__logos-section-asocolnef"
                src={Asocolnef}
                alt="Asocolnef"
              />
              <span className="footer__logos-line"></span>
              <img
                src={Cardiologia}
                alt="Sociedad Colombiana de Cardiología y Cirugía Cardiovascular"
              />
            </div>
          </div>
        </div>
        <div className="footer__legal">
          <p>
            "Material exclusivo para el cuerpo médico Colombiano. Material
            sujeto a derechos de propiedad intelectual. Este material podría
            contener conceptos u opiniones que son responsabilidad de los
            autores y no comprometen las opiniones del laboratorio auspiciante.
            Algunos materiales pueden mencionar productos, por favor tenga en
            cuenta que la información de seguridad de los mismos puede cambiar,
            consulte la información vigente en la Dirección Médica de Boehringer
            Ingelheim S.A., Teléfono: (+601) 319 91 00, e-mail:
            medfora.co@boehringer-ingelheim.com Dirección: Avenida Calle 116 No.
            7-15 oficina 1401, Piso 14, Edificio Torre Cusezar Bogotá D.C.
            Colombia."
          </p>
          <span className="footer__code">SC-CO-01650</span>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <img
            src={BoehringerWhite}
            alt="Boehringer Ingelheim"
            className="footer__logo"
          />
        </div>
        <div className="footer__bottom-center">
          <span>
            © 2010-2024 Boehringer Ingelheim International GmbH. Todos los
            derechos reservados.
          </span>
        </div>
        {/* <div className="footer__bottom-right">
          <span className="footer__icon-placeholder">
            <img src={Facebook} alt="Facebook" />
          </span>
          <span className="footer__icon-placeholder">
            <img src={LinkedIn} alt="Linkedin" />
          </span>
          <span className="footer__icon-placeholder">
            <img src={YouTube} alt="Youtube" />
          </span>
        </div> */}
      </div>
    </footer>
  );
};
