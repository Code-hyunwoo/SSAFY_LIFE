import "../App.css"
import Marquee from "react-fast-marquee";

function Musicbar({bgmName}) {
  return (
    <div id="musicbar">
      <Marquee gradientWidth={0} speed={40} >
        {bgmName} 
      </Marquee>
    </div>
  );
}

export default Musicbar;
