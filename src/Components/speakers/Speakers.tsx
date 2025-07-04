import React, { useState } from "react";
import Card from "./Card";

import karenFeriz from "../../assets/images/speakers/karen-feriz.webp";
import carlosSanchez from "../../assets/images/speakers/carlos-sanchez.webp";
import juanFigueroa from "../../assets/images/speakers/Juan-F-Figueroa.webp";
import SalomoonDaguer from "../../assets/images/speakers/Salomoon-Daguer.webp";
import JonthFlechas from "../../assets/images/speakers/Jonth-Flechas.webp";
import GilbertoCastillo from "../../assets/images/speakers/GilbertoCastillo.webp";
import MauricioMejiia from "../../assets/images/speakers/MauricioMejiia.webp";
import JuanEstebanGomez from "../../assets/images/speakers/juanEstebanGomez.webp";
import fernandoRoseroMera from "../../assets/images/speakers/fernandoRoseroMera.webp";
import kateirContreras from "../../assets/images/speakers/kateirContreras.webp";
import vivianaQuintero from "../../assets/images/speakers/vivianaQuintero.webp";
import arrowRight from "../../assets/images/right.webp";
import arrowLeft from "../../assets/images/left.webp";

import "../../styles/speakers/Speakers.css";

const speakersData = [
  {
    photo: karenFeriz,
    name: "Dra. Karen Feriz",
    occupation: "Médica internista y endocrinóloga",
    description:
      "Jefe del Servicio de Endocrinología Fundación Valle de Lili Hospital Universitario. Docente posgrado Endocrinología, docente posgrado Medicina Interna, Universidad ICESI.\n Ex coordinadora comité Nacional Diabetes. Asociación Colombiana de Endocrinología, Diabetes y Metabolismo.",
  },
  {
    photo: carlosSanchez,
    name: "Dr. Carlos Sánchez Vallejo",
    occupation: "Médico internista y cardiólogo",
    description:
      "Especialista en medicina interna y cardiología de adultos de la Universidad El Bosque. Magister en Epidemiología. Cardiólogo clínico institucional en la Fundación Santa Fe de Bogotá. Fellow de la Sociedad Europea de Cardiología.",
  },
  {
    photo: juanFigueroa,
    name: "Dr. Juan F. Figueroa",
    occupation: "Médico Cardiólogo",
    description:
      "Máster en ecocardiografía Clínica y resonancia cardíaca. Candidato a Máster de Nutrición Clínica y alimentación  Universidad de Barcelona. Presidente del capítulo de Enfermedad Coronaria SCC. Profesor de la universidad de la Universidad de los Andes, Universidad del Rosario y  Universidad el Bosque.",
  },
  {
    photo: SalomoonDaguer,
    name: "Dr. Salomón Daguer",
    occupation: "Médico cirujano",
    description:
      "Médico internista y endocrinólogo de la Universidad Pontificia Bolivariana (UPB). SURA EPS. Clínica el campestre. Asesor científico Comfama. Docente Universidad Pontificia Bolivariana (UPB).",
  },
  {
    photo: JonthFlechas,
    name: "Dr. Jonth Flechas",
    occupation: "Médico internista y Médico general",
    description:
      "Especialista Nefrología Fundación Universitaria Ciencias de la Salud.\nMagister Gerencia servicios de salud Universidad Nacional de Colombia.\nNefrólogo clínico y del grupo de trasplante renal Fundación Clínica Shaio.\nDocente adscrito programa nefrología FUCS, Médico Clínica cuidado renal Dávita Hospital San José Bogotá.",
  },
  {
    photo: GilbertoCastillo,
    name: "Dr. Gilberto Castillo",
    occupation: "Médico internista y cardiólogo",
    description:
      "Ex vicepresidente de la Sociedad Colombiana de Cardiología. Director científico de Cardioprevent IPS. Coordinador Médico de la Unidad Cardiovascular de la Clínica Imbanaco. Certificado en life coach y coach de salud por TISOC. Conferencista, coach y mentor de bienestar y felicidad.",
  },
  {
    photo: MauricioMejiia,
    name: "Dr. Mauricio Mejía",
    occupation: "Médico y reabilitador deportivo",
    description:
      "Especialista en medicina del deporte. Jefe y fundador del servicio de medicina deportiva y rehabilitación enfermedades inmunomediadas Clínica los nogales, Bogotá. Jefe del departamento Médico de carrera ultradistancia Desert Marathon, Guajira, Colombia.",
  },
  {
    photo: JuanEstebanGomez,
    name: "Dr. Juan Esteban Gómez",
    occupation: "Médico cardiólogo",
    description:
      "Jefe de Cardiología de la Fundación Valle del Lili, Cali, Colombia. Director del Departamento de Investigación de la Sociedad Colombiana de Cardiología. Director del Centro de Investigación de la Sociedad Interamericana de Cardiología. Docente de pregrado y postgrado. Universidad Icesi, Cali, Colombia.",
  },
  {
    photo: fernandoRoseroMera,
    name: "Dr. Fernando Rosero Mera",
    occupation: "Médico y cirujano",
    description:
      "Especialista en salud sexual y sexología Clínica, Universidad de Barcelona.\n Especialista en Medicina Sexual y Sexología Clínica, Clínicas de Marly, Bogotá, Colombia. \n Expresidente de la Asociación Colombiana de Salud Sexual (ACSEX). Docente universitario.",
  },
  {
    photo: kateirContreras,
    name: "Dra. Kateir Contreras",
    occupation: "Médica internista y nefróloga",
    description:
      "Magíster en educación para profesionales de la salud. Coordinadora del postgrado en Nefrología de la Pontificia Universidad Javeriana. Jefe unidad de Nefrología, Hospital Universitario San Ignacio.\n Profesora Asociada, Universidad Nacional de Colombia.",
  },
  {
    photo: vivianaQuintero,
    name: "Dra. Viviana Quintero",
    occupation: "Médica internista y cardióloga",
    description:
      "Universidad CES, Medellín. Médico Cirujano, Universidad del Valle. Cardióloga, Clínica El Rosario de Medellín. Profesor Instructor del postgrado de Cardiología Clínica y Medicina de Urgencias, Universidad CES de Medellín.",
  },
];

const Speakers: React.FC = () => {
  const [current, setCurrent] = useState(1); // Empieza con el card del centro

  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + speakersData.length) % speakersData.length
    );
  const next = () => setCurrent((prev) => (prev + 1) % speakersData.length);

  return (
    <div id="speakers" className="speakers-carousel-container">
      <div className="speakers-carousel-title">
        <h2>Speakers</h2>
      </div>
      <div className="carousel-container">
        <div
          className="carousel-arrow left"
          onClick={prev}
          aria-label="Anterior"
        >
          <img src={arrowLeft} alt="arrow left" />
        </div>
        <div className="speakers-carousel">
          {speakersData.map((speaker, idx) => {
            let position = "";
            if (idx === current) position = "center";
            else if (
              idx ===
              (current - 1 + speakersData.length) % speakersData.length
            )
              position = "left";
            else if (idx === (current + 1) % speakersData.length)
              position = "right";
            else position = "hidden";
            return (
              <div key={speaker.name} className={`carousel-card ${position}`}>
                <Card {...speaker} />
              </div>
            );
          })}
        </div>
        <div
          className="carousel-arrow right"
          onClick={next}
          aria-label="Siguiente"
        >
          <img src={arrowRight} alt="arrow right" />
        </div>
        <div className="carousel-indicators">
          {speakersData.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot${idx === current ? " active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
