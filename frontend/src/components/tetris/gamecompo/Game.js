import Menu from "./Menu"
import Tetris from "./Tetris";

import { useGameOver } from "../hooks/useGameOver";
import { useState } from "react";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [firstplay, setFirstplay]= useState(true);

  const start = () => {resetGameOver(); setFirstplay(false)}

  return (
    <div className="Game">

      {gameOver ? (
        <Menu onClick={start} firstplay={firstplay}/>
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default Game;
