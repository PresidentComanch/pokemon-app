import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material'
import { fetchTypesList } from '../../api/api'
import { setPokemonsType } from '../../features/listOfPokemons/listOfPokemonsSlice'
import { useAppDispatch } from '../../app/hooks'
import { setFilterQuery, setQtyPerPage } from '../../features/pokemonsDataToDisplay/pokemonsDataToDisplay'
import { debounce } from '../../app/common'
import { TypeFormServer } from '../../types/pokemon.model'

const PokemonCardListControllBar: React.FC = () => {
  const dispatch = useAppDispatch()

  const [typesList, setTypesList] = useState<TypeFormServer[]>([])
  const [selectedTypesList, setSelectedTypesList] = useState<string[]>([])
  const [pokemonsPerPage, setPokemonsPerPage] = useState(10)
  const [query, setQuery] = useState('')

  const typeSelectorHandler = (event: SelectChangeEvent<string[]>) => {
    setSelectedTypesList(event.target.value)
    dispatch(setPokemonsType(event.target.value))
  }

  const paginationSelectorHandler = (event: SelectChangeEvent<number>) => {
    setPokemonsPerPage(+event.target.value)
    dispatch(setQtyPerPage(+event.target.value))
  }

  const dispatchQuery = (query: string) => {
    dispatch(setFilterQuery(query))
  }

  const debounceDispatchQuery = useCallback(
    debounce(dispatchQuery, 300),
    [])

  const inputQueryHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    debounceDispatchQuery(event.target.value)
  }

  useEffect(async () => {
    const response = await fetchTypesList()
    const listOfTypesFromServer = await response.data.results.map((item: TypeFormServer) => (
      {
        name: item.name,
        typeIndex: item.url.split('/').slice(-2, -1),
      }
    ))

    setTypesList(listOfTypesFromServer)
  },
  [])

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControl sx={{ m: 1, width: '100%' }} >
              <TextField
                id="standard-basic"
                label="Search by name"
                onChange={inputQueryHandler}
                value={query}
              />
              <FormHelperText>
                Filter pokemons by name
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <InputLabel id="inputTypeSelectLabel">
                Type
              </InputLabel>
              <Select
                labelId="inputTypeSelectLabel"
                id="inputTypeSelect"
                multiple
                value={selectedTypesList}
                label="Type"
                autoWidth
                input={<OutlinedInput label="Type" />}
                onChange={typeSelectorHandler}
              >
                {typesList.map(({ name }) => (
                  <MenuItem value={name} key={name}>
                    {name}
                  </MenuItem>
                ))
                }
              </Select>
              <FormHelperText>
                Filter pokemons by type
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2}>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <InputLabel id="labelForPaginationSelect">
                Pokemons per page
              </InputLabel>
              <Select
                labelId="labelForPaginationSelect"
                id="PaginationSelect"
                value={pokemonsPerPage}
                label="PokemonsPerPage"
                onChange={paginationSelectorHandler}
              >
                <MenuItem value={10} >
                  10
                </MenuItem>
                <MenuItem value={20} >
                  20
                </MenuItem>
                <MenuItem value={50} >
                  50
                </MenuItem>
              </Select>
              <FormHelperText>
                Pokemons per page
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default PokemonCardListControllBar
