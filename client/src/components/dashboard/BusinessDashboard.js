import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DashboardMetrics from '../analytics/DashboardMetrics';
import BookingManager from '../booking/BookingManager';
import ServiceManager from '../services/ServiceManager';
import LoadingSpinner from '../common/LoadingSpinner';

const BusinessDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);
  const { business } = useSelector(state => state.business);

  const tabs = {
    overview: <DashboardMetrics businessId={business.id} />,
    bookings: <BookingManager businessId={business.id} />,
    services: <ServiceManager businessId={business.id} />
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tab navigation */}
      <div className="flex space-x-4 mb-8">
        {Object.keys(tabs).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? 'bg-primary text-white' : 'bg-gray-100'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      {loading ? <LoadingSpinner /> : tabs[activeTab]}
    </div>
  );
};

export default BusinessDashboard;
