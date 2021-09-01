import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";


function App() {
  const [socketReceivedString, setSocketReceivedString] = useState(null);
  const socket = io.connect('localhost:5000');
  socket.emit('test');
  socket.on('test-received', (stringToSet) => {
    console.log("received");
    setSocketReceivedString(stringToSet);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {socketReceivedString != null && socketReceivedString}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
