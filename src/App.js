import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  const DEV = (process.env.REACT_APP_DEV === 'true');
  return (
    <div className="App">
      { DEV ? <h1>Em desenvolvimento</h1> : null }
      { console.log(process.env) }
      <StrangerThings />
    </div>
  );
}

export default App;
