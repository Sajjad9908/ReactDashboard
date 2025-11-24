// src/component/GeoMap.jsx

import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoFeatures } from '../data/MockGeoFeature';
import { mockGeographyData as data } from '../data/Mockdata';
import { useTheme } from '@mui/material';
import { tokens } from '../Theme';

const GeoMap = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}

      // Clean, working theme (fixed all the broken tooltip paths)
      theme={{
        background: 'transparent',
        textColor: colors.gray[100],
        axis: {
          domain: { line: { stroke: colors.gray[400] } },
          ticks: { text: { fill: colors.gray[100] } },
          legend: { text: { fill: colors.gray[100] } },
        },
        legends: {
          text: { fill: colors.gray[100] },
        },
        tooltip: {
          container: {
            background: colors.primary[400],
            color: colors.gray[100],
            fontSize: '14px',
            borderRadius: '8px',
            padding: '10px 14px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          },
        },
      }}

      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#444444"
      label="properties.name"
      valueFormat=".2s"

      // Perfect scale & position for dashboard vs full page
      projectionScale={isDashboard ? 38 : 140}
      projectionTranslation={isDashboard ? [0.5, 0.7] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}

      borderWidth={1}
      borderColor={colors.gray[700]}

      // Fill colors - beautiful gradient
      colors="YlGnBu"

      fill={[
        { match: { id: 'CAN' }, id: colors.greenAccent[500] },
        { match: { id: 'USA' }, id: colors.blueAccent[600] },
        { match: { id: 'BRA' }, id: colors.redAccent[500] },
      ]}

      // Only show legend on full page (saves space on dashboard)
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: false,
                translateX: 20,
                translateY: -40,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.gray[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: { itemTextColor: colors.greenAccent[500] },
                  },
                ],
              },
            ]
          : []
      }
    />
  );
};

export default GeoMap;