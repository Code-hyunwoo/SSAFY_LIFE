import styles from "./Room.module.css";
import ReactPlayer from "react-player";


function Screen(){




    return (
        <ReactPlayer
        id={styles.screen}
        url={["https://www.youtube.com/watch?v=VOmIplFAGeg","https://www.youtube.com/watch?v=f6YDKF0LVWw"]}
        playing={true}
        controls={true}
        volume={0.4}
        />
        
    );
}

export default Screen;