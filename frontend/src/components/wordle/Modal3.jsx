import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./Wordle.css"
import { useNavigate } from "react-router-dom"
import xxx from '../../assets/images/xxx.png'

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

export default function Modal3({openmodal3, setOpenmodal3}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <div>
      <Modal
        open={openmodal3}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal_box">
          <div id="modal_title">
            실패 !!
          </div>
          <img id="xxx" src={xxx} alt="xxx" />
          <img id="xxx2" src={xxx} alt="xxx2" />
          <div id="wordle_description" >
          <img id="melong" src="https://c.tenor.com/x_Bn7aNtJecAAAAC/%EB%A9%94%EB%A1%B1-make-face.gif" alt="melong" />
          <div> 못 맞췄지롱~ </div> 
          
          <button className="start_btn" onClick={()=>{
            setOpenmodal3(false);
            navigate("/game") }}>돌아가기</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}