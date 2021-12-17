import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

const PokemonCard: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Avatar>

          </Avatar>
        </CardHeader>
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography>

          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default PokemonCard
