/** @format */

import React, { Component } from "react";
import "./Pokemon.css";
import SearchBox from "./SearchBox";
import { Card } from "./Card";
const Pokemon = (props) => {
  return props.pokemons.map((pokemon) => <Card name={pokemon.name}></Card>);
};
const Data=(props)=>{
  const style = {
    width: "1900px",
    height: "1400px",
  };
  const main={
    display:'flex',
  }
  return(
    <div style={main}>
          <div style={style}>
            <Pokemon pokemons={props.pokemons}></Pokemon>
          </div>
        </div>
  )
}
class PokemonApp extends Component {
  state = {
    pokemons: [],
    search:''
  };
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((name) => this.setState({ pokemons: name.results }));
  }
  handleChange=(e)=>{
     this.setState({search:e.target.value});
  }
  render() {
    let comp;
    if(this.state.search===''){
      comp=<Data pokemons={this.state.pokemons}></Data>
    }
    else{
      let name='';
      this.state.pokemons.map((pokemon)=>{
        if(pokemon.name===this.state.search){
          name=this.state.search;
        }
      })
      comp=<Card name={name}></Card>
    }
    return (
      <div>
        <h1>Pokemon App</h1>
        <div className="searchbox">
          <SearchBox onchange={this.handleChange}/>
        </div>
        {comp}
      </div>
    );
  }
}
export default PokemonApp;
