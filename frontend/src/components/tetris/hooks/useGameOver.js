import { useState, useCallback } from "react";
import Over from "../../../assets/audio/GameOver.mp3"


export const useGameOver = () => {
  const [gameOver, setGameOver] = useState(true);

  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);
//   const audio = new Audio(Over);
//   audio.play();
//   audio.volume = 0.2;


  return [gameOver, setGameOver, resetGameOver];
};
