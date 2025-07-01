import React, { useState } from "react";
import "../styles/Agent.css";
import arrowUp from "../assets/images/up.webp";

const morningSchedule = [
  {
    time: "08:00 a.m - 08:15 a.m",
    title: "Registro",
    speakers: "Todos",
  },
  {
    time: "08:15 a.m - 08:50 a.m",
    title:
      "Prescripción de ejercicio en menos de 30min: estrategias efectivas para el paciente CRM",
    speakers: "Dr. Mauricio Mejía",
  },
  {
    time: "08:50 a.m - 09:30 a.m",
    title: "Tras la cortina de la TFG para evaluar la función renal",
    speakers: "Dr. Jhoni Flechas",
  },
  {
    time: "09:30 a.m - 10:00 a.m",
    title: "IsglT2: donde sí, donde no y puntos medios",
    speakers: "Dr. Carlos Sánchez",
  },
  {
    time: "10:00 a.m - 10:45 a.m",
    title: "Falla cardíaca y renal aguda: tips and tricks",
    speakers: "Dr. Jhoni Flechas y Dra. Viviana Quintero",
  },
  {
    time: "10:45 a.m - 11:00 a.m",
    title: "Break",
    speakers: "Todos",
  },
  {
    time: "11:00 a.m - 11:45 a.m",
    title: "Perlas cardiovasculares: cómo manejar el riesgo en pacientes CRM",
    speakers: "Dr. Carlos Sánchez y Dra. Karen Feriz",
  },
  {
    time: "11:40 a.m - 12:30 p.m",
    title:
      "Abordaje integral de la fragilidad y polifarmacia en el paciente CRM: desafíos y estrategias",
    speakers: "Dra. Viviana Quintero, Dra. Karen Feriz y Dra. Kateir Contreras",
  },
];

const afternoonSchedule = [
  {
    time: "12:30 p.m - 01:30 p.m",
    title: "Almuerzo",
    speakers: "Todos",
  },
  {
    time: "01:30 p.m - 02:15 p.m",
    title: "Del gimnasio al dormitorio: sexualidad y salud CV sin tabues",
    speakers: "Dr. Mauricio Mejía y Dr. Fernando Rosero",
  },
  {
    time: "02:15 p.m - 03:00 p.m",
    title: "Un paciente, tres caminos",
    speakers: "Dr. Juan Gómez, Dra. Kateir Contreras y Dr. Salomon Daguer",
  },
  {
    time: "03:00 p.m - 03:15 p.m",
    title: "Break",
    speakers: "Todos",
  },
  {
    time: "03:15 p.m - 03:50 p.m",
    title: "Del consultorio a la cocina: claves nutricionales en el paciente.",
    speakers: "Dr. Juan Francisco Figueroa",
  },
  {
    time: "03:50 p.m - 04:45 p.m",
    title: "¿Cómo ser el coach de su paciente?",
    speakers: "Dr. Gilberto Castillo",
  },
  {
    time: "04:45 p.m - 05:00 p.m",
    title: "Cierre académico",
    speakers: "Todos",
  },
  {
    time: "07:00 p.m",
    title: "Cena de clausura",
    speakers: "Todos",
  },
];

const Agend: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<
    "morning" | "afternoon"
  >("morning");
  const [fadeClass, setFadeClass] = useState("fade-in");

  const handleTabClick = (session: "morning" | "afternoon") => {
    if (session === selectedSession) return;
    setFadeClass("fade-out");
    setTimeout(() => {
      setSelectedSession(session);
      setFadeClass("fade-in");
    }, 350); // Duración igual a la animación CSS
  };

  const schedule =
    selectedSession === "morning" ? morningSchedule : afternoonSchedule;

  return (
    <div id="agenda" className="agenda-container">
      <div className="agenda-header">
        <h1>Agenda</h1>
        <p>
          Prepárate para vivir cada escena de este gran día en el Hospital
          Universitario INNOVA. Aquí te compartimos el itinerario de esta
          jornada de película, donde tú eres parte del elenco principal.
        </p>
      </div>
      <div className="agenda-schedule">
        <div className="agenda-tabs">
          <div className="agenda-tabs-container">
            <button
              className={selectedSession === "morning" ? "active" : ""}
              onClick={() => handleTabClick("morning")}
            >
              Jornada mañana <img width={25} src={arrowUp} alt="arrow-up" />
            </button>
            <p className="agenda-tabs-container-item-time">
              8:00 a.m a 12:30 p.m
            </p>
          </div>
          <div className="agenda-tabs-container">
            <button
              className={selectedSession === "afternoon" ? "active" : ""}
              onClick={() => handleTabClick("afternoon")}
            >
              Jornada Tarde <img width={25} src={arrowUp} alt="arrow-up" />
            </button>
            <p className="agenda-tabs-container-item-time">
              12:30 p.m a 7:00 p.m
            </p>
          </div>
        </div>

        <div className={`agenda-items-animated ${fadeClass}`}>
          {schedule.map((item, idx) => (
            <div className="agenda-item" key={idx}>
              <div className="agenda-time">
                {item.time.split(" - ").map((t, i) => (
                  <div key={i}>{t}</div>
                ))}
              </div>
              <div className="agenda-details">
                <div className="agenda-title">{item.title}</div>
                <div className="agenda-speakers">{item.speakers}</div>
              </div>
              <div className="agenda-underline" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agend;
