import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BusinessProfile from './pages/BusinessProfile';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/business-profile/:id" component={BusinessProfile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;