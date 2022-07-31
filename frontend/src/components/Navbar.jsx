import "../App.css"
import world from "../assets/images/world.png"
import { useNavigate } from "react-router-dom"

function Navbar() {
  
    const navigate = useNavigate();

    return (
        <div>
            {/* <Link to="/"> */}
                <img className="world" src={world} alt="world"
                onClick={()=>navigate('/')}/>
                <span id="home"> Home </span>
            {/* </Link> */}
        </div>
  );
}

export default Navbar;
