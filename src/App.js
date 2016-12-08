import React, { Component } from 'react';
import { Flickr } from './flickr';
import logo from './logo.svg';
import './App.css';

class App extends Component {

String = ''

constructor(props) {
  super()
  this.state = { error: '' }
}

  // showError :: String -> State Error
  showError(s) { this.setState({error: s}); }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div id="app" style={ {margin:'3em'} }>
          { this.state.error ? <p>{ this.state.error }</p> : null }
          <Flickr showError={ this.showError } />
        </div>
      </div>
    );
  }
}

export default App;
