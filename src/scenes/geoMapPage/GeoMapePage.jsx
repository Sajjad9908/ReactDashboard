import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Header from '../../component/Header'
import GeoMap from '../../component/GeoMap'
import {useTheme} from '@mui/material'
import { tokens } from '../../Theme'


const GeoMapePage = () => {
    const theme=useTheme()
   const colors=tokens(theme.palette.mode)
   

  return (
    <Box m="5px" mt='20px'  width='95%' padding='40px' bgcolor={`${colors.primary[400]}`} >
        <Header title="Geo Map" subtitle="Simple Geo Map"/>
        <Box height="70vh"  border={`8px solid ${colors.gray[300]}`}
        >
        <GeoMap/>
        </Box>

    </Box>
  )
}

export default GeoMapePage