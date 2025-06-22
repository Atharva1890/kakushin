import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import BeachBuddyDemo from './BeachBuddyDemoUI';
import Auth from './Auth'; // Import the Auth component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<BeachBuddyDemo />} />
        <Route path="/auth" element={<Auth />} /> {/* Add the Auth route */}
      </Routes>
    </Router>
  );
}

export default App;
