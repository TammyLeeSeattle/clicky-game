import React from "react";
import "./style.css";

function CharacterTile(props) {
    return (
        <div 
            className="col-6 col-sm-4 col-md-3 m-auto"
            value={props.id}
            onClick={() => {props.onClick(props.id)}}>
        <img
            className="card"
            alt={props.name}
            src={props.image}
            id={props.id}
        />
    </div>
    );
}

export default CharacterTile;