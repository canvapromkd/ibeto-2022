import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import timeline from './Timeline.module.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const Landing = () => {
  return (
    <div style={{width:"100%", marginTop:"2%", marginBottom:"2%"}}>
      <div>
          <p className={timeline.title}>Timeline</p>
          <Container maxWidth="lg">
             <Box sx={{m:2, flexGrow:1, bgcolor:'rgba(176, 176, 176, 0.1)', p: 3}} style={{borderRadius:15, display:"flex"}}>
               <h4>Ibeto Registration started</h4>
            </Box>
            <Box sx={{m:2, flexGrow:1, bgcolor:'rgba(176, 176, 176, 0.1)', p: 3}} style={{borderRadius:15, display:"flex"}}>
               <h4>Ibeto Registration Closes</h4>
            </Box>
            <Box sx={{m:2, flexGrow:1, bgcolor:'rgba(176, 176, 176, 0.1)', p: 3}} style={{borderRadius:15, display:"flex"}}>
               <h4>Idea Submission deadline</h4>
            </Box>
            <Box sx={{m:2, flexGrow:1, bgcolor:'rgba(176, 176, 176, 0.1)', p: 3}} style={{borderRadius:15, display:"flex"}}>
               <h4>Announcement of Shortlisted Teams</h4>
            </Box>
         </Container>
      </div>
    </div>
  )
}

export default Landing