import styles from "./Guest.module.css"
import { Link } from "react-router-dom";

function Guest (){



    return (
        <>
            <div className={styles.title}>
                방명록
            </div>
            <div className={styles.container} >
                <h1>guest</h1>
                <Link to='/' id={styles.back}><span> 돌아가기 </span></Link>
            </div>
        </>
    );
}

export default Guest;