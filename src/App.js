import './stylesheets/App.css';
import React from 'react'
import { connect } from 'react-redux';

import Scheduler from './components/Scheduler.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Scheduler/>
      </div>
    );
  }
}

export default App;