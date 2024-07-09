import React, { useState } from 'react';
import amongUsImage from '../../public/images/amonguscontennis.jpg'; // Importar la imagen local
import './Formulario.css'; // Importar archivo de estilos CSS

const Formulario = ({ onAgregarTarjeta }) => {
  const [nombre, setNombre] = useState('');
  const [faltas, setFaltas] = useState('');
  const [calificacion, setCalificacion] = useState('');
  const [materia, setMateria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarjeta = {
      nombre,
      faltas,
      calificacion,
      materia,
      foto: amongUsImage,
    };
    onAgregarTarjeta(nuevaTarjeta);

    // Limpia los campos del formulario después de enviar
    setNombre('');
    setFaltas('');
    setCalificacion('');
    setMateria('');
  };

  return (
    <div className="formulario">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Faltas:</label>
          <input
            type="number"
            value={faltas}
            onChange={(e) => setFaltas(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Calificación:</label>
          <input
            type="text"
            value={calificacion}
            onChange={(e) => setCalificacion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Materia:</label>
          <input
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            required
          />
        </div>
        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
};

export default Formulario;
