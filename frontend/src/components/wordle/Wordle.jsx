import { useState } from "react";
import Modal1 from "./Modal1";
import "./Wordle.css"
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";

function Wordle() {

        
       const answerlist = ['싸피킹현우', '집돌이현우', '현우잘생김','현우킹왕짱']
       const [count, setCount] = useState(0)
       const [check, setCheck] = useState(0)
       const [countbox, setCountbox] = useState('count_box1')
       const [openmodal2, setOpenmodal2] = useState(false)
       const [openmodal3, setOpenmodal3] = useState(false)
       const [answer, setAnswer] = useState(answerlist[Math.floor(Math.random() * answerlist.length)])
       function checkinganswer(){
         
         setCount(count+1);
        if (count === 0){
          var player_input = document.querySelectorAll('.wordle_input1')
          let jungdab = 0
          setCountbox('count_box2')
          for (let i = 0; i < 5; i++){
          if (player_input[i].value === answer[i]){
            player_input[i].style.background = 'green';
            player_input[i].style.color = 'white';
            jungdab++;
          } else if (player_input[i].value !== "" & answer.includes(player_input[i].value)){
            player_input[i].style.background = 'yellow';
            player_input[i].style.color = 'red';
          } else {
            player_input[i].style.background = 'lightgrey';
          } 
        }   
        if (jungdab===5){
          setOpenmodal2(true);
        }
                  
      } else if (count ===1) {
        var player_input = document.querySelectorAll('.wordle_input2')
        let jungdab = 0
        setCountbox('count_box3')
        for (let i = 0; i < 5; i++){
        if (player_input[i].value === answer[i]){
          player_input[i].style.background = 'green';
          player_input[i].style.color = 'white';
          jungdab++;
        } else if (player_input[i].value !== "" & answer.includes(player_input[i].value)){
          player_input[i].style.background = 'yellow';
          player_input[i].style.color = 'red';
        } else {
          player_input[i].style.background = 'lightgrey';
        } 
      } 
      if (jungdab===5){
        setOpenmodal2(true);
      }       
    } else if (count ===2) {
      var player_input = document.querySelectorAll('.wordle_input3')
      let jungdab = 0
      setCountbox('count_box4')
      for (let i = 0; i < 5; i++){
      if (player_input[i].value === answer[i]){
        player_input[i].style.background = 'green';
        player_input[i].style.color = 'white';
        jungdab++;
      } else if (player_input[i].value !== "" & answer.includes(player_input[i].value)){
        player_input[i].style.background = 'yellow';
        player_input[i].style.color = 'red';
      } else {
        player_input[i].style.background = 'lightgrey';
      } 
    }     
    if (jungdab===5){
      setOpenmodal2(true);
    }   
  } else if (count ===3) {
    var player_input = document.querySelectorAll('.wordle_input4')
    let jungdab = 0
    setCountbox('count_box5')
    for (let i = 0; i < 5; i++){
    if (player_input[i].value === answer[i]){
      player_input[i].style.background = 'green';
      player_input[i].style.color = 'white';
      jungdab++;
    } else if (player_input[i].value !== "" & answer.includes(player_input[i].value)){
      player_input[i].style.background = 'yellow';
      player_input[i].style.color = 'red';
    } else {
      player_input[i].style.background = 'lightgrey';
    } 
  }        
  if (jungdab===5){
    setOpenmodal2(true);
  }
} else if (count ===4) {
  var player_input = document.querySelectorAll('.wordle_input5')
  let jungdab = 0
  setCountbox('count_box6')
  for (let i = 0; i < 5; i++){
  if (player_input[i].value === answer[i]){
    player_input[i].style.background = 'green';
    player_input[i].style.color = 'white';
    jungdab++;
  } else if (player_input[i].value !== "" & answer.includes(player_input[i].value)){
    player_input[i].style.background = 'yellow';
    player_input[i].style.color = 'red';
  } else {
    player_input[i].style.background = 'lightgrey';
  } 
}        
if (jungdab===5){
  setOpenmodal2(true);
}
} else if (count ===5) {
  var player_input = document.querySelectorAll('.wordle_input6')
  let jungdab = 0
  for (let i = 0; i < 5; i++){
  if (player_input[i].value === answer[i]){
    player_input[i].style.background = 'green';
    player_input[i].style.color = 'white';
    jungdab++;
  } else if (player_input[i].value !== "" & answer.includes(player_input[i].value)){
    player_input[i].style.background = 'yellow';
    player_input[i].style.color = 'red';
  } else {
    player_input[i].style.background = 'lightgrey';
  } 
}        
if (jungdab===5){
  setOpenmodal2(true);
} else {
  setOpenmodal3(true);
}
} 
}

  return (
    <div className="wordle_container" >
      <Modal1/>
      <Modal2 openmodal2={openmodal2}/>
      <Modal3 openmodal3={openmodal3} setOpenmodal3={setOpenmodal3}/>
      <div id="title">Wordle</div> 
      <button className="submit_btn" onClick={checkinganswer}> 제출하기 </button>
      {/* <div id={countbox}>
      
      </div>       */}
      <div id="input_box">
        <div id={countbox}/>
        <input className="wordle_input1" />
        <input className="wordle_input1" />
        <input className="wordle_input1" />
        <input className="wordle_input1" />
        <input className="wordle_input1" />
      </div>
      <div id="input_box">
        <input className="wordle_input2" />
        <input className="wordle_input2" />
        <input className="wordle_input2" />
        <input className="wordle_input2" />
        <input className="wordle_input2" />
      </div>
      <div id="input_box">
        <input className="wordle_input3" />
        <input className="wordle_input3" />
        <input className="wordle_input3" />
        <input className="wordle_input3" />
        <input className="wordle_input3" />
      </div>
      <div id="input_box">
        <input className="wordle_input4" />
        <input className="wordle_input4" />
        <input className="wordle_input4" />
        <input className="wordle_input4" />
        <input className="wordle_input4" />
      </div>
      <div id="input_box">
        <input className="wordle_input5" />
        <input className="wordle_input5" />
        <input className="wordle_input5" />
        <input className="wordle_input5" />
        <input className="wordle_input5" />
      </div>
      <div id="input_box">
        <input className="wordle_input6" />
        <input className="wordle_input6" />
        <input className="wordle_input6" />
        <input className="wordle_input6" />
        <input className="wordle_input6" />
      </div>
      

    </div>
  );
}

export default Wordle;