import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../Theme';
import { mockDataTeam } from '../../data/Mockdata';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SecurityIcon from '@mui/icons-material/Security';
import Header from '../../component/Header';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'Name',
            cellClassName: 'name-column--cell', // Fixing typo
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
        },
        {
            field: 'email',
            headerName: 'Email',
        },
        {
            field: 'access',
            headerName: 'Access Level',
            flex: '1',
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width='60%'
                        m='0 auto'
                        p='5px'
                        display='flex'
                        justifyContent='center'
                        backgroundColor={
                            access === 'admin'
                                ? colors.greenAccent[600]
                                : colors.greenAccent[700]
                        }
                        borderRadius='4px'
                    >
                        {access === 'admin' && <AdminPanelSettingsIcon />}
                        {access === 'manager' && <SecurityIcon />}
                        {access === 'user' && <LockOpenIcon />}
                        <Typography color={colors.gray[100]} sx={{ ml: '5px' }}></Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <>
            <Box m='20px'>
                <Header title='Team' subtitle="Managing The Team Members" />
                <Box
                    m='40px 0 0 0'
                    height='75vh'
                    width='70%'
                    sx={{
                        '& .MuiDataGrid-root': {
                            border: 'none !important',
                        },
                        '& .MuiDataGrid-cell': {
                            borderBottom: 'none !important',
                        },
                        '& .name-column--cell': {
                            color: colors.greenAccent[300], // Corrected the typo here
                        },
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: `${colors.blueAccent[700]} !important`,
                            borderBottom: 'none',
                        },
                        '& .MuiDataGrid-virtualScroller':{
                            backgroundColor:`${colors.primary[400]}!important`
                        },
                        '& .MuiDataGrid-footerContainer':{
                            borderTop:'none',
                            backgroundColor:`${colors.blueAccent[600]}!important`
                        }
                    }}
                >
                    <DataGrid rows={mockDataTeam} columns={columns} />
                </Box>
            </Box>
        </>
    );
};

export default Team;
