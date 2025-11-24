import { lazy, Suspense, useState } from 'react';
import { ColorModeContext, useMode, tokens } from './Theme.js';
import { CssBaseline, ThemeProvider, Box, useMediaQuery } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import TobBar from './scenes/global/TobBar.jsx';
import SideBar from './scenes/global/SideBar.jsx';
import Dashboard from './scenes/dashboard/Dashboard.jsx';
import Team from './scenes/Team/Team.jsx';
import Contacts from './scenes/contacts/Contacts.jsx';
import Invoices from './scenes/invoices/Invoices.jsx';
import Form2 from './scenes/Forms/Form2.jsx';
import Calendar2 from './scenes/Calender/Calendar.jsx';
import Faqs from './scenes/faq/Faqs.jsx';

const Pie = lazy(() => import('./scenes/pieChart/Pie.jsx'));
const Bar = lazy(() => import('./scenes/barChart/Bar.jsx'));
const LineChartPage = lazy(() => import('./scenes/linechart/LineChartPage.jsx'));
const GeoMapePage = lazy(() => import('./scenes/geoMapPage/GeoMapePage.jsx'));

const App = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 890px)');

  // Dynamic margin based on sidebar collapse and screen size
  const mainMarginLeft = isSmallScreen ? 0 : (sidebarCollapsed ? 80 : 250);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <SideBar 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen}
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />

          <Box
            component="main"
            className="content"
            sx={{
              backgroundColor: colors.gray[900],
              marginLeft: `${mainMarginLeft}px`,
              transition: 'margin-left 0.3s ease',
              minHeight: '100vh',
              flex: 1,
            }}
          >
            <TobBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Suspense wraps the entire Routes */}
            <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form2 />} />
                <Route path="/calender" element={<Calendar2 />} />
                <Route path="/faq" element={<Faqs />} />

                {/* Lazy-loaded pages */}
                <Route path="/pie" element={<Pie />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/line" element={<LineChartPage />} />
                <Route path="/geography" element={<GeoMapePage />} />
              </Routes>
            </Suspense>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;