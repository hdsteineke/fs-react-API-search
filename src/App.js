import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    async function load() {
      const data = await getPokemon();

      setPokemon(data.results);

    }
    load();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {pokemon.map(({ pokebase, url_image, hp, type_1, type_2, ability_1 }, i) => 
          <div key={pokebase + i}>
            <h3>{pokebase}</h3>
            <img src={url_image} />
            <p>hp: {hp}</p>
            <p>type 1: {type_1}</p>
            <p>type 2: {type_2}</p>
            <p>special ability: {ability_1}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
