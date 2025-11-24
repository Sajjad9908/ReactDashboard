// src/component/LazyCharts.jsx  (create this new file)

import React, { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

// Lazy load each chart
const LineChart = React.lazy(() => import('./LineChart'));
const BarChart = React.lazy(() => import('./BarChart'));
const GeoMap = React.lazy(() => import('./GeoMap'));


// Fallback spinner (beautiful & matches your theme)
const ChartFallback = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100%"
    minHeight={280}
  >
    <CircularProgress sx={{ color: '#00bfff' }} />
  </Box>
);

// Export them with Suspense wrapper
export const LazyLineChart = (props) => (
  <Suspense fallback={<ChartFallback />}>
    <LineChart {...props} />
  </Suspense>
);

export const LazyBarChart = (props) => (
  <Suspense fallback={<ChartFallback />}>
    <BarChart {...props} />
  </Suspense>
);

export const LazyGeoMap = (props) => (
  <Suspense fallback={<ChartFallback />}>
    <GeoMap {...props} />
  </Suspense>
);

export const LazyProgressCircle = (props) => (
  <Suspense fallback={<ChartFallback />}>
    <ProgressCircle {...props} />
  </Suspense>
);