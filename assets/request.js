const BASE_URL = "https://pokeapi.co/api/v2/pokemon/1";

const getPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  console.log(data);
};
getPokemones();
