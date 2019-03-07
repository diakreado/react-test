import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import './header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="nav">
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
            <li>Thing 4</li>
          </ul>
        </header>
    )
  }
}

export default Header;
