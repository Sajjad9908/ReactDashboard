import React from 'react'
import { Typography,Box,useTheme, colors, useMediaQuery } from '@mui/material'
import { tokens } from '../Theme'

const Header = ({title,subtitle}) => {
    const theme=useTheme()
    const colors=tokens( theme.palette.mode)
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    

  return (
   <Box mb='10px' ml='20px' width='100%' p='20px' bgcolor={colors.primary[400]}>
  <Typography variant={isXs ? 'h4':'h2'} fontWeight='bold' color={colors.gray[100]} sx={{mb:'5px',}}>{title}</Typography>
  <Typography variant='h5' color={colors.greenAccent[400]}>{subtitle}</Typography>
   </Box>
  )
}

export default Header