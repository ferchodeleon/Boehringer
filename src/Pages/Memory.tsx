import MemoryImage from "../Assets/images/memory-icon.png";

import "../styles/Memory.css";

const Memory = () => {
  return (
    <main className="memory-page">
      <section className="memory-section">
        <h1 className="memory-title">Memorias</h1>
        <div className="memory-content">
          <img src={MemoryImage} alt="Cámara rodaje" className="memory-icon" />
          <div className="memory-text">
            <h2 className="memory-subtitle">Rodaje en proceso</h2>
            <p className="memory-description">
              Muy pronto en este espacio podrás revivir los mejores momentos.
              Prepárate para ver las escenas, fotografías y protagonistas que
              hicieron parte de INNOVA HOSPITAL. ¡Espéralo aquí!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Memory;
