import React from "react";
import "./style.css";
import ScoreDisplay from "../ScoreDisplay";
import Grid, { Container, Col, Row } from "../Grid";

function Navbar(props) {
    return (
      <header className="d-flex">
        <nav className="navbar navbar-expand-md navbar-light fixed-top nav-theme navbar-header row text-center justify-content-around text-white">
          <div className="col-5">
            <h2 className="col"><a href="/">Lord of the Clicks</a></h2>
          </div>
          <div className="col-2">
            <h2 className="col message">{props.winlossmessage}</h2>
          </div>
          <div className="col-5">
            <h2 className="col"><ScoreDisplay score={props.currentScore} highScore={props.topScore}/></h2>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;