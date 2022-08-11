import "./MemoryGame.css"
import Cards from "./Cards";


function MemoryGame() {




  return (
    <div className="container">
      <div className="Memory">Memory</div>
      <div className="game_container">
          <Cards/>
      </div>
    </div>
  );
}

export default MemoryGame;