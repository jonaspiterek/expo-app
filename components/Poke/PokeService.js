export class PokeService {
  getPokemonByFirstLetter = async (letter) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1000`;

    const settings = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, settings);
    const data = await response.json();

    const letterId = letter === '#' ? '%23' : letter;
    const filteredPokemon = data.results.filter(
      (pokemon) =>
        pokemon.name.charAt(0).toLowerCase() === letterId.toLowerCase()
    );

    return filteredPokemon;
  };
}
