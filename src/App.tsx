import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import PokemonCardList from './components/PokemonCardList/PokemonCardList'
import PokemonCardListControllBar from './components/PokemonCardListControllBar/PokemonCardListControllBar'
import { fetchAsyncListOfPokemons, getPokemonTypes } from './features/listOfPokemons/listOfPokemonsSlice'

function App () {
  const pokemonsTypes = useAppSelector(getPokemonTypes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (pokemonsTypes) {
      dispatch(fetchAsyncListOfPokemons(pokemonsTypes))
    } else {
      dispatch(fetchAsyncListOfPokemons())
    }
  }, [dispatch, pokemonsTypes])

  return (
    <div className="App">
      <PokemonCardListControllBar />
      <PokemonCardList />
    </div>
  )
}

export default App
