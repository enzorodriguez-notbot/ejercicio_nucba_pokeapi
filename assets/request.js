const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const fetchPokemons = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
};
