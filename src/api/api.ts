import axios from 'axios'

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

export const fetchListOfPokemons = (pokemonType: string = '') => {
  if (pokemonType) {
    return axios.get(`type/${pokemonType}`)
  } else {
    return axios.get('pokemon/?offset=0&limit=1200')
  }
}

export const fetchTypesList = () => axios.get('type/')

export const fetchPokemonStats = (pokemonId: string) => {
  axios.get(`pokemon/${pokemonId}`)
}
