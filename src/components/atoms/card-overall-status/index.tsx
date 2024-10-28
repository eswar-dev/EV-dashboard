import React from 'react'
import './card-overall-styles.css'
import Grid from '@mui/material/Grid2'

export default function CardStatus({heading,value,percent}:any) {
  return (
    <Grid  gap={'30px'}  className='card-cont' >
      <Grid  gap={'10px'} className='top-cont'>
        <Grid className='head-img'>img</Grid>
        <Grid className='head-text'>{heading}</Grid>

      </Grid>
      <Grid className='bot-cont'>
      <Grid className='count'>{value}</Grid>
      <Grid className='percent'>{percent} <Grid className='percent' pl={1}>icon</Grid></Grid>
     

      </Grid>
    </Grid >
  )
}
