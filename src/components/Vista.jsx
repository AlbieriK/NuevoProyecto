import React from 'react';

const Vista = ({ tarjetas, onRemoverTarjeta }) => {
  return (
    <div className="vista">
      <h2>Tarjeta</h2>
      <div className="card-container">
        {tarjetas.map((tarjeta, index) => (
          <div className="card" key={index}>
            <img src={tarjeta.foto} alt="Foto" />
            <h3>{tarjeta.nombre}</h3>
            <p>Faltas: {tarjeta.faltas}</p>
            <p>Calificación: {tarjeta.calificacion}</p>
            <p>Materia: {tarjeta.materia}</p>
            <button onClick={() => onRemoverTarjeta(index)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vista;
