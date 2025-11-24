import React from 'react'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../Theme'

const ProgressCircle = ({progress="0.70", size="40"} ) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.tokens);
    
    // Convert progress to a number if it's a string and then calculate the angle
    const angle = parseFloat(progress) * 360;

    return (
        <Box
            sx={{
                background: `
                    radial-gradient(circle at center, ${colors.blueAccent[400]} 55%, transparent 56%),
                    conic-gradient(${colors.blueAccent[500]} ${angle}deg, transparent 0deg 360deg),
                    ${colors.greenAccent[500]}
                `,
                borderRadius: '50%',
                width: `${size}px`,
                height: `${size}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Center content if you plan to add anything
            }}
        >
        </Box>
    );
};

export default ProgressCircle;
