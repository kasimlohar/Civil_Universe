import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BusinessAnalytics from '../analytics/BusinessAnalytics';
import ServiceManagement from '../services/ServiceManagement';
import BookingCalendar from '../booking/BookingCalendar';

const BusinessDashboard = () => {
  const { user } = useSelector(state => state.auth);
  const [activeTab, setActiveTab] = useState('analytics');

  const renderContent = () => {
    switch(activeTab) {
      case 'analytics':
        return <BusinessAnalytics businessId={user.businessId} />;
      case 'services':
        return <ServiceManagement />;
      case 'bookings':
        return <BookingCalendar />;
      default:
        return <BusinessAnalytics businessId={user.businessId} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex space-x-4 mb-8">
        {['analytics', 'services', 'bookings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab 
                ? 'bg-primary text-white' 
                : 'bg-gray-100'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default BusinessDashboard;
