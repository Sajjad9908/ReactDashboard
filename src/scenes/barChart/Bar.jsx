import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Header from '../../component/Header'
import BarChart from '../../component/BarChart'
import { tokens } from '../../Theme'

const Bar = () => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  
  return (
    <Box m='5px ' bgcolor={colors.primary[400]} >

   
        <Header title='BarChart' subtitle='Bar Chart with MockData'/>
           <Box height='70vh' padding='45px'>
        <BarChart/>
        </Box>
    </Box>
  )
}

export default Bar