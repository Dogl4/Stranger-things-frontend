import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

const DEV = (process.env.REACT_APP_DEV === 'true');

function App() {
  return (
    <div className="App">
      { DEV ? <h1>Em Desenvolvimento</h1> : null }
      <StrangerThings />
    </div>
  );
}

export default App;
