import React from 'react';
import '../CursosBox/CursosBox.css';

function CursosBox({ title, instructor, duration, image }) {
  return (
    <div className="CursoBox">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Professor: {instructor}</p> 
      <p>Duração: {duration}</p>
      <button>Inscreva-se</button>
    </div>
  );
}

export default CursosBox;
