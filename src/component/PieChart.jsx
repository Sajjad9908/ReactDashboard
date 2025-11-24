import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { mockPieData as data } from '../data/Mockdata';
import { tokens } from '../Theme';
import { useTheme } from '@mui/material';


const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    
    
      <ResponsivePie
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.gray[400],
              },
            },
            legend: {
              text: {
                fill: colors.gray[400],
              },
            },
            ticks: {
              line: {
                stroke: colors.gray[400],
                strokeWidth: 2,
              },
              text: {
                fill: colors.gray[400],
              },
            },
          },
          legends: {
            text: {
              fill: colors.gray[400],
            },
          },
          tooltip: {
            container: {
              background: colors.gray[800], // Optional: change background if needed
              color: colors.gray[400], // Tooltip text color
            },
            basic: {
              color: colors.gray[400], // Change text color for basic tooltip info
            },
          },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5} // Optional: adjust for donut-like chart
        padAngle={0.6} // Optional: controls the spacing between slices
        cornerRadius={2} // Optional: smooths the corners of slices
        activeOuterRadiusOffset={8} // Optional: offset when slice is active
        arcLinkLabelsSkipAngle={10} // Skips labels if the angle is smaller than 10
        arcLinkLabelsTextColor="white" // Set arc link label color to white
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={true} // Set to true if you want to display labels on the pie slices
        arcLabelsSkipAngle={10} // Skips labels on small slices
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            symbolShape: 'circle',
          },
        ]}
         
       
      />
    
  );
};

export default PieChart;
