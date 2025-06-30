import React from "react";
import "../../styles/speakers/Card.css";

interface CardProps {
  photo: string; // URL de la foto
  name: string;
  occupation: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  photo,
  name,
  occupation,
  description,
}) => {
  return (
    <div className="speaker-card">
      <div className="speaker-card__image-container">
        <img src={photo} alt={name} className="speaker-card__image" />
      </div>
      <div className="speaker-card__content">
        {/* //TODO: Cambiar a June Expt Variable */}
        <h3 className="speaker-card__name">{name}</h3>
        <p className="speaker-card__occupation">{occupation}</p>
        <p className="speaker-card__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
