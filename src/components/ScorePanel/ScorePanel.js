import React from 'react';


function ScorePanel(props) {
  const { score, highScore } = props;

  return (
    <div className="ScorePanel">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default ScorePanel;
