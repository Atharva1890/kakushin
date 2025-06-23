import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import BeachBuddyDemo from './BeachBuddyDemoUI'; // Ensure the correct import
import Auth from './Auth';
import Volunteer from './Volunteer';
import Organizer from './Organizer';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<BeachBuddyDemo />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/organizer" element={<Organizer />} />
      </Routes>
    </Router>
  );
}

export default App;
