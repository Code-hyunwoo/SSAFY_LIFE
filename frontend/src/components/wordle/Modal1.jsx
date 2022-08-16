import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./Wordle.css"

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

export default function Modal1() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal_box">
          <div id="modal_title">
            게임 설명
          </div>
          <div id="wordle_description" >
            <span style={{color: "red"}}>총 6번</span>의 기회를 통해, <br/> 
            현우가 지정해 놓은 다섯 글자 <span style={{color: "red"}}>한글 단어</span>를 맞추자! <br/>
            <br/>
            <span style={{color: "green"}}>초록색 ▶ </span>  정답 단어의 글자와 위치가 모두 일치 <br/>
            <span style={{color: "yellow"}}>노란색 ▶ </span> 정답 단어에 들어가는 글자이지만 위치가 불일치 <br/>
            <span style={{color: "lightgrey"}}>회색 ▶</span> 정답 단어에 없는 글자
            <br/>
            <br/>
            모든 타일을 초록색으로 만들고 제출하면 정답! <br/>
            정답을 맞추면 나오는 <span style={{color: "red"}}>암호를 현우에게 말하면 푸짐한 선물이~ </span>
          </div>
          <div>
            <button className="start_btn" onClick={handleClose}>START</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}