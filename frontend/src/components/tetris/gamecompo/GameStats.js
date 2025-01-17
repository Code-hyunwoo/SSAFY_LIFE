import React, { useEffect } from "react";

import "./GameStats.css";

const GameStats = ({ gameStats, getstatlist }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  useEffect(()=>{
    getstatlist(points);
  },[points])

  return (
    <ul className="GameStats GameStats__right">
      <li>Level</li>
      <li className="value">{level}</li>
      <li>Lines to level</li>
      <li className="value">{linesToLevel}</li>
      <li>Points</li>
      <li className="value">{points}</li>
    </ul>
  );
};

export default React.memo(GameStats);
