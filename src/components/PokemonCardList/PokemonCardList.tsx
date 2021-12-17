import React, { useEffect, useState } from 'react'

import { Container, Grid, Pagination, Stack } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import { getPokemonsList } from '../../features/listOfPokemons/listOfPokemonsSlice'
import { getFilterQuery, getQtyPerPage } from '../../features/pokemonsDataToDisplay/pokemonsDataToDisplay'
import { pokemonData, pokemonListItem } from '../../types/pokemon.model'
import { fetchPokemonStats } from '../../api/api'
import PokemonCard from '../PokemonCard/PokemonCard'

const PokemonCardList: React.FC = () => {
  const filterQuery = useAppSelector(getFilterQuery)
  const pokemonsListFromServer = useAppSelector(getPokemonsList)
  const pokemonsPerPage = useAppSelector(getQtyPerPage)

  const [page, setPage] = useState(1)
  const [pageQty, setPageQty] = useState(0)
  const [filteredByName, setFilteredByName] = useState(pokemonsListFromServer)
  const [pokemonsToDisplayData, setPokemonsToDisplayData] = useState<pokemonData[] | []>([])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    const preparedList = pokemonsListFromServer.filter((pokemon: pokemonListItem) => pokemon.name.includes(filterQuery))
    setFilteredByName(preparedList)
  }, [pokemonsListFromServer, filterQuery])

  useEffect(() => {
    setPageQty(Math.floor(filteredByName.length / pokemonsPerPage))
  }, [filteredByName, pokemonsPerPage])

  useEffect(async () => {
    const preparedPokemonsToDisplay = filteredByName.slice(((page - 1) * pokemonsPerPage), ((page - 1) * pokemonsPerPage + pokemonsPerPage))

    let listOfDataToDisplay: any[] = []

    for (const pokemon of preparedPokemonsToDisplay) {
      const response = await fetchPokemonStats(pokemon.name)
      listOfDataToDisplay = [...listOfDataToDisplay, response.data]
    }

    listOfDataToDisplay = listOfDataToDisplay.map(pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.map((type) => type.type.name),
      moves: pokemon.moves.map((move) => move.move.name),
      image: pokemon.sprites.front_default,
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      specialAttack: pokemon.stats[3].base_stat,
      specialDefense: pokemon.stats[4].base_stat,
      speed: pokemon.stats[5].base_stat,
      weight: pokemon.weight,
    }))

    setPokemonsToDisplayData(listOfDataToDisplay)
  }, [page, pokemonsPerPage, filteredByName])

  return (
    <>
    <Container>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Pagination
          count={pageQty}
          page={page}
          color="primary"
          size="large"
          shape="rounded"
          variant="outlined"
          onChange={handleChange}
        />
      </Stack>
      <Grid container
        spacing={1}
        sx={{ p: '45px' }}
      >
        {pokemonsToDisplayData.map((pokemon: pokemonData) => (
          <PokemonCard
            key={pokemon.id}
            data={pokemon}
          />
        ))}
      </Grid>
    </Container>
    </>
  )
}

export default PokemonCardList
