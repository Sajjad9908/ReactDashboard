import React from 'react'
import { Box,Button,colors,TextField, useTheme } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import {useMediaQuery} from '@mui/material'
import Header from '../../component/Header'
import { tokens } from '../../Theme'


const phoneReg=/^(03[0-9]{9}|0[2-9]{1}[0-9]{1}-[0-9]{7})$/

const initialValues={
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    address1:"",
    address2:"",
}
const UserSchema=yup.object().shape({
    firstName:yup.string().required('required'),
    lastName:yup.string().required('required'),
    email:yup.string().email('you entered invalid email').required('required'),
    contact:yup.string().required('required'),


})
const Form2 = () => {
 
    const isMobile=useMediaQuery('(min-width:750px)')
   
    const handleSubmit=(values)=>{
        console.log(values)
    }

    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
  return (
    <Box m='20px' bgcolor={`${colors.primary[400]}`} padding='25px'>
        <Header title='Create User' subtitle='Create a New User Profile'/>

        <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={UserSchema}
        >
  {({values,errors,touched,handleBlur,handleChange,handleSubmit})=>(
<form onSubmit={handleSubmit}>
    <Box display='grid'gap='30px'  gridTemplateColumns="repeat(2, 1fr)"
   sx={{
    '& > div': {
      gridColumn: isMobile ? 'span 1' : 'span 2',  // Mobile will have single column per row, larger screens will span 2 for the first item
    },
    '& >div:nth-of-type(n+3)':{
        display:'grid',
    gridTemplateColumns:'repeat(1)',
    gridColumn:'1',
  
    alignContent:'center!important'
    }
    }} >
        <TextField  fullWidth variant='filled' type='text' label='First Name' onBlur={handleBlur} onChange={handleChange} value={values.firstName} name='firstName' error={!!touched.firstName && !!errors.firstName}
        helperText={touched.firstName&&errors.firstName}
        sx={{gridColumn:'span 2' }}>

        </TextField>
     <TextField fullWidth variant='filled' type='text' label='Last Name' onBlur={handleBlur} onChange={handleChange} value={values.lastName} name='lastName' error={!!touched.lastName && !!errors.lastName}
        helperText={touched.lastName&&errors.lastName}
        sx={{gridColumn:'span 2'}}>

        </TextField>


         <TextField fullWidth variant='filled' type='email' label='email' onBlur={handleBlur} onChange={handleChange} value={values.email} name='email' error={!!touched.email && !!errors.email}
        helperText={touched.email&&errors.email}
        sx={{gridColumn:'span 2'}}>

        </TextField>


         <TextField fullWidth variant='filled' type='number' label='contact' onBlur={handleBlur} onChange={handleChange} value={values.contact} name='contact' error={!!touched.contact && !!errors.contact}
        helperText={touched.contact&&errors.contact}
        sx={{gridColumn:'span 2'}}>

        </TextField>

 <TextField fullWidth variant='filled' type='text' label='address1' onBlur={handleBlur} onChange={handleChange} value={values.address1} name='address1' error={!!touched.address1 && !!errors.address1}
        helperText={touched.address1&&errors.address1}
        sx={{gridColumn:'span 2'}}>

        </TextField>

        <TextField fullWidth variant='filled' type='text' label='address2' onBlur={handleBlur} onChange={handleChange} value={values.address2} name='address2' error={!!touched.address2 && !!errors.address2}
        helperText={touched.address2&&errors.address2}
        sx={{gridColumn:'span 2'}}>

        </TextField>
        <Button  type='submit' variant='contained' sx={{gridColumn:'span 2', padding:'10px',backgroundColor:`${colors.greenAccent[300]}`,width:'150px'}}>
          Submit
        </Button>
    </Box>
   
       
       
</form>
    
 )}
        </Formik>
 
    </Box>
  )
}

export default Form2