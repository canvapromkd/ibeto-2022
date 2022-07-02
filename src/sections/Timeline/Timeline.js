import React from 'react'
import timeline from './Timeline.module.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
// import Aos from 'aos'

const TimeStamp = () => {
return(
   
   <Box
   style={{
      background:"white",
      marginRight:"10%",
      padding:"1%",
      paddingRight:"10px",
      display:"flex",
      borderRadius:"0 100px 100px 0",
      boxShadow: "100px" 
   }}
   >
   <h4 style={{marginBottom:0, fontWeight:"bold", display:"flex", alignItems:"center",justifyConetnt:"center" }}>02</h4>
  <label style={{marginLeft:"5px",display:"flex", alignItems:"center",justifyConetnt:"center", fontWeight:"100" }}> Sep 2022</label>  
   </Box> 
   
)
}


const Landing = () => {
  return (
    <div style={{width:"100%", marginTop:"2%", marginBottom:"2%"}}>
      <div>
          <p className={timeline.title} data-aos="fade-right">Timeline</p>
          <Container maxWidth="lg" data-aos="fade-left">
             <Box sx={{m:2, flexGrow:1, bgcolor:'rgba(176, 176, 176, 0.1)', p: 3}} style={{borderRadius:15, display:"flex"}}>
             <TimeStamp />
              <h4>Ibeto Registration started</h4>
            </Box>
            <Box sx={{m:2, flexGrow:1, bgcolor:'rgba(176, 176, 176, 0.1)', p: 3}} style={{borderRadius:15, display:"flex"}}>
            <TimeStamp />
               <h4>Ibeto Registration Closes</h4>
            </Box>
            <Box sx={{m:2, flexGrow:1, bgcolor:'rgba(176, 176, 176, 0.1)', p: 3}} style={{borderRadius:15, display:"flex"}}>
            <TimeStamp />
               <h4>Idea Submission deadline</h4>
            </Box>
            <Box sx={{m:2, flexGrow:1, bgcolor:'rgba(176, 176, 176, 0.1)', p: 3}} style={{borderRadius:15, display:"flex"}}>
            <TimeStamp />
               <h4>Announcement of Shortlisted Teams</h4>
            </Box>
         </Container>
      </div>
    </div>
  )
}

export default Landing