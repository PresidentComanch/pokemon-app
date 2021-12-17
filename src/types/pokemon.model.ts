
export type pokemonListItem = {
  name: string;
  url: string;
};

export type PokemonFromFetchingByType = {
  pokemon: pokemonListItem;
};

export interface listOfPokemonsState {
  pokemonsList: pokemonListItem[];
  pokemonsType: [];
}

export interface pokemonData {
  name: string;
  types: string[];
  abilities: string[];
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  weight: number;
}

export interface PokemonsDataToDisplayState {
  filterQuery: string;
  qtyPerPage: number;
}

export type TypeFormServer ={
  name: string;
  url: string;
}
