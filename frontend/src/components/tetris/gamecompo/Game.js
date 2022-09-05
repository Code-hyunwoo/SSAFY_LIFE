import Menu from "./Menu"
import Tetris from "./Tetris";

import { useGameOver } from "../hooks/useGameOver";
import { useState } from "react";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [firstplay, setFirstplay]= useState(true);
  const [statlist, setStatlist] = useState([]);

  function getstatlist(data){
    setStatlist(data);
  }

  const start = () => {resetGameOver(); setFirstplay(false)}

  return (
    <div className="Game">

      {gameOver ? (
        <Menu onClick={start} firstplay={firstplay} statlist={statlist}/>
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} getstatlist={getstatlist} />
      )}
    </div>
  );
};

export default Game;
