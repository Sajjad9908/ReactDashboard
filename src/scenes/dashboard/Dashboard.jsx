// src/pages/dashboard/Dashboard.jsx (or wherever your file is)

import React from 'react';
import Header from '../../component/Header';
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { tokens } from '../../Theme';
import { mockTransactions } from '../../data/Mockdata';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import StatBox from '../../component/StatBox';
import ProgressCircle from '../../component/ProgressCircle';
import { LazyLineChart, LazyBarChart, LazyGeoMap, LazyProgressCircle } from '../../component/LazyCharts';

// Responsive Wrapper to prevent Nivo SVG errors on resize
const ResponsiveChartWrapper = ({ children }) => (
 
  <Box
    sx={{
      width: '100%',
      height: { xs: 260, sm: 280, md: 300, lg: 340 },
      minHeight: 260,
      position: 'relative',
    }}
  >
    {children}
  </Box>
);

const Dashboard = () => {
   const isSmallScreen = useMediaQuery('(max-width:500px)');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const statData = [
    { title: '12,361', subtitle: 'Emails Sent', progress: '0.75', increase: '+14%', icon: <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '32px' }} /> },
    { title: '431,225', subtitle: 'Sales Obtained', progress: '0.50', increase: '+21%', icon: <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '32px' }} /> },
    { title: '32,441', subtitle: 'New Clients', progress: '0.30', increase: '+5%', icon: <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '32px' }} /> },
    { title: '1,325,134', subtitle: 'Traffic Received', progress: '0.80', increase: '+43%', icon: <TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '32px' }} /> },
  ];

  return (
    <Box m={{ xs: '10px', sm: '20px' }} sx={{backgroundColor:`${colors.gray[900]}`, padding:'25px'}}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 3, sm: 0,md:5 }}
        bgcolor={colors.primary[400]}
        p='20px'
       
       transition="margin-left 0.3s ease"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            bgcolor: colors.blueAccent[700],
            color: colors.gray[100],
            fontWeight: 'bold',
            fontSize: { xs: '13px', sm: '14px' },
            px: { xs: 3, sm: 4 },
            py: 1.5,
            '&:hover': { bgcolor: colors.blueAccent[800] },
          }}
        >
          Download Reports
        </Button>
      </Box>

      {/* MAIN GRID */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
        mt="30px"
        sx={{
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(4, 1fr)',
            lg: 'repeat(12, 1fr)',
          },
          gap: { xs: '16px', sm: '20px' },
          
        }}
       
      >
        {/* STAT BOXES - Tall & Beautiful on Large Screens */}
        {statData.map((data, i) => (
          <Box 
            key={i}
            gridColumn={{ xs: 'span 1', sm: 'span 2', lg: 'span 3' }}
            gridRow={{ lg: 'span 2' }}
            bgcolor={colors.primary[400]}
            borderRadius="12px"
            p={isSmallScreen?'0px':'10px'}
            ml={isSmallScreen?'-12px':'0'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              minHeight: { lg: '180px' },
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              },
            }}
          >
            <StatBox
              title={data.title}
              subtitle={data.subtitle}
              progress={data.progress}
              increase={data.increase}
              icon={data.icon}
            />
          </Box>
        ))}

        {/* REVENUE LINE CHART */}
        <Box gridColumn={{ xs: 'span 1', sm: 'span 4', lg: 'span 8' }} gridRow={{ lg: 'span 2' }} bgcolor={colors.primary[400]} borderRadius="12px" p={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.gray[100]}>Revenue Generated</Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>$59,342.32</Typography>
            </Box>
            <IconButton>
              <DownloadIcon sx={{ fontSize: '28px', color: colors.greenAccent[500] }} />
            </IconButton>
          </Box>
         <ResponsiveChartWrapper>
    <LazyLineChart isDashboard={true} />
     </ResponsiveChartWrapper>
        </Box>

        {/* RECENT TRANSACTIONS */}
        <Box gridColumn={{ xs: 'span 1', sm: 'span 4', lg: 'span 4' }} gridRow={{ lg: 'span 2' }} bgcolor={colors.primary[400]} borderRadius="12px" overflow="auto" maxHeight="400px">
          <Typography color={colors.gray[100]} variant="h5" fontWeight="600" p="15px" borderBottom={`4px solid ${colors.primary[500]}`}>
            Recent Transactions
          </Typography>
          {mockTransactions.map((t, i) => (
            <Box key={i} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`1px solid ${colors.primary[500]}`} p="15px">
              <Box>
                <Typography color={colors.greenAccent[500]} fontWeight="600">{t.txId}</Typography>
                <Typography color={colors.gray[100]}>{t.user}</Typography>
              </Box>
              <Box color={colors.gray[100]}>{t.date}</Box>
              <Box bgcolor={colors.greenAccent[500]} color={colors.gray[100]} px={2} py={0.5} borderRadius="6px" fontWeight="bold">
                {t.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* CAMPAIGN */}
        <Box gridColumn={{ xs: 'span 1', sm: 'span 4', lg: 'span 4' }} bgcolor={colors.primary[400]} borderRadius="12px" p={4} textAlign="center">
          <Typography variant="h5" fontWeight="600" color={colors.gray[100]} mb={3}>Campaign</Typography>
          <ProgressCircle size="140" />
          <Typography variant="h5" color={colors.greenAccent[500]} mt={3}>$48,352 revenue generated</Typography>
          <Typography fontSize="14px" color={colors.gray[200]} mt={1}>
            Includes extra miscellaneous expenditures and costs
          </Typography>
        </Box>

        {/* SALES QUANTITY */}
        <Box gridColumn={{ xs: 'span 1', sm: 'span 4', lg: 'span 4' }} bgcolor={colors.primary[400]} borderRadius="12px">
          <Typography variant="h5" fontWeight="600" color={colors.gray[100]} p="30px 30px 0 30px">
            Sales Quantity
          </Typography>
         <ResponsiveChartWrapper>
  <LazyBarChart isDashboard={true} />
</ResponsiveChartWrapper>
        </Box>

        {/* GEOGRAPHY BASED TRAFFIC */}
        <Box gridColumn={{ xs: 'span 1', sm: 'span 4', lg: 'span 4' }} bgcolor={colors.primary[400]} borderRadius="12px">
          <Typography variant="h5" fontWeight="600" color={colors.gray[100]} p="30px 30px 0 30px">
            Geography Based Traffic
          </Typography>
         <ResponsiveChartWrapper>
  <LazyGeoMap isDashboard={true} />
</ResponsiveChartWrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;