import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import api from './../../chef.json';
import './home.css';

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleToggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = [...new Set(api.map(receita => receita.category)), 'Todos'];

  const filteredRecipes = selectedCategory === 'Todos'
    ? api
    : api.filter(receita => receita.category === selectedCategory);

  return (
    <div>
      <header className="header">
        <div className="header-text">
          <h1>As melhores receitas</h1>
          <p>Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.</p>
        </div>
      </header>

      <section className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="grid">
        {filteredRecipes.map((receita, index) => (
          <div
            className={`grid-item ${activeIndex === index ? 'active' : ''}`}
            key={receita.id}
          >
            <h3 onClick={() => handleToggleDescription(index)}>
              {receita.name}
            </h3>
            <p className="description">{receita.description}</p>
            <Link to={`/receitas/${receita.id}`}>Ver receita</Link>  {/* Mantenha esta linha se você ainda precisa do Link */}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
