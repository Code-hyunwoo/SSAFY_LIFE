import { useEffect } from "react";
import BGM from "../../assets/audio/Tetris.mp3"




function Tetris (){

    useEffect(()=>{

        bgmVolume();

    },[]);

    function bgmVolume(){
        var backgm = document.getElementById("bgm");
        backgm.volume = 0.2;
    }
    

    return (
        <div>

            <audio id="bgm" src={BGM} autoPlay loop />
            tetris
        </div>
    );
}


export default Tetris;