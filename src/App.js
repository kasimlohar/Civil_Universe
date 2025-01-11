import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BusinessListings from './components/BusinessListings';
import Profile from './components/Profile';
import Booking from './components/Booking';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/business-listings" component={BusinessListings} />
                <Route path="/profile" component={Profile} />
                <Route path="/booking" component={Booking} />
            </Switch>
        </Router>
    );
}

export default App;
