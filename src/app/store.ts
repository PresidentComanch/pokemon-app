import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import listOfPokemonsReducer from '../features/listOfPokemons/listOfPokemonsSlice'
import pokemonsDataToDisplayReducer from '../features/pokemonsDataToDisplay/pokemonsDataToDisplay'

export const store = configureStore({
  reducer: {
    listOfPokemons: listOfPokemonsReducer,
    pokemonsDataToDisplay: pokemonsDataToDisplayReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
