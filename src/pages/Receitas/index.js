import React from 'react';
import { useParams } from 'react-router-dom';
import api from './../../chef.json';
import './receitas.css';

function Receitas() {
  const { id } = useParams();
  const receita = api.find((r) => r.id === parseInt(id));

  if (!receita) {
    return <div>Receita não encontrada</div>;
  }

  return (
    <div>
      
      <div className="container">
        <h1>{receita.name}</h1>
        <p>Categoria: {receita.category}</p>
        <h2>Ingredientes:</h2>
        <ul>
          {receita.ingredients.map((ingrediente) => (
            <li key={ingrediente}>{ingrediente}</li>
          ))}
        </ul>
        <h2>Instruções:</h2>
        <p>{receita.instructions}</p>
      </div>
    </div>
  );
}

export default Receitas;
