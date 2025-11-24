import React from 'react'
import {Box,IconButton,useTheme,useMediaQuery,Drawer} from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext,tokens } from '../../Theme.js'
import InputBase from '@mui/material/InputBase';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SideBar from './SideBar';

const TobBar = ({ sidebarOpen, setSidebarOpen }) => {
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  const colorMode=useContext(ColorModeContext);
  const isMobile = useMediaQuery('(max-width: 890px)');
  
  
  return (
   <Box display='flex' justifyContent='space-between' p={2} alignItems='center'>
    {/* Menu Icon for Mobile */}
    {isMobile && (
      <Box mr={2}>
        <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <CloseIcon  sx={{color:'red'}}/> : <MenuIcon />}
        </IconButton>
      </Box>
    )}
    
    {/* SearchBar */}
    <Box display='flex' ml={isMobile ? '0' : '5px'} backgroundColor={color.primary[900]} borderRadius='3px'>
     <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
     <IconButton type='button' sx={{p:1}}>
      <SearchIcon/>
     </IconButton>
     </Box>

    {/* Icons */}
    <Box display='flex' gap='10px'>
      <IconButton onClick={colorMode.ToggleColorMode} sx={{ color: color.gray[100] }}>
        {theme.palette.mode==='dark'?<LightModeIcon/>:<DarkModeIcon/>}
      
      </IconButton>
      <IconButton sx={{ color: color.gray[100] }}>
        <NotificationsIcon/>
      </IconButton>
      <IconButton sx={{ color: color.gray[100] }}>
        <SettingsIcon/>
      </IconButton>
      <IconButton sx={{ color: color.gray[100] }}>
        <PersonIcon/>
      </IconButton>
    </Box>
    
    {/* Mobile Drawer Sidebar */}
    {isMobile && (
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: color.primary[400],
            width: '250px',
          }
        }}
      >
        <SideBar isMobileDrawer={true} setSidebarOpen={setSidebarOpen} />
      </Drawer>
    )}
   </Box>
  )
}
export default TobBar