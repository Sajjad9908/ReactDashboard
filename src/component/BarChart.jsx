// src/component/BarChart.jsx

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from '@mui/material';
import { tokens } from '../Theme';
import { mockBarData as data } from '../data/Mockdata';

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"

      // Clean & working theme (fixed all broken paths)
      theme={{
        textColor: colors.gray[100],
        axis: {
          domain: { line: { stroke: colors.gray[400] } },
          ticks: {
            line: { stroke: colors.gray[400], strokeWidth: 1 },
            text: { fill: colors.gray[100] }
          },
          legend: { text: { fill: colors.gray[100] } }
        },
        grid: {
          line: { stroke: colors.primary[500], opacity: 0.2 }
        },
        legends: {
          text: { fill: colors.gray[100] }
        },
        tooltip: {
          container: {
            background: colors.primary[400],
            color: colors.gray[100],
            borderRadius: '8px',
            padding: '10px 14px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            fontSize: '14px'
          }
        }
      }}

      // Responsive margins — super important on small screens!
      margin={
        isDashboard
          ? { top: 20, right: 20, bottom: 40, left: 40 }
          : { top: 50, right: 130, bottom: 70, left: 70 }
      }

      padding={0.4}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}

      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}

      // Axis labels
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'Country',
        legendPosition: 'middle',
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'Food Items',
        legendPosition: 'middle',
        legendOffset: -50,
      }}

      enableLabel={!isDashboard}  // Labels inside bars only on full page (too crowded on dashboard)
      labelSkipWidth={36}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}

      // Legend — hidden on dashboard to save space
      legends={
        isDashboard
          ? []
          : [
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                  {
                    on: 'hover',
                    style: { itemOpacity: 1 }
                  }
                ]
              }
            ]
      }

      role="application"
      ariaLabel="Food consumption by country bar chart"
      barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in ${e.indexValue}`}
    />
  );
};

export default BarChart;