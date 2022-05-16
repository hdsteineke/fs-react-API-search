export async function getPokemon() {
  const rawResponse = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await rawResponse.json();

  return data;
}