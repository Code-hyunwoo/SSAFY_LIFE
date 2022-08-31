import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./Wordle.css"
import cong from '../../assets/images/cong.png'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from "axios";
import pang from "../../assets/audio/pangpare.mp3"

const style = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '10px double #000',
  boxShadow: 24,
  p: 5,
};

export default function Modal2({openmodal2}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [royalName, setRoyalname] = useState("");

  const navigate = useNavigate();


  function postRoyalName(){
    console.log(royalName)
    var today = new Date();

      var year = today.getFullYear();
      var month = ('0' + (today.getMonth() + 1)).slice(-2);
      var day = ('0' + today.getDate()).slice(-2);
      var dateString = year + '년 '  + month  + '월 ' + day + '일';
      var hours = ('0' + today.getHours()).slice(-2); 
      var minutes = ('0' + today.getMinutes()).slice(-2);
      var seconds = ('0' + today.getSeconds()).slice(-2); 
      var timeString = hours + ':' + minutes  + ':' + seconds;

      if (royalName !==""){
        axios.post("https://t7c08.p.ssafy.io/api/wordle",
        {
            "royal_name": royalName,
            "royal_date": dateString,
            "royal_time": timeString
        },
        {
            headers: {
            "Content-Type": "application/json",
            "Accept" : "*/*",
        },
        
    })
    .then((res)=>{
        console.log(res)
    })

  }

  }
  

  function onRoyalname(e){
    setRoyalname(e.target.value);
  }

  function onkeyEnter(e){
    if (royalName!=="" & e.key =='Enter'){
          postRoyalName();
          handleClose();
          navigate('/game')
          alert('등록이 완료되었습니다.')
    }
  }

  return (
    <div>
      <Modal
        open={openmodal2}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal_box">
        <audio src={pang} autoPlay />
          <img id="cong" src={cong} alt="cong" />
          <img id="cong2" src={cong} alt="cong2" />
          <div id="modal_title">
            정답 !!
          </div>
          <div id="wordle_description" >
          <div id="royal"><span> 명예의 전당에 남길 <span style={{color: "red"}}>당신의 이름</span>을 입력해주세요.</span>
            <div style={{
              margin:"3vh"
            }}>
              <input id="royal_input" onChange={onRoyalname} type="text" placeholder='명예의 이름' onKeyDown={onkeyEnter}/>
              <button className='btn3'onClick={()=>{
                postRoyalName();
                handleClose();
                navigate('/game')
                alert('등록이 완료되었습니다.')
              }
              }> 등록 </button>
            </div>
            </div> 
          {/* <span style={{color: "red"}}>암호 : " 디비디비딥 "</span>   <br/>  */}

          <button className="start_btn2" onClick={()=>{
            handleClose();
            navigate('/game') }}>게임 목록으로</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}