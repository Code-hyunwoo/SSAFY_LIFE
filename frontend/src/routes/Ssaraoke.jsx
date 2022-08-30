import styles from "./Ssaraoke.module.css"
import Crazylights from "../components/ssaraoke/Crazylights";
import LightRope from "../components/ssaraoke/LightRope";
import MirrorBall from "../components/ssaraoke/MirrorBall";
import Screen  from "../components/ssaraoke/Screen";

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