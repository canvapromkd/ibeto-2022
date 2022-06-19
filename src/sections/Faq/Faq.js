import * as React from 'react';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css'
import Aos from 'aos';
import { duration } from '@mui/material';
export default function Faq() {
   useEffect(()=>{
      Aos.init({duration:1500})
   },[])
  return (
    <div className="faq__maindiv">
      <div className="faqtitle" data-aos="fade-right">FAQ</div>
      <div className="accordion-content" data-aos="fade-left">
      <Accordion sx={{marginTop:"2%",border:null}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#195AC7"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* <Typography sx={{
            color:"#195AC7",
            fontStyle:"Poppins",
            fontSize:"130%"
          }}>1.   Lorem ipsum dolor sit amet, consectetur ?</Typography> */}
          <h1 className='accordionQue'>1.   Lorem ipsum dolor sit amet, consectetur ?</h1>
        </AccordionSummary>
        <AccordionDetails>
        <h1 className='accordionAns'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</h1>
        </AccordionDetails>
      </Accordion >
      <Accordion   sx={{marginTop:"2%",border:null}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#195AC7"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h1 className='accordionQue'>2.   Lorem ipsum dolor sit amet, consectetur ?</h1>
        </AccordionSummary>
        <AccordionDetails>
        <h1 className='accordionAns'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</h1>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{marginTop:"2%",border:null}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#195AC7"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1 className='accordionQue'>3.   Lorem ipsum dolor sit amet, consectetur ?</h1>
        </AccordionSummary>
        <AccordionDetails>
        <h1 className='accordionAns'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</h1>
        </AccordionDetails>
      </Accordion >
      <Accordion  sx={{marginTop:"2%",border:null}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#195AC7"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1 className='accordionQue'>4.   Lorem ipsum dolor sit amet, consectetur ?</h1>
        </AccordionSummary>
        <AccordionDetails>
          
          <h1 className='accordionAns'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</h1>
        </AccordionDetails>
      </Accordion >
      <Accordion  sx={{marginTop:"2%",border:null}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#195AC7"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1 className='accordionQue'>1.   Lorem ipsum dolor sit amet, consectetur ?</h1>
        </AccordionSummary>
        <AccordionDetails>
        <h1 className='accordionAns'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</h1>
        </AccordionDetails>
      </Accordion >
      <Accordion  sx={{marginTop:"2%",}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#195AC7"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <h1 className='accordionQue'>1.   Lorem ipsum dolor sit amet, consectetur ?</h1>
        </AccordionSummary>
        <AccordionDetails>
        <h1 className='accordionAns'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</h1>
        </AccordionDetails>
      </Accordion >
     
      </div>
      
    </div>
  );
}
