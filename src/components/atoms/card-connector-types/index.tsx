import React from 'react'
import Grid from '@mui/material/Grid2'
import './connectortypes.css'
export default function CardConnectorTypes({value}:any) {
  return (
    <Grid className='connector-cont'>

    <Grid>
     {'icon'}
    </Grid>
    <Grid className='value'>
        {value}
    </Grid>
    </Grid>
  )
}
