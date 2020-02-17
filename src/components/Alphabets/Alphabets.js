import React, { Component } from "react";
import "./Alphabets.css";

export class Alphabets extends Component {
  alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  handleClick = data => {
   this.props.onAlphabetClicked(data)
  };
  render() {
    return (
      <nav className="alphabets">
        {this.alphabets.map(alphabet => {
          return (
            <span key={alphabet} onClick={this.handleClick.bind(this,alphabet) } className={this.props.selectedAlphabet===alphabet?'active':''}>
              {alphabet}
            </span>
          );
        })}
      </nav>
    );
  }
}
