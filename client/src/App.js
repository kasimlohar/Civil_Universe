import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Profile from './components/Profile';
import Booking from './components/Booking';
import BusinessList from './components/BusinessList';
import BusinessListings from './components/BusinessListings';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import BusinessCard from './components/BusinessCard';

function App() {
  const testBusiness = {
    name: "ABC Construction",
    location: "New York",
    rating: 4.5,
    contact: "123-456-7890",
    categories: ["Construction", "Design"],
    portfolio: "https://example.com",
    imageUrl: "https://via.placeholder.com/300x200"
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business-listings" element={<BusinessListings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/business-list" element={<BusinessList />} />
            <Route path="/test-card" element={<BusinessCard {...testBusiness} />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
