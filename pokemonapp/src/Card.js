/** @format */

import React from "react";
export const Card = (props) => {
  const style = {
    display:'inline-grid',
  };
  const img = {
    width: "200px",
    height: "200px",
    border:'3px solid red',
    borderRadius:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'10px',
    marginTop:'20px'
  };

  return (
    <div style={style}>
      <a href={`https://www.pokemon.com/us/pokedex/${props.name}`} target="_blank">
      <img
        src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
        alt=""
        style={img}></img>
      </a>
       <h2>{props.name}</h2>
    </div>
  );
};
