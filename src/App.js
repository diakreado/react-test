import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import MainContent from './components/main/main-content';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
  }
}

export default App;
