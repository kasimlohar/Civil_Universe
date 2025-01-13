import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home.jsx';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import UserProfileManagement from './components/profile/UserProfileManagement';
import BusinessProfileEditor from './components/business/BusinessProfileEditor';
import ServiceManagementSystem from './components/services/ServiceManagementSystem';
import ReviewManagementSystem from './components/reviews/ReviewManagementSystem';
import AdvancedSearchSystem from './components/search/AdvancedSearchSystem';
import DashboardOverview from './components/dashboard/DashboardOverview';
import BookingCalendar from './components/booking/BookingCalendar';
import PaymentCheckout from './components/payment/PaymentCheckout';
import ChatInterface from './components/chat/ChatInterface';
import UserSettings from './components/settings/UserSettings';
import MapView from './components/map/MapView';
import SearchResults from './components/search/SearchResults';
import ProtectedRoute from './components/auth/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardOverview />
            </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<ProtectedRoute><UserProfileManagement /></ProtectedRoute>} />
        <Route path="/business-profile" element={<ProtectedRoute><BusinessProfileEditor /></ProtectedRoute>} />
        <Route path="/services" element={<ProtectedRoute><ServiceManagementSystem /></ProtectedRoute>} />
        <Route path="/reviews" element={<ProtectedRoute><ReviewManagementSystem /></ProtectedRoute>} />
        <Route path="/search" element={<AdvancedSearchSystem />} />
        <Route path="/calendar" element={<ProtectedRoute><BookingCalendar /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><PaymentCheckout /></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><ChatInterface /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><UserSettings /></ProtectedRoute>} />
        <Route path="/map" element={<MapView />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
