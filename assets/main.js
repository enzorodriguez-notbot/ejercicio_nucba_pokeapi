const pokemonsContainer = document.querySelector("pokemon-info-container");
const loader = document.querySelector(".card-container");

const appState = {
  currentURL: "https://pokeapi.co/api/v2/pokemon/?limit=8&offset=0",
  isFetching: false,
};

const pokemonTemplate = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name.toUpperCase(),
    image: pokemon.sprites.other.home.front_default,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    types: pokemon.types,
  };
};
