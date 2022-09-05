import "./Menu.css";
import overimg from "../../../assets/images/over.jpg"
import overbgm from "../../../assets/audio/GameOver.mp3"
import { useEffect, useState } from 'react';
import { useGameStats } from "../hooks/useGameStats";
import axios from "axios";
import rank2 from "../../../assets/images/royal2.png"
import rank3 from "../../../assets/images/royal.png"

const Menu = ({ onClick,firstplay,statlist }) => {

    useEffect(()=>{

      axios.get("https://t7c08.p.ssafy.io/api/tetris")
        .then((res)=>{
          // console.log(res)
            setRanklist(res.data);
        })
      

      if(firstplay === false){
        bgmVolume();
        console.log(statlist);
      } 
    },[]);
    
    const [gamer, setGamer] = useState("")
    const [ranklist, setRanklist] = useState([]);
    
    function bgmVolume(){
        var backgm = document.getElementById("bgm");
        backgm.volume = 0.2;
    }

    function onchagneGamer(e){
      setGamer(e.target.value);
    }

    function postRankpoints(){
      if (gamer !==""){
        axios.post("https://t7c08.p.ssafy.io/api/tetris",
        {
            "name": gamer,
            "points": statlist
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
    }}


return(

  <div className="Menu">

    {firstplay? 
    (<button className="Menu_Button" onClick={onClick}>
      Play Tetris
    </button>):
    (
    <div className="overdiv">
    <audio id="bgm" src={overbgm} autoPlay/>
    <img id="overimg" src={overimg} alt="over"/>
    
    <input id="score_input" onChange={onchagneGamer}  type="text" placeholder='명예의 이름' />
    <div id="score_point"> {statlist} Points</div>
    <button className='btn5' onClick={()=>{
                postRankpoints();
                alert('등록이 완료되었습니다.')
              }
              }> 랭킹 등록 </button>
    
    
    <button id="btn4" onClick={onClick}>
    Retry
  </button>
  </div>) }
  <div className="Rank_div">
      <div id="Ranking_title"> 
        <img id="rankimg1" src={rank2} alt="rank" />
        Ranking 
        <img id="rankimg2" src={rank2} alt="rank" />
        </div>
      <div id="ranklist_div">
        {ranklist.map((rank, index) => (
        <div  id="ranklist_div2" key={index}>
          {(index <= 2)? 
          <div>
          <img src={rank3} id="rank33"/> 
          <div>NO{index+1}.  {rank.name}  {rank.points}  Points</div>
          </div>
          : null}
          
        </div>
        )
        )}

      </div>
  </div>  


    </div>);
};

export default Menu;
