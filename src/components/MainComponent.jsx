// MainComponent.jsx
import React, { useState } from 'react';
import Card from './Card';

const MainComponent = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    faltas: '',
    calificacion: '',
    materia: '',
  });
  const [cards, setCards] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      ...formData,
      foto: '../images/amngscontennis.jpg',
    };
    setCards([...cards, newCard]);
    setFormData({
      nombre: '',
      faltas: '',
      calificacion: '',
      materia: '',
    });
  };

  const handleRemove = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  return (
    <main>
      <section className="formulario">
        <h2>Formulario </h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label>Faltas:</label>
          <input
            type="number"
            name="faltas"
            value={formData.faltas}
            onChange={handleChange}
            required
          />

          <label>Calificación:</label>
          <input
            type="number"
            name="calificacion"
            value={formData.calificacion}
            onChange={handleChange}
            required
          />

          <label>Materia:</label>
          <input
            type="text"
            name="materia"
            value={formData.materia}
            onChange={handleChange}
            required
          />

          <button type="submit">Aceptar</button>
        </form>
      </section>

      <section className="vista">
        <h2>Tarjeta</h2>
        <div className="card-container">
          {cards.map((card, index) => (
            <Card key={index} {...card} onRemove={() => handleRemove(index)} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainComponent;
