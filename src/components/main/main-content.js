import React, { Component } from 'react';
import '../../App.css';
import './main-content.css';
import TaskList from './task-list';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => prevState.count != 50 ? prevState.count++ : prevState.count=0);
  }

  render() {
    return (
        <main className="App-main">
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>YOLO then Reset</button>
          <h2>Hello a third time!</h2>
          <p>This is where most of my content will go...</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <TaskList />
        </main>
    )
  }
}

export default MainContent;
