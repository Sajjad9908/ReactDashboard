import React from 'react';
import { Box, Toolbar, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material';
import { DataGrid, } from '@mui/x-data-grid';
import { tokens } from '../../Theme';
import { mockDataContacts } from '../../data/Mockdata';
import Header from '../../component/Header';

const Contacts = () => {
    const theme = useTheme();
  const colors=tokens(theme.palette.mode)

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field:'registrarId',
            headerName:'Registrat Id',
            type:'number',
            align:'left'

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
            headerName: 'zipCode',
        },

       
        
    ];


    return (
        <>
            <Box m='20px'> 
                <Header title='Contacts' subtitle="Managing The Contacts Members" />
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
                        },
                        '& .MuiDataGrid-toolbarContainer .MuiButton-text':{
                            color:`${colors.gray[100]} !important`
                        }
                    }}
                >
                    <DataGrid rows={mockDataContacts} columns={columns} showToolbar={true} />
                </Box>
            </Box>
        </>
    );
};

export default Contacts;
