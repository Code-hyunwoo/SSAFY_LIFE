import styles from "./Room.module.css";
import ReactPlayer from "react-player";


function Screen(){




    return (
        <>
        <ReactPlayer
        id={styles.screen}
        url={["https://www.youtube.com/watch?v=vJvX9L6FCWI","https://www.youtube.com/watch?v=f6YDKF0LVWw"]}
        playing={true}
        muted={false}
        controls={true}
        />
        
        </>
    );
}

export default Screen;