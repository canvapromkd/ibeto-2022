import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Aos from "aos";
import wave_vector from "../../assets/svg/about/RulesWaveVector.svg";
import { IoClose } from "react-icons/io5";
import ibeto_logo from "../../assets/svg/ibeto22_no_text.svg";
import { guidelinesData } from "../../data/guidelines";

function RulesCard({ handleClose, handleOpen, open }) {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);

  return (
    <div data-aos="fade-up" className="rulesCard">
      <Dialog
        style={{ padding: 0, borderRadius: 10 }}
        fullWidth={true}
        maxWidth={"md"}
        PaperProps={{
          sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "70vh" },
        }}
        open={open}
        keepMounted
        onClose={handleClose}
        disableScrollLock
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent
          style={{ padding: 0, borderRadius: 10, scrollbarWidth: "none" }}
          sx={{ "&::-webkit-scrollbar": { display: "none" } }}
        >
          <div className="guide__Dialog">
            <IoClose className="psDialog__close" onClick={handleClose} />
            {/* <img src={wave_vector} alt="dialogvect" className='dialog_vector2' /> */}
            <div>
              <p className="rules__header">Guidelines</p>
            </div>
            <div className="rules_Dialog__content">
              <div className="rules__content">
                <div className="guide_lines_dwnld">
                <ul className="list__container">
                  {guidelinesData.map((data) => {
                    return <li key={data.id}>{data.content}</li>;
                  })}
                  
                </ul>
                <a href="https://drive.google.com/file/d/1LCj-kh48mc1dCC__HxSyKcsof_qPelWd/view"> <button style={{height:'2.5rem'}} className="about_btn guideBtn" onClick={handleOpen}>
                 Guidelines
                </button></a>
               
                </div>
                
                
                <img className="rules_logo" src={ibeto_logo} alt="ibeto_logo" />
                
              </div>
              
            </div>
            
            <div style={{ minHeight: "1rem" }}></div>
          </div>
        </DialogContent>
        <img src={wave_vector} alt="dialogvect" className="dialog_vector2 guideline__wave" />
      </Dialog>
    </div>
  );
}

export default RulesCard;
