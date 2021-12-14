import React from 'react';
import { Button } from '@mui/material'

export default function Header() {


  return (
    <div>
      <h2>Reviews!</h2>
      
      <Button variant="outlined" >View All</Button>
      <Button variant="outlined" >Search</Button>
    </div>
  )
}

// was set as <nav></nav>