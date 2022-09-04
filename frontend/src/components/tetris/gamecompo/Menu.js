import "./Menu.css";
import overimg from "../../../assets/images/over.jpg"
import overbgm from "../../../assets/audio/GameOver.mp3"
import { useEffect } from 'react';

const Menu = ({ onClick,firstplay }) => {

    useEffect(()=>{

      if(firstplay === false){
        bgmVolume();
      } 
    },[]);
    
    function bgmVolume(){
        var backgm = document.getElementById("bgm");
        backgm.volume = 0.2;
    }


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
    <button id="btn4" onClick={onClick}>
    Retry
  </button></div>) }
  </div>);
};

export default Menu;
