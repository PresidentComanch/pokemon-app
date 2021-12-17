import { Button, Card, CardContent, CardMedia, Chip, Collapse, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { pokemonData } from '../../types/pokemon.model'
import { nanoid } from 'nanoid'

type Props = {
  data: pokemonData;
};

const colorForType: { [key: string] : string } = {
  normal: '#a4acaf',
  fighting: '#d56723',
  flying: '#3dc7ef',
  poison: '#b97fc9',
  ground: '#ab9842',
  rock: '#a38c21',
  bug: '#729f3f',
  ghost: '#51c4e7',
  steel: '#9eb7b8',
  fire: '#fd7d24',
  water: '#4592c4',
  grass: '#9bcc50',
  electric: '#eed535',
  psychic: '#f366b9',
  ice: '#51c4e7',
  dragon: '#f16e57',
  dark: '#707070',
  fairy: '#fdb9e9',
  unknown: '#ffffff',
  shadow: '#ffffff',
}

const PokemonCard: React.FC<Props> = ({ data }) => {
  const { name, types, image, hp, attack, defense, specialAttack, specialDefense, speed, weight } = data
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <Grid item xs={12} md={4} lg={3}>
        <Card>
          <CardMedia
            component="img"
            height="240px"
            image={image}
            alt={name}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              {types.map(type => (<Chip label={type} size="small" key={nanoid()} sx={{ bgcolor: `${colorForType[type]}` }}/>))}
            </Stack>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              HP: {hp}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              Attack: {attack}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              Defense: {defense}
            </Typography>
            <Button
              onClick={handleExpandClick}
            >
              more stats
            </Button>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  Special Attack: {specialAttack}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  Special Defense: {specialDefense}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  Speed: {speed}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  Weight: {weight}
                </Typography>
              </CardContent>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default PokemonCard
