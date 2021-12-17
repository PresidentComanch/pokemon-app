import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Container, Grid, Pagination, Stack } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import { getPokemonsList } from '../../features/listOfPokemons/listOfPokemonsSlice'
import { getFilterQuery, getQtyPerPage } from '../../features/pokemonsDataToDisplay/pokemonsDataToDisplay'
import { fetchListOfPokemons } from '../../api/api'

const PokemonCardList: React.FC = () => {
  const filterQuery = useAppSelector(getFilterQuery)
  const pokemonsListFromServer = useAppSelector(getPokemonsList)
  const pokemonsPerPage = useAppSelector(getQtyPerPage)

  const [page, setPage] = useState(0)
  const [pageQty, setPageQty] = useState(0)
  const [filteredByName, setFilteredByName] = useState(pokemonsListFromServer)
  const [pokemonsToDisplayList, setPokemonsToDisplayList] = useState([])
  const [pokemonsToDisplayData, setPokemonsToDisplayData] = useState([])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  setFilteredByName(pokemonsListFromServer.filter(pokemon => pokemon.name.includes(filterQuery)))

  const countpages = (list, num) => list.length / num

  

  const pageCount = useMemo(() => filteredByName.length / pokemonsPerPage), [filteredByName])
  setPageQty(pageCount)

  // useEffect(async () => {
  //   setPageQty(Math.ceil(filteredByName.length / pokemonsPerPage))
  //   let preparedPokemonsToDisplay = filteredByName.slice(page * +pokemonsPerPage, page * +pokemonsPerPage + +pokemonsPerPage)
  //   let result = []

  //   for (let pokemon of preparedPokemonsToDisplay) {
  //     const response = await fetchListOfPokemons(pokemon.name)
  //     result = [...result, response.data]
  //   }
  //   setPokemonsToDisplayData(result)
  // }, [pokemonsPerPage, pokemonsListFromServer, filterQuery, filteredByName])

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
      <Grid container>
        {filteredByName && filteredByName.map(poke => (<p>{poke.name}' '</p>))}
      </Grid>
    </Container>
    </>
  )
}

export default PokemonCardList
