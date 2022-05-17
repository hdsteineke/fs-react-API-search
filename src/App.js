import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import Spinner from './Spinner';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);
    
    const { data: { results }, } = await getPokemon(query);
    setPokemon(results);
    
    setIsLoading(false);
  }
  

  useEffect(() => {
    load();

  }, [query]); //eslint-disable-line

  async function handleSearch(e) {
    e.preventDefault();

    load();
    
  }

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input onChange={e => setQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <header className="App-header">
        { isLoading ? <Spinner /> : 
          pokemon.map(({ pokebase, url_image, hp, type_1, type_2, ability_1 }, i) => 
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
