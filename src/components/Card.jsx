// Card.jsx
import React from 'react';

const Card = ({ nombre, faltas, calificacion, materia, foto, onRemove }) => {
  return (
    <div className="card">
      <img src={foto} alt="Foto de perfil" />
      <h3>{nombre}</h3>
      <p>Faltas: {faltas}</p>
      <p>Calificación: {calificacion}</p>
      <p>Materia: {materia}</p>
      <button onClick={onRemove}>Remover</button>
    </div>
  );
};

export default Card;

