import React from "react";
// TODO: Add a css file for this item
// import "./style.css";

function CharacterTile(props) {
    return (
        <div className="col-6">
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
