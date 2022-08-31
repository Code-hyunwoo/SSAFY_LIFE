import { useEffect, useState } from "react";
import Modal1 from "./Modal1";
import "./Wordle.css"
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import axios from "axios";
import royal3 from "../../assets/images/royal.png"
import royal2 from "../../assets/images/royal2.png"

function Wordle() {

  useEffect(()=>{
      axios.get("https://t7c08.p.ssafy.io/api/wordle")
        .then((res)=>{
            const answers = res.data
            const pickanswer = answers[Math.floor(Math.random() * answers.length)]
            setAnswer(pickanswer.dab)
        })
  },[])

  useEffect(()=>{
    axios.get("https://t7c08.p.ssafy.io/api/wordle/royal")
    .then((res)=>{
      setRoyalList(res.data)
    })
  },[])

        
       const [count, setCount] = useState(0)
       const [check, setCheck] = useState(0)
       const [countbox, setCountbox] = useState('count_box1')
       const [openmodal2, setOpenmodal2] = useState(false)
       const [openmodal3, setOpenmodal3] = useState(false)
       const [idcount, setIdcount] = useState(0)
       const [answer, setAnswer] = useState('')
       const [royalList, setRoyalList] = useState([])



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

function onkeyPress(e){
  if(e.key == 'Enter'){
    checkinganswer();
    if (idcount === 0){
    document.getElementById(`inputid`+idcount).focus();
    setIdcount(idcount+1);
  }
    else if( idcount===1 ){
    document.getElementById(`inputid`+idcount).focus();
    setIdcount(idcount+1);
  }
    else if( idcount===2 ){
    document.getElementById(`inputid`+idcount).focus();
    setIdcount(idcount+1);
  }
    
    else if( idcount===3 ){
    document.getElementById(`inputid`+idcount).focus();
    setIdcount(idcount+1);
  }
    else if( idcount===4 ){
    document.getElementById(`inputid`+idcount).focus();
    setIdcount(idcount+1);
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
      
      
      {/* royal box */}
      <div className="royal_box">
        <div id="royal_title">
         <img id="royal_image2" src={royal2} alt="royal2" />
         명예의 전당
         <img id="royal_image3" src={royal2} alt="royal2" />
        </div>
        {royalList.map((royal, index)=>(
          <div id="royal_man"  key={index}>
            <div style={{ fontSize: "2vw" }}>  <img id="royal_crown" src={royal3} alt="royal" /> {royal.name}   </div>
             <div style={{ fontSize:"1.1vw" }}>{royal.date} {royal.time} </div>
          </div>
        )
        )}
      </div>

      <div className="hint_box">
        <div id="hint_title"> 힌트 </div>
        <img id="hint_img" src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/08/10/114905283.1.jpg"></img>
        <div style={{ 
          marginTop:"5vh"
        }}> 뉴진스..? </div>
      </div>



      <div id="input_box">
        <div id={countbox}/>
        <input className="wordle_input1" maxLength="1" name="num1"/>
        <input className="wordle_input1" maxLength="1" name="num2"/>
        <input className="wordle_input1" maxLength="1" name="num3"/>
        <input className="wordle_input1" maxLength="1" name="num4"/>
        <input className="wordle_input1" maxLength="1" name="num5" onKeyPress={onkeyPress}/>
      </div>
      <div id="input_box">
        <input className="wordle_input2" id="inputid0"/>
        <input className="wordle_input2" />
        <input className="wordle_input2" />
        <input className="wordle_input2" />
        <input className="wordle_input2" onKeyPress={onkeyPress}/>
      </div>
      <div id="input_box">
        <input className="wordle_input3" id="inputid1"/>
        <input className="wordle_input3" />
        <input className="wordle_input3" />
        <input className="wordle_input3" />
        <input className="wordle_input3" onKeyPress={onkeyPress}/>
      </div>
      <div id="input_box">
        <input className="wordle_input4" id="inputid2"/>
        <input className="wordle_input4" />
        <input className="wordle_input4" />
        <input className="wordle_input4" />
        <input className="wordle_input4" onKeyPress={onkeyPress}/>
      </div>
      <div id="input_box">
        <input className="wordle_input5" id="inputid3"/>
        <input className="wordle_input5" />
        <input className="wordle_input5" />
        <input className="wordle_input5" />
        <input className="wordle_input5" onKeyPress={onkeyPress}/>
      </div>
      <div id="input_box">
        <input className="wordle_input6" id="inputid4"/>
        <input className="wordle_input6" />
        <input className="wordle_input6" />
        <input className="wordle_input6" />
        <input className="wordle_input6" onKeyPress={onkeyPress}/>
      </div>
      
      

    </div>
  );
}

export default Wordle;