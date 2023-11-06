import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PokemonApp from './PokemonApp';
import CardList from './CardList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonApp></PokemonApp>
  </React.StrictMode>
);