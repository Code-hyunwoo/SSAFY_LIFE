import styles from "./Game.module.css"
import { useNavigate } from "react-router-dom"

function Game (){

    const navigate = useNavigate();

    return (
        <div className={styles.container}> 
        <div id={styles.title}>Game</div> 
        
        <div>
            <p id={styles.game_title}>Wordle</p>
            <img 
            id={styles.game_img}
            src={"https://uploads-ssl.webflow.com/6201253652b78378daf05d57/6202a6d9e5a6d2268c6f7013_ezgif.com-gif-maker.gif"}
            onClick={()=>{navigate("/wordle")}}
            alt="wordle" />
        </div>
        <div>
            <p id={styles.game_title}>Break Out</p>
            <img 
            id={styles.game_img}
            src={"https://raw.githubusercontent.com/petoem/breakout.cr/master/game.gif"}
            onClick={()=>{navigate("/breakout")}}
            alt="Break" />
        </div>
        <div>
            <p id={styles.game_title}>Tetris</p>
            <img 
            id={styles.game_img}
            src={"https://cdn.imweb.me/upload/S2017041658f2383add757/fc8e6a6f8f8a6.gif"}
            
            alt="Break" />
        </div>
        <div>
            <p id={styles.game_title}>Memory</p>
            <img 
            id={styles.game_img}
            src={"https://allma.si/blog/wp-content/uploads/2022/02/flipping-cards-in-memory-game.gif"}
            onClick={()=>{navigate("/memorygame")}}
            alt="Break" />
        </div>
        
        
        
        
        
        </div>

    );
}

export default Game;