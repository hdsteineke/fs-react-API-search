import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    async function load() {
      const rawResponse = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
      const data = await rawResponse.json();

      setPokemon(data.results);
      console.log(data.results);

    }
    load();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {pokemon.map((aPokemon, i) => 
          <div key={pokemon.pokebase + i}>
            <h3>{aPokemon.pokebase}</h3>
            <img src={aPokemon.url_image} />
            <p>hp: {aPokemon.hp}</p>
            <p>type 1: {aPokemon.type_1}</p>
            <p>type 2: {aPokemon.type_2}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
