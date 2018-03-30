import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Topic from './components/topic.js';
import Navbar from './components/navbar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Topic />
        <Navbar status="is good" />
      </div>
    );
  }
}

export default App;
