import React, { Component } from "react";

import "./App.css";

import { Alphabets } from "./components/Alphabets/Alphabets";
import { ContactsList } from "./components/ContactsList/ContatList";

class App extends Component {
  state = {
    selectedAlphabet: "asa"
  };
  onAlphabetSelectedInHeader = data => {
    this.setState({ selectedAlphabet: data });
  };
  render() {
    return (
      <div className="AppContainer">
        <Alphabets
          className="AppContainer__header"
          selectedAlphabet={this.state.selectedAlphabet}
          onAlphabetClicked={this.onAlphabetSelectedInHeader}
        />
        <ContactsList
          className="AppContainer__list"
          selectedAlphabet={this.state.selectedAlphabet}
        />
      </div>
    );
  }
}
export default App;
