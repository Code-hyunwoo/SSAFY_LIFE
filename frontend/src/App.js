import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Motion from "./routes/Motion";
import Home from "./routes/Home"
import Ssaraoke from "./routes/Ssaraoke";
import Guest from "./routes/Guest";
import { useEffect, useState } from "react";
import All_Night from "./assets/audio/All_Night.mp3"
import Heart from "./assets/audio/Heart_Burn.mp3"
import Back from "./assets/audio/Back.mp3"
import BAMBOLEO from "./assets/audio/BAMBOLEO.mp3"
import DM from "./assets/audio/DM.mp3"
import Memory from "./assets/audio/Memory.mp3"
import Time from "./assets/audio/Out_of_Time.mp3"
import Walls from "./assets/audio/4Walls.flac"
import WE from "./assets/audio/WE_GO.mp3"
import Sparkling from "./assets/audio/Sparkling.mp3"
import musicON from "./assets/images/on.png"
import musicOFF from "./assets/images/off.png"
import next from "./assets/images/next.png"
import Musicbar from "./components/Musicbar";
import Navbar from "./components/Navbar";
import Game from "./routes/Game";
import Attention from "./assets/audio/Attention.flac"
import Cookie from "./assets/audio/Cookie.flac"
import HypeBoy from "./assets/audio/HypeBoy.flac"
import Wordle from "./components/wordle/Wordle";
import Breakout from "./components/breakout/Breakout";
import MemoryGame from "./components/memory/MemoryGame";



function App() {
  const [bgmOn, setbgmOn] = useState(false);
  const [audio, setAudio] = useState(new Audio(Time));
  const [bgmName, setbgmName] = useState("The Weekend - Out of Time");
  const [nowBgm, setnowBgm] = useState(0);

  const bgmlist = ["All_Night", "Back", "BAMBOLEO", "DM","HypeBoy","Memory","Time","Walls","WE", "Heart", "Sparkling", "Attention", "Cookie"]
  // const nextBgm = "song"
  useEffect(()=> {
    if (nowBgm > 0 && bgmOn ===true){
      audio.volume=0.2;
      audio.play();
      // audio.loop=true;
    }
  },[nowBgm,bgmOn,audio])

  function BackgroundMusic(){
    if (bgmOn) {
      setbgmOn(false);
      audio.pause();
    } else {
      setbgmOn(true);
      audio.volume =0.15;
      audio.play();
      // audio.loop = true;
    }
  }

  function changeBgm(){
    const nextBgm = bgmlist[Math.floor(Math.random() * bgmlist.length)];
    setnowBgm(nowBgm+1);
    if (nextBgm === "All_Night"){
      audio.pause();
      setAudio(new Audio(All_Night));
      setbgmName("f(x) - ALL Night");
    } else if (nextBgm === "Back"){
      audio.pause();
      setAudio(new Audio(Back));
      setbgmName("백예린 - 돌아가자");
    } else if (nextBgm === "BAMBOLEO"){
      audio.pause();
      setAudio(new Audio(BAMBOLEO));
      setbgmName("레드벨벳 - BAMBOLEO");
    } else if (nextBgm === "DM"){
      audio.pause();
      setAudio(new Audio(DM));
      setbgmName("fromis9 - DM");
    } else if (nextBgm === "HypeBoy"){
      audio.pause();
      setAudio(new Audio(HypeBoy));
      setbgmName("NewJeans - HypeBoy");
    } else if (nextBgm === "Memory"){
      audio.pause();
      setAudio(new Audio(Memory));
      setbgmName("jebanoff - 추억속의 그대");
    } else if (nextBgm === "Walls"){
      audio.pause();
      setAudio(new Audio(Walls));
      setbgmName("f(x) - 4Walls");
    } else if (nextBgm === "WE"){
      audio.pause();
      setAudio(new Audio(WE));
      setbgmName("fromis9 - We go");
    } else if (nextBgm === "Heart"){
      audio.pause();
      setAudio(new Audio(Heart));
      setbgmName("선미 - 열이 올라요");
    } else if (nextBgm === "Sparkling"){
      audio.pause();
      setAudio(new Audio(Sparkling));
      setbgmName("청하 - Sparkling");
    } else if (nextBgm === "Attention"){
      audio.pause();
      setAudio(new Audio(Attention));
      setbgmName("NewJeans - Attention");
    } else if (nextBgm === "Time"){
      audio.pause();
      setAudio(new Audio(Time));
      setbgmName("Out of Time");
    } else if (nextBgm === "Cookie"){
      audio.pause();
      setAudio(new Audio(Cookie));
      setbgmName("NewJeans - Cookie");
    }
    }

  audio.addEventListener('ended',changeBgm);
  

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/webRTC" element={<Ssaraoke />}></Route>
          <Route path="/motion" element={<Motion />}></Route>
          <Route path="/guest" element={<Guest />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/wordle" element={<Wordle />}></Route>
          <Route path="/breakout" element={<Breakout />}></Route>
          <Route path="/memorygame" element={<MemoryGame />}></Route>
        </Routes>
      </BrowserRouter>

      {bgmOn ?(
        <img className="Bgm" src={musicON} alt="musicON"
        onClick={()=> {
          BackgroundMusic();
          // audio.pause();
        }}/>
        
      ): (
        <img className="Bgm" src={musicOFF} alt="musicOFF"
        onClick={BackgroundMusic}/>
      )
    }

    <Musicbar bgmName={bgmName}/>
    <img id="next" src={next} alt="next"
    onClick={changeBgm}
    />
    
        
    </div>
  );
}

export default App;
