import React, { Component } from "react";
import "./ContactsList.css";
import Axios from "axios";

export class ContactsList extends Component {
 state ={
    contactsList: []
 }
   getListFormGithubApi= async (name) => {
      const list= await Axios.get(`https://api.github.com/users/${name}`);
      this.setState( {contactsList: [list.data] });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.selectedAlphabet !== this.props.selectedAlphabet) {
        this.getListFormGithubApi(this.props.selectedAlphabet);
    }
  }
   render() {
     return (
      <div className="ContactList">
        {this.state.contactsList.map(contact => {
          return (
            <section className="Contact">
              <img
                className="Contact-avatar"
                src={contact.avatar_url}
                alt="not avaiable"
                key={contact.id}
              />
              <h5 className="Contact-name">{contact.name}</h5>
            </section>
          );
        })}
      </div>
    );
  }
}
