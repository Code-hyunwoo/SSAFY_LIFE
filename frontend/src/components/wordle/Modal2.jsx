import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./Wordle.css"
import cong from '../../assets/images/cong.png'
import { useNavigate } from "react-router-dom"

const style = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '10px double #000',
  boxShadow: 24,
  p: 5,
};

export default function Modal2({openmodal2}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <div>
      <Modal
        open={openmodal2}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal_box">
          <img id="cong" src={cong} alt="cong" />
          <img id="cong2" src={cong} alt="cong2" />
          <div id="modal_title">
            정답 !!
          </div>
          <div id="wordle_description" >
          <span>이걸 알아내다니..</span> <br/><br/>  
          <span style={{color: "red"}}>암호 : " 디비디비딥 "</span>   <br/> 
          
          <button className="start_btn2" onClick={()=>{
            handleClose();
            navigate('/game') }}>게임 목록으로</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}