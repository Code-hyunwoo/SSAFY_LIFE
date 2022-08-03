import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import earth from "../assets/images/earthShadow.gif"
import ard from "../assets/images/ard_super2.gif"
import space from "../assets/images/spaceStation.png"


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
            <button id={styles.btn1} onClick={()=>{navigate("/webRTC")}}> SSARAOKE </button>
            <button id={styles.btn1} onClick={()=>{navigate("/game")}}> Game </button>
            <button id={styles.btn1} onClick={()=>{navigate("/diary")}}> Motion </button>
            <button id={styles.btn1} onClick={()=>{navigate("/guest")}}> 방명록 </button>
        </div>
        <img src={earth} id={styles.earth} alt="earth" />
        <img src={ard} id={styles.ard} alt="ard" />
        <img src={space} id={styles.space} alt="space" />

    </div>
);

}


export default Home;