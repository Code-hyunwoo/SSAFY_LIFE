import { useState } from "react";
import "./Wordle.css"

function Wordle() {
       const answer = 'abcde';
       const [count, setCount] = useState(0)

       function checkinganswer(){
         
         setCount(count+1);
        if (count === 0){
          var player_input = document.querySelectorAll('.wordle_input1')
          console.log(player_input)
          for (let i = 0; i < 5; i++){
          if (player_input[i].value === answer[i]){
            console.log("정답")
            player_input[i].style.background = 'green';
            player_input[i].style.color = 'red';
          } else if (player_input[i].value !== "" & answer.includes(player_input[i].value)){
            player_input[i].style.background = 'yellow';
            player_input[i].style.color = 'red';
          } else {
            player_input[i].style.background = 'lightgrey';
          }

          // player_input[i].classList.remove('input');
        }        

          
      }
      }

  return (
    <div className="container" >
      <div id="title">Wordle</div> 
      <button className="submit_btn" onClick={checkinganswer}> 제출하기 </button>
      <div id="tutorial"> 게임 설명 </div>
      <div id="tutorial_text">
      6번의 기회를 통해, <br/> 
      현우가 지정해 놓은 다섯 글자 한글 단어를 맞추자! <br/>
      <br/>
      초록색 ▶ 정답 단어의 글자와 위치가 모두 일치 <br/>
      노란색 ▶ 정답 단어에 들어가는 글자이지만 위치가 불일치 <br/>
      회색 ▶ 정답 단어에 없는 글자
      <br/>
      <br/>
      모든 타일을 초록색으로 만들고 제출하면 정답! <br/>
      정답을 맞추면 나오는 암호를 현우에게 말하면 푸짐한 선물이~

      </div>
      {/* <button className="submit_btn" onClick={checkinganswer}> 제출하기 </button> */}
      <div id="input_box">
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