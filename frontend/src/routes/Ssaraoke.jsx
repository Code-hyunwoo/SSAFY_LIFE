import styles from "./Ssaraoke.module.css"
import Crazylights from "../components/Crazylights";
import LightRope from "../components/LightRope";
import MirrorBall from "../components/MirrorBall";
import Screen  from "../components/Screen";

function Ssaraoke (){



    return (
        <>
            <div className={styles.ssaraoke}>SSARAOKE</div>
                <Screen />
            <div className={styles.container}>
                <Crazylights />
                <LightRope />
                <MirrorBall />
            </div>
        </>

    );
}

export default Ssaraoke;