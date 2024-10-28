import React from 'react'
import Grid from '@mui/material/Grid2'
import './cardwrapperstyles.css'
import { Button, Typography } from '@mui/material'
import { FaArrowRight } from "react-icons/fa6";
export default function CardContent({children,isChargerStatus,isRatings,heading}:any) {
  return (
    <Grid container className='card-container'>
       <Grid className="cont-head">
        <Typography sx={{ fontFamily: 'Work Sans',color: '#050d15', fontSize: '16px', fontWeight: 500, lineHeight: '18.77px', textAlign: 'left',textTransform:'none' }}>{heading}</Typography>
        {
        isChargerStatus &&         <Button children="View Chargers" variant='contained' className='chargers-btn' sx={{textTransform:'none',height:'33px'}}/>

        }
        { isRatings && <FaArrowRight width={'19.3px'}/>}
      </Grid>
     {children}
    
      </Grid>
  )
}
