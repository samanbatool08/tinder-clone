import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>

      <Route path='/chats/:person'>
          <Header backButton='/chats' />
            <ChatScreen />
        </Route>

      <Route path='/chats'>
          <Header backButton='/' />
            <Chats />
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