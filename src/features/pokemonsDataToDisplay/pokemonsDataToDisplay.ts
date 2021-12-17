import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { PokemonsDataToDisplayState } from '../../types/pokemon.model'

const initialState: PokemonsDataToDisplayState = {
  filterQuery: '',
  qtyPerPage: 10,
}

export const pokemonsDataToDisplaySlice = createSlice({
  name: 'pokemonsDataToDisplay',
  initialState,
  reducers: {
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload
    },
    setQtyPerPage: (state, action) => {
      state.qtyPerPage = action.payload
    },
  },
})

export const { setFilterQuery, setQtyPerPage } = pokemonsDataToDisplaySlice.actions
export const getFilterQuery = (state: RootState) => state.pokemonsDataToDisplay.filterQuery
export const getQtyPerPage = (state: RootState) => state.pokemonsDataToDisplay.qtyPerPage

export default pokemonsDataToDisplaySlice.reducer
