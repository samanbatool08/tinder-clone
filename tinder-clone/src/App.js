import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      {/* <Header /> */}
      <Switch>
      <Route path='/chats'>
          <Header backButton='/' />
          <h1>I am the chatpage</h1>
        </Route>

        <Route path='/'>
          <Header />
          <TinderCards />
          <SwipeButtons />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;



// component hierarchy/structure
{/* Header */}

{/* Tinder Cards - profile pic + name */}
{/* Buttons below card */}

{/* Chats screen list */}
{/* Individual chat window */}