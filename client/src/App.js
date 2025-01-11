import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ErrorBoundary from './components/ErrorBoundary';

const Profile = lazy(() => import('./components/Profile'));
const Booking = lazy(() => import('./components/Booking'));
const BusinessList = lazy(() => import('./components/BusinessList'));
const BusinessListings = lazy(() => import('./components/BusinessListings'));
const Home = lazy(() => import('./pages/Home'));
const BusinessCard = lazy(() => import('./components/BusinessCard'));

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
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/business-listings" element={<BusinessListings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/business-list" element={<BusinessList />} />
                <Route path="/test-card" element={<BusinessCard {...testBusiness} />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
