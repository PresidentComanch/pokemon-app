import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchListOfPokemons } from '../../api/api'
import { RootState } from '../../app/store'
import { listOfPokemonsState, PokemonFromFetchingByType } from '../../types/pokemon.model'

const initialState: listOfPokemonsState = {
  pokemonsList: [],
  pokemonsType: [],
}

export const fetchAsyncListOfPokemons = createAsyncThunk(
  'articles/fetchAsyncListOfPokemons',
  async (pokemonsType: string[]) => {
    let result: any[] = []

    if (pokemonsType.length === 0) {
      const response = await fetchListOfPokemons()
      result = [...response.data.results]
    } else {
      for (const pokeType of pokemonsType) {
        const response = await fetchListOfPokemons(pokeType)
        const treatedResponse = response.data.pokemon.map((pokemon: PokemonFromFetchingByType) => (
          {
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url,
          }
        ))
        result = (result.length === 0) ? [...treatedResponse] : [...result, ...treatedResponse]
      }
    }

    return result.filter((el, i, arr) => i === arr.findIndex(check => check.name === el.name))
  },
)

export const listOfPokemonsSlice = createSlice({
  name: 'listOfPokemons',
  initialState,
  reducers: {
    setPokemonsType: (state, action) => {
      state.pokemonsType = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncListOfPokemons.fulfilled, (state, action) => {
        state.pokemonsList = action.payload
      })
  },
})

export const { setPokemonsType } = listOfPokemonsSlice.actions
export const getPokemonsList = (state: RootState) => state.listOfPokemons.pokemonsList
export const getPokemonTypes = (state: RootState) => state.listOfPokemons.pokemonsType

export default listOfPokemonsSlice.reducer
