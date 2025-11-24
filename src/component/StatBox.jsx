import React from 'react'
import { Box,Typography,useMediaQuery,useTheme } from '@mui/material'
import { tokens } from '../Theme'
import ProgressCircle from './ProgressCircle'
const StatBox = ({title,subtitle,icon,progress,increase}) => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
    const isSmallScreen = useMediaQuery('(max-width:400px)');
  return (
   <Box width={isSmallScreen?'60%':'100%'} margin="0 30px">
    <Box display="flex" justifyContent="space-between" >
    <Box >{icon}

        <Typography variant={isSmallScreen?'h5':'h4'} fontWeight="bold" sx={{
            color:colors.gray[100]
        }}>{title}</Typography>


    </Box>
    <Box><ProgressCircle progress={progress}/></Box>
       </Box>

    <Box display="flex" justifyContent="space-between">
  <Typography variant={isSmallScreen?'h6':'h5'}  sx={{
            color:colors.greenAccent[500]
        }}>{subtitle}</Typography>
          <Typography variant='h5' fontWeight="italic" sx={{
            color:colors.greenAccent[600]
        }}>{increase}</Typography>

    </Box>

 

   </Box>
  )
}

export default StatBox