import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Banner from './Banner.js'
import Table from './Table.js'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Table />
      </div>
    );
  }
}

export default App;
