import * as React from 'react';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import './Faq.css'
import Aos from 'aos';
import { HiPlus, HiX } from "react-icons/hi";

const Faqs = [
  {
     id: 1,
     panel: "label1",
     title: "Lorem ipsum dolor sit amet, consectetur ?",
     desc: "Absolutely not, it is free for everyone. The only thing you are required to have is a mind to have  fun, learn new things, and a passion to create new things!",
  },
  {
     id: 2,
     panel: "label2",
     title: "I’m a newbie, so can I participate?",
     desc: "Our events are beginner friendly and hence are open to both beginners and experts alike. Whether you are someone who is absolutely clueless about the world of DeFi and wants to dive right in or whether you are someone who wants to prove their mettle, we encourage all sorts of entries!",
  },
  {
     id: 3,
     panel: "label3",
     title: "I have no Team, and want to register Solo. Can I register for the Chain Wars?",
     desc: "We don’t accept individual entries, and it is mandatory to have a team with a minimum of 2 and a maximum of 5 members. Learning new things is so much more fun, if you have a group of people to learn it with!",
  },
  {
     id: 4,
     panel: "label4",
     title: "Is there a Code of Conduct?",
     desc: "Yes, we have typed together a code of conduct and attached it here. ",
  },
  {
    id: 5,
    panel: "label5",
    title: "Is there a Code of Conduct?",
    desc: "Yes, we have typed together a code of conduct and attached it here. ",
 },
 {
  id: 6,
  panel: "label6",
  title: "Is there a Code of Conduct?",
  desc: "Yes, we have typed together a code of conduct and attached it here. ",
},
];
export default function Faq() {
  const[expanded,setExpanded]=React.useState(false)
  const handleChange=(panel)=>(event,isExpanded)=>{
    setExpanded(isExpanded?panel:false)
  }

  
   useEffect(()=>{
      Aos.init({duration:1500})
   },[])
  return (
    <div className="faq__maindiv">
      <div className="faqtitle" data-aos="fade-right">FAQ</div>
      <div  data-aos="fade-left" className='accordion-container'>

     {Faqs.map((faq)=>{
      return(
        <div>
          <Accordion sx={{boxShadow:"none"}} expanded={expanded === `${faq.panel}`} onChange={handleChange(`${faq.panel}`)} className={`${faq.panel}`} key={faq.id}>
          
          <AccordionSummary  expandIcon={expanded === `${faq.panel}` ? <HiX sx={{color:"blue"}}/> : <HiPlus sx={{color:"#195AC7"}}  />} aria-controls={`${faq.panel}a-content`} id={`${faq.panel}a-header`}>
          
          <h1 className='accordionQue'>{faq.title}</h1>
        </AccordionSummary>
        
        <AccordionDetails >
        <h1 className='accordionAns'>{faq.desc}</h1>
        </AccordionDetails>
      </Accordion >
      <br />
        </div>
      )
     })}
        
      

     
      </div>
      
    </div>
  );
}


