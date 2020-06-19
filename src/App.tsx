import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Menu, List, Details} from './views'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// const Details = React.lazy(() => import('./views/Users/Details/Details'));

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/Details/:userLogin">
            <Details />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
