import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Header from './components/Header/Header'
import PokemonCardList from './components/PokemonCardList/PokemonCardList'
import PokemonCardListControllBar from './components/PokemonCardListControllBar/PokemonCardListControllBar'
import { fetchAsyncListOfPokemons, getPokemonTypes } from './features/listOfPokemons/listOfPokemonsSlice'

function App () {
  const pokemonsTypes = useAppSelector(getPokemonTypes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAsyncListOfPokemons(pokemonsTypes))
  }, [dispatch, pokemonsTypes])

  return (
    <div className="App">
      <Header />
      <PokemonCardListControllBar />
      <PokemonCardList />
    </div>
  )
}

export default App
