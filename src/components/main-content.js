import React, { Component } from 'react';
import '../App.css';

class MainContent extends Component {
  render() {
    return (
        <main className="App-main">
          <h1>Hello a third time!</h1>
          <p>This is where most of my content will go...</p>
          <br/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </main>
    )
  }
}

export default MainContent;
