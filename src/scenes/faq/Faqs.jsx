import  Accordion  from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import Header from "../../component/Header"
import {Box,Typography,useMediaQuery,useTheme} from "@mui/material"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../Theme"

const Faqs = () => {
const theme=useTheme()
const colors=tokens(theme.palette.mode)


  return (
    <Box mt='20px' width='80%' marginLeft='40px' p='20px'  bgcolor={colors.primary[400]}>
        <Header title='Faqz Section' subtitle='You can Ask Frequently Asked Question here'/>
        <Box mt="68px">
        <Accordion defaultExpanded sx={{width:'90%',mt:'30px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
             <Typography color={colors.greenAccent[500]} variant="h5">An Important Question</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga rerum doloribus debitis cupiditate consectetur exercitationem, ea et nulla, dignissimos labore laborum laboriosam illum, velit voluptatem esse totam dolorum corrupti!
                </Typography>
            </AccordionDetails>
        </Accordion>


         <Accordion defaultExpanded sx={{width:'90%',mt:'30px',borderRadius:'20px', padding:'10px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
             <Typography color={colors.greenAccent[500]} variant="h5">What You Know About Us</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga rerum doloribus debitis cupiditate consectetur exercitationem, ea et nulla, dignissimos labore laborum laboriosam illum, velit voluptatem esse totam dolorum corrupti!
                </Typography>
            </AccordionDetails>
        </Accordion>


         <Accordion defaultExpanded sx={{width:'90%',mt:'30px',borderRadius:'20px', padding:'10px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
             <Typography color={colors.greenAccent[500]} variant="h5">Have You Already Submitted Your Documents</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga rerum doloribus debitis cupiditate consectetur exercitationem, ea et nulla, dignissimos labore laborum laboriosam illum, velit voluptatem esse totam dolorum corrupti!
                </Typography>
            </AccordionDetails>
        </Accordion>


         <Accordion defaultExpanded sx={{width:'90%',mt:'30px',borderRadius:'20px', padding:'10px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
             <Typography color={colors.greenAccent[500]} variant="h5">Does Your Documents Verified</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga rerum doloribus debitis cupiditate consectetur exercitationem, ea et nulla, dignissimos labore laborum laboriosam illum, velit voluptatem esse totam dolorum corrupti!
                </Typography>
            </AccordionDetails>
        </Accordion>
        </Box>
     
    </Box>
  )
}

export default Faqs