import { Box,  useTheme } from '@mui/material'
import React from 'react'
import Header from '../../component/Header'
import PieChart from '../../component/PieChart'
import { tokens } from '../../Theme'

const Pie = () => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
 
  return (
    <>
    <Box ml='20px'  mt='20px'  padding='40px' bgcolor={`${colors.primary[400]}`}>
        <Header title='Pie chart' subtitle='Simple Pie chart'/>
         <Box height="70vh" border={`8px solid ${colors.gray[900]}`} width='95%'>
        <PieChart/>
         </Box>

    </Box>
    </>
  )
}

export default Pie