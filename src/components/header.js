import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
import './header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <div className="App-logo">
            <img src={logo} className="logo-img" alt="logo" />
            <p>Course Editor</p>
          </div>
          {/* <ul className="nav">
            <li>All projects</li>
            <li>About</li>
          </ul> */}
          <div className="user">
            <img src="http://bilim-all.kz/uploads/images/2016/10/28/original/854b15606983a6aacf484aa080b0ba03.png" className="user-avatar" alt="logo" />
            <p>Jhon Doe</p>
          </div>
        </header>
    )
  }
}

export default Header;
