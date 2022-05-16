export async function getPokemon(query) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?query=${query}`);
  const data = await rawResponse.json();

  return data;
}