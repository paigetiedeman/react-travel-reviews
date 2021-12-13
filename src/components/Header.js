import React from 'react';
import {Button} from '@mui/material'

export default function Header() {
  return (
    <nav>
      <h2>Reviews!</h2>
      <Button variant="outlined" >Add</Button>
      <Button variant="outlined" >View All</Button>
      <Button variant="outlined" >Search</Button>
    </nav>
  )
}
