// import BirreteWhite from "../assets/images/icon-birrete-white.png";
// import LogoSuPresenciaCooperativa from "../assets/images/logo-cooperativa-white.png";

// import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer-information">
          <h2>Contáctanos por nuestros canales de atención:</h2>
          <div>
            <span className="footer-icon">
              <img src="" />
            </span>
            <p>
              PBX: <a href="tel:+576017460101">[601] 7460101</a>
            </p>
          </div>
          <div>
            <span className="footer-icon">
              <img src="" />
            </span>
            <p>
              WhatsApp:{" "}
              <a
                target="__blank"
                href="https://api.whatsapp.com/send?phone=573208993195"
              >
                320 899 3195
              </a>
            </p>
          </div>
          <div>
            <span className="footer-icon">
              <img src="" />
            </span>
            <p>servicioalasociado@supresenciacooperativa.com</p>
          </div>
        </div>
        <div className="footer-logo">
          <p>Organiza:</p>
          <img src="" alt="Logo de Su Presencia Cooperativa" />
        </div>
      </section>
    </footer>
  );
};
