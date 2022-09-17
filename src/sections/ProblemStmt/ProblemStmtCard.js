import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

import dialog_vector1 from '../../assets/svg/dialog_vector1.svg'
import dialog_vector2 from '../../assets/svg/dialog_vector2.svg'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProblemStmtCard({ name, image, description, statements }) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='problemStmtCard'>
        <h2 >{name}</h2>
        <img src='' alt='' />
        <button onClick={handleClickOpen}>View Details</button>

        <Dialog
          style={{ padding: 0, borderRadius: 10}}
          fullWidth={true}
          maxWidth={"md"}
          PaperProps={{ sx: { width: "100%", borderRadius: 5, m: 2, minHeight: '70vh' } }}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          disableScrollLock
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent
            style={{ padding: 0, borderRadius: 10 }}
          >
            <div className='psDialog'>
              <img src={dialog_vector1} alt="" className='dialog_vector1' />
              <img src={dialog_vector2} alt="" className='dialog_vector2' />
              <div className='psDialog__header'>
                <h2>{name}</h2>
              </div>
              <div className='psDialog__content'>
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.</p>
                <h4>Statements</h4>
                <ul>
                  {statements.map((st, id) => (
                    <li>{st}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProblemStmtCard