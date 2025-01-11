import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BusinessListings from './components/BusinessListings';
import Profile from './components/Profile';
import Booking from './components/Booking';
import BusinessList from './components/BusinessList';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/business-listings" component={BusinessListings} />
        <Route path="/profile" component={Profile} />
        <Route path="/booking" component={Booking} />
        <Route path="/business-list" component={BusinessList} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
