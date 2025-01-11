import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './components/Profile';
import Booking from './components/Booking';
import Login from './pages/Login';
import Register from './pages/Register';
import BusinessProfile from './pages/BusinessProfile';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/booking" component={Booking} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/business-profile" component={BusinessProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;