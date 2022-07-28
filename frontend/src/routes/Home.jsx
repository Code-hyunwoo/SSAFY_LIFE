import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom"



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
            <button id={styles.btn1} onClick={()=>{navigate("/webRTC")}}> WebRTC </button>
            <button id={styles.btn1} onClick={()=>{navigate("/diary")}}> 개발 일기 </button>
            <button id={styles.btn1}> ???? </button>
            <button id={styles.btn1}> ???? </button>
        </div>

    </div>
);

}


export default Home;