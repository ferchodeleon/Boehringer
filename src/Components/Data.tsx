import "../styles/Data.css";
import dataUbicationIcon from "../assets/images/icon-ubication.webp";

const Data = () => {
  return (
    <section id="data" className="data-container">
      <div className="data-title">
        <div className="data-title-line right"></div>
        <h2>Un evento de película</h2>
        <div className="data-title-line left"></div>
      </div>
      <div className="data-content-1">
        <p>
          El Hospital Universitario INNOVA, reunirá un grupo de médicos expertos
          que harán parte de un evento nunca antes visto, donde los casos
          clínicos serán el guión principal y los especialistas los verdaderos
          protagonistas. Un solo día, múltiples encuentros, y una serie de
          momentos que quedarán grabados en la memoria de todos los asistentes.
        </p>
      </div>
      {/* //TODO: Cambio de fuente por June Expt Variable */}
      <div className="data-content-2">
        <p>
          Prepárese para vivir una experiencia de película, donde cada charla,
          cada caso, y cada decisión será parte de un gran historia que solo se
          escribirá una vez: ese día.
        </p>
      </div>

      <div className="data-ubication-container">
        <div className="data-ubication-date">
          <p className="data-ubication-date__month">JULIO</p>
          {/* //TODO: Cambiar a June Expt Variable */}
          <p className="data-ubication-date__day">
            25 <span>AL</span> 27
          </p>
          <span className="data-ubication-date__line"></span>
        </div>

        <div className="data-ubication-icon">
          <img src={dataUbicationIcon} alt="data-ubication-icon" />
        </div>

        <div className="data-ubication-site">
          {/* //TODO: Cambiar a June Expt Variable */}
          <p>Santa Marta</p>
          <p>Hotel Hilton / Pozos Colorados </p>
        </div>
      </div>
    </section>
  );
};

export default Data;
