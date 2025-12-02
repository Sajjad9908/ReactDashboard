import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../../Theme.js';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import MenuIcon from '@mui/icons-material/Menu';
import MapIcon from '@mui/icons-material/Map';
import image from '../../assets/Project.png';

const Item = ({ title, to, icon, selected, setSelected, onItemClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleClick = () => {
    setSelected(title);
    if (to) navigate(to);
    if (onItemClick) onItemClick();
  };

  return (
    <MenuItem
      active={selected === title}
      style={{ color: `${colors.gray[400]}` }}
      onClick={handleClick}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SideBar = ({ isMobileDrawer = false, setSidebarOpen, sidebarCollapsed = false, setSidebarCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState('Dashboard');

  // Using useMediaQuery to determine screen size
  const isSmallScreen = useMediaQuery('(max-width: 890px)');
  
  const handleMenuClick = (title) => {
    setSelected(title);
    // Close drawer on mobile after clicking menu item
    if (isMobileDrawer && setSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <Box
      padding={sidebarCollapsed ? '10px' : undefined}
      sx={{
        '& .sidebar': {
          backgroundColor: `${colors.primary[400]}!important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
        // Hide sidebar on desktop when screen is smaller than 890px, except in mobile drawer mode
        display: !isMobileDrawer && isSmallScreen ? 'none' : 'block',
      }}
    >
      <Sidebar style={{ height:isMobileDrawer?'100%':'100vh', position:'fixed', overflow:'hidden', zIndex:'100'}} backgroundColor={`${colors.primary[400]}`} collapsed={sidebarCollapsed && !isMobileDrawer}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setSidebarCollapsed && setSidebarCollapsed(!sidebarCollapsed)}
            icon={sidebarCollapsed && !isMobileDrawer ? <MenuIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.gray[100],
            }}
          >
            {(!sidebarCollapsed || isMobileDrawer) && (
              <Box display="flex" gap="5px" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h5" color={colors.gray[200]}>
                  Admins
                </Typography>
                {!isMobileDrawer && setSidebarCollapsed && (
                  <IconButton onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                    <MenuIcon style={{ color: colors.gray[400] }} />
                  </IconButton>
                )}
              </Box>
            )}
          </MenuItem>

          {/* User */}
          {(!sidebarCollapsed || isMobileDrawer) && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width={isMobileDrawer ? "80px" : "100px"}
                  height={isMobileDrawer ? "80px" : "100px"}
                  src={image}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" color={colors.gray[100]} sx={{ m: '10px 0 0 0' }}>
                  Sajjad Hussain
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                  Memon
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={sidebarCollapsed && !isMobileDrawer ? undefined : '10px'}>
            <Item title="dashboard" to={'/'} selected={selected} setSelected={setSelected} icon={<HomeIcon />} onItemClick={handleMenuClick} />
            {(!sidebarCollapsed || isMobileDrawer) && (
              <Typography variant="h6" color={colors.gray[300]} sx={{ m: '15px 0px 5px 20px' }}>
                Data
              </Typography>
            )}

            <Item title="Manage Team" to={'/team'} selected={selected} setSelected={setSelected} icon={<PeopleIcon />} onItemClick={handleMenuClick} />
            <Item title="Contacts Information" to={'/contacts'} selected={selected} setSelected={setSelected} icon={<ContactsIcon />} onItemClick={handleMenuClick} />
            <Item title="Invoices Balances" to={'/invoices'} selected={selected} setSelected={setSelected} icon={<ReceiptIcon />} onItemClick={handleMenuClick} />

            {(!sidebarCollapsed || isMobileDrawer) && (
              <Typography variant="h6" color={colors.gray[300]} sx={{ m: '15px 0px 5px 20px' }}>
                Pages
              </Typography>
            )}

            <Item title="Profile Form" to={'/form'} selected={selected} setSelected={setSelected} icon={<PersonIcon />} onItemClick={handleMenuClick} />
            <Item title="Calender" to={'/calender'} selected={selected} setSelected={setSelected} icon={<CalendarTodayIcon />} onItemClick={handleMenuClick} />
            <Item title="FAQ Page" to={'/faq'} selected={selected} setSelected={setSelected} icon={<HelpOutlineIcon />} onItemClick={handleMenuClick} />

            { (!sidebarCollapsed || isMobileDrawer) && (
              <Typography variant="h6" color={colors.gray[300]} sx={{ m: '15px 0px 5px 20px' }}>
                Charts
              </Typography>
            )}

            <Item title="Bar Chart" to={'/bar'} selected={selected} setSelected={setSelected} icon={<BarChartIcon />} onItemClick={handleMenuClick} />
            <Item title="Pie Chart" to={'/pie'} selected={selected} setSelected={setSelected} icon={<PieChartIcon />} onItemClick={handleMenuClick} />
            <Item title="Line Chart" to={'/line'} selected={selected} setSelected={setSelected} icon={<TimelineIcon />} onItemClick={handleMenuClick} />
            <Item title="Geography chart" to={'/geography'} selected={selected} setSelected={setSelected} icon={<MapIcon />} onItemClick={handleMenuClick} />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
