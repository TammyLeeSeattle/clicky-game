import React from "react";

function ScoreDisplay(props) {
    return (
        <span>Score: {props.score} | Top Score: {props.highScore}</span>
    );
}

export default ScoreDisplay;