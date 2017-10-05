import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>{/*Could be Switch depending on needs*/}
          <Route exact path='/' component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
