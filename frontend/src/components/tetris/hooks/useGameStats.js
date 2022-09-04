import { useState, useCallback } from "react";
import sori2 from "../../../assets/audio/sound2.wav"


const buildGameStats = () => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0
});

export const useGameStats = () => {
  const [gameStats, setGameStats] = useState(buildGameStats());

  const addLinesCleared = useCallback((lines) => {
    setGameStats((previous) => {
      const points = previous.points + lines * 100;
      const { linesPerLevel } = previous;
      const newLinesCompleted = previous.linesCompleted + lines;
      const level =
        newLinesCompleted >= linesPerLevel
          ? previous.level + 1
          : previous.level;
      const linesCompleted = newLinesCompleted % linesPerLevel;

      const audio = new Audio(sori2);
      audio.play()
      audio.volume = 0.2

      return {
        level,
        linesCompleted,
        linesPerLevel,
        points
      };
    }, []);
  }, []);

  return [gameStats, addLinesCleared];
};
