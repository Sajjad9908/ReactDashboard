import React from 'react';
import { Box, Toolbar, Typography, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../Theme';
import { mockDataInvoices } from '../../data/Mockdata';
import Header from '../../component/Header';

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
   const SmallScreen=useMediaQuery('(max-width: 890px)');

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
            field: 'phone',
            headerName: 'Phone Number',
        },
        {
            field: 'email',
            headerName: 'Email',
        },
         {
            field:'cost',
            headerName: 'cost',
        
            renderCell:({row:{cost}})=>{
               
                return(
                    <Typography sx={{color:`${colors.gray[100]}`}}>
                              {cost}            </Typography>
                )
            }
        },
          {
            field: 'date',
            headerName: 'Date',
            flex: '1',
        },
          
       
        
    ];
   
    return (
        <>
            <Box m='5px'>
                <Header title='Invoices' subtitle="Managing The Invoices Members" />
                <Box
                    m='40px 0 0 0'
                    height='75vh'
                    width={`${SmallScreen?'100%':'70%'}`}
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
                        '& .MuiCheckbox-root':{
                            color:`${colors.greenAccent[200]}!important`
                        }
                    }}
                >
                    <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}  />
                </Box>
            </Box>
        </>
    );
};

export default Invoices;
