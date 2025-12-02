import React from 'react';
import { Box, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../Theme';
import { mockDataContacts } from '../../data/Mockdata';
import Header from '../../component/Header';

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Media query to detect screen width
    const isSmallScreen = useMediaQuery('(max-width: 890px)');

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'registrarId',
            headerName: 'Registrar Id',
            type: 'number',
            align: 'left',
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
            field: 'address',
            headerName: 'Address',
        },
        {
            field: 'city',
            headerName: 'City',
        },
        {
            field: 'zipCode',
            headerName: 'Zip Code',
        },
    ];

    return (
        <>
            <Box m={isSmallScreen?'5px':'20px'}>
                <Header title='Contacts' subtitle="Managing The Contacts Members" />
                <Box
                    m='40px 0 0 0'
                    height='75vh'
                    width={isSmallScreen ? '100%' : '70%'} // Dynamically set width based on screen size
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
                        '& .MuiDataGrid-virtualScroller': {
                            backgroundColor: `${colors.primary[400]}!important`,
                        },
                        '& .MuiDataGrid-footerContainer': {
                            borderTop: 'none',
                            backgroundColor: `${colors.blueAccent[600]}!important`,
                        },
                        '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                            color: `${colors.gray[100]} !important`,
                        },
                    }}
                >
                    <DataGrid rows={mockDataContacts} columns={columns} showToolbar={true} />
                </Box>
            </Box>
        </>
    );
};

export default Contacts;
