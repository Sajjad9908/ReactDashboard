// src/component/LineChart.jsx

import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useTheme } from '@mui/material';  // ← Fixed: removed wrong useThemeProvider
import { tokens } from '../Theme';
import { mockLineData as data } from '../data/Mockdata';  // ← Make sure this export exists!

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const lineColorConfig = isDashboard ? { datum: 'color' } : { scheme: 'nivo' };

  return (
    <ResponsiveLine
      data={data}
      colors={lineColorConfig}

      theme={{
        text: { fill: colors.gray[100] },
        axis: {
          domain: { line: { stroke: colors.gray[400] } },
          ticks: {
            line: { stroke: colors.gray[400], strokeWidth: 1 },
            text: { fill: colors.gray[100] }
          },
          legend: { text: { fill: colors.gray[100] } }
        },
        grid: { line: { stroke: colors.primary[500], opacity: 0.3 } },
        legends: { text: { Wrapped: colors.gray[100] } },
        tooltip: {
          container: {
            background: colors.primary[400],
            color: colors.gray[100],
            borderRadius: '8px',
            padding: '8px 12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }
        }
      }}

      margin={isDashboard
        ? { top: 20, right: 30, bottom: 50, left: 50 }
        : { top: 50, right: 110, bottom: 80, left: 80 }
      }

      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}

      curve="catmullRom"
      enableArea={isDashboard}
      areaOpacity={0.15}

      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'Transportation',
        legendPosition: 'middle',
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: 5,
        legend: isDashboard ? undefined : 'Count',
        legendPosition: 'middle',
        legendOffset: -50,
      }}

      enableGridX={!isDashboard}
      enableGridY={true}

      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}

      useMesh={true}
      enableTouchCrosshair={true}

      legends={isDashboard ? [] : [
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
        }
      ]}
    />
  );  // ← Only one closing parenthesis + semicolon
};

export default LineChart;