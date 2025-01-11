import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BusinessListings from './components/BusinessListings'; // Ensure this matches the actual filename
import Profile from './components/Profile';
import Booking from './components/Booking';
import BusinessList from './components/BusinessList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/business-listings" component={BusinessListings} /> {/* Ensure this matches the actual filename */}
        <Route path="/profile" component={Profile} />
        <Route path="/booking" component={Booking} />
        <Route path="/business-list" component={BusinessList} />
      </Switch>
    </Router>
  );
}

export default App;
