import styles from "./Ssaraoke.module.css"
import Crazylights from "../components/Crazylights";
import LightRope from "../components/LightRope";
import MirrorBall from "../components/MirrorBall";
import Screen  from "../components/Screen";

function Ssaraoke (){



    return (
        <>
            <div className={styles.ssaraoke}>SSARAOKE</div>
            <div className={styles.container} id={styles.rgb}>
                <Crazylights />
                <LightRope />
                <MirrorBall />
                <Screen />
            </div>
        </>

    );
}

export default Ssaraoke;