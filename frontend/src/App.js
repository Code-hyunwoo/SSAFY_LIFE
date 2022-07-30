import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Diary from "./routes/Diary";
import Home from "./routes/Home"
import WebRTC from "./routes/WebRTC";
import Guest from "./routes/Guest";
import { useEffect, useState } from "react";
import All_Night from "./assets/audio/All_Night.mp3"
import musicON from "./assets/images/on.png"
import musicOFF from "./assets/images/off.png"



function App() {

  const [bgmOn, setbgmOn] = useState(false);
  const [audio, setAudio] = useState(new Audio(All_Night));


  function BackgroundMusic(){
    if (bgmOn) {
      setbgmOn(false);
      audio.pause();
    } else {
      setbgmOn(true);
      audio.volume =0.15;
      audio.play();
      audio.loop = true;
    }
  }



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/webRTC" element={<WebRTC />}></Route>
          <Route path="/diary" element={<Diary />}></Route>
          <Route path="/guest" element={<Guest />}></Route>
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

    </div>
  );
}

export default App;
