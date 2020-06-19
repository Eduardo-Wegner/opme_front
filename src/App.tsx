import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Menu, List} from './views'
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#000'}}>
      <Menu />
      <List />
    </div>
  );
}

export default App;
