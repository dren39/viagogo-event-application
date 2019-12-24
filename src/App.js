import React, {Component} from 'react';
import './App.css';
import EventsContainer from './Components/EventsContainer';

class App extends Component {

  render() {
    return (
      <div>
        <div id="header-container">
          <h1>
            <span>via</span><span id="logo-span">go</span><span>go</span>
          </h1>
          <h2>Elton John Tickets</h2>
        </div>
        <EventsContainer/>
      </div>
    );
  }
}

export default App;
