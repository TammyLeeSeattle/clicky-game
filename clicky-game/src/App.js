import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import CharacterTile from "./components/Charactertile";
//import Jumbotron from "./components/Jumbotron";
//import Navbar from "./components/Navbar";
import Grid, { Container, Col, Row } from "./components/Grid";
import Footer from "./components/Footer";
import characters from "./characters.json";

/*
STEPS FOR THE GAME TO FUNCTION:

1. Random presentation of all characters
2. Each tile can be "clicked" as true or false, but each character starts each new round as "clicked" === false
3. Each time a tile is clicked (and goes from false to true), then add to a "top score" counter
4. If a clicked === true tile gets clicked again, then end the game and restart the round
  a. Compare the latest score to the last score. If the latest score is higher, then store it as the "Top Score". If the latest score is lower, then do nothing.


  TODO part 1
  1) Make a CharacterTile template in index.js file in component/CahracterTile based on FriendCard in example
  2) Use this.state.characters.map(character => ()) in App.js render() function to display the CharacterTiles
*/

// establishes beginning state of game
class App extends Component {
  state = {
    characters,
  }

  randomCharacters = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };


// shows the elements on the page
  render(){
    return (
      <div className="App">
        
        <Container fluid>

            {this.state.characters.map(character => (
              <CharacterTile 
                image={character.image}
                key={character.id}
                id={character.id}
                name={character.name}
              />
            ))}

        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
