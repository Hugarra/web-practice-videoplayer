import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <div className="p-0 container-fluid text-center">
              <Landing></Landing>
          </div>
        </Route>
        <Route path="/video/:id">
          <VideoPlayer></VideoPlayer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
