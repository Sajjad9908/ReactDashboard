import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Header from '../../component/Header'
import LineChart from '../../component/LineChart'
import { tokens } from '../../Theme'

const LineChartPage = () => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  
  return (
    <Box m="20px" bgcolor={colors.primary[400]} padding='25px'>
        <Header title="Line Chart" subtitle="Simple LineChart"/>

        <Box height="70vh" border={`8px solid ${colors.gray[800]}`} width='95%'
        >
        <LineChart/>
        </Box>

    </Box>
  )
}

export default LineChartPage