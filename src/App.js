import React from 'react'
import { Router } from '@reach/router'
import Home from './components/Home';
import Hello from './components/Hello';
import Number from './components/Number';
import Style from './components/Style';

function App() {
  return (
    <div>
      <Router>
        <Home path="/home" />
        <Hello path="/:id" />
        
        <Style path="/:id/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
