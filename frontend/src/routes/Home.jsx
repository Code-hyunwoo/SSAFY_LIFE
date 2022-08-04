import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import earth from "../assets/images/earthShadow.gif"
import ard from "../assets/images/ard_super2.gif"
import space from "../assets/images/spaceStation.png"
import mike from "../assets/images/mike.png"
import game from "../assets/images/game.png"
import visitor from "../assets/images/visitor.png"
import motion from "../assets/images/motion.png"

function Home() {

const navigate = useNavigate();



// 함수
// 링크 이동


return (
    <div className={styles.container}> 
        <div className={styles.titlebox}>
            <span className={styles.title}> Hyun </span>
            <span className={styles.title}> woo </span>
            <span className={styles.title}> world </span>
        </div>  
        <div className={styles.btnbox}>
            <button id={styles.btn1} onClick={()=>{navigate("/webRTC")}}> 
            <img id={styles.mike} src={mike} alt="mike" />
            SSARAOKE 
            </button>
            <button id={styles.btn1} onClick={()=>{navigate("/game")}}> 
            <img id={styles.game} src={game} alt="game" />
            Game </button>
            <button id={styles.btn1} onClick={()=>{navigate("/motion")}}> 
            <img id={styles.motion} src={motion} alt="motion" />
            Motion </button>
            <button id={styles.btn1} onClick={()=>{navigate("/guest")}}> 
            <img id={styles.visitor} src={visitor} alt="visitor" />
            방명록 </button>
        </div>
        <img src={earth} id={styles.earth} alt="earth" />
        <img src={ard} id={styles.ard} alt="ard" />
        <img src={space} id={styles.space} alt="space" />

    </div>
);

}


export default Home;