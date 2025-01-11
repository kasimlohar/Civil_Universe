import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaChartLine, FaCalendar, FaTools, FaStar, FaCog, FaImages } from 'react-icons/fa';
import ServicesManagement from '../../components/dashboard/ServicesManagement';

const BusinessDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { business } = useSelector(state => state.business);

  const tabs = {
    overview: {
      icon: <FaChartLine />,
      label: 'Overview',
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">Total Bookings</h3>
              <p className="text-3xl font-bold text-secondary">156</p>
              <p className="text-muted-green text-sm">+12% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">Revenue</h3>
              <p className="text-3xl font-bold text-secondary">$12,450</p>
              <p className="text-muted-green text-sm">+8% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">Average Rating</h3>
              <p className="text-3xl font-bold text-secondary">4.8</p>
              <p className="text-muted-green text-sm">Based on 48 reviews</p>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start space-x-4 border-b border-warm-gray/20 pb-4">
                  <div className="flex-1">
                    <p className="font-medium text-charcoal">New booking received</p>
                    <p className="text-muted-green text-sm">John Doe - Construction Consultation</p>
                  </div>
                  <span className="text-sm text-muted-green">2 hours ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    services: {
      icon: <FaTools />,
      label: 'Services',
      component: <ServicesManagement />
    },
    bookings: {
      icon: <FaCalendar />,
      label: 'Bookings',
      component: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary">Manage Bookings</h3>
          {/* Bookings management will go here */}
        </div>
      )
    },
    portfolio: {
      icon: <FaImages />,
      label: 'Portfolio',
      component: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary">Portfolio</h3>
          {/* Portfolio management will go here */}
        </div>
      )
    },
    reviews: {
      icon: <FaStar />,
      label: 'Reviews',
      component: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary">Customer Reviews</h3>
          {/* Reviews will go here */}
        </div>
      )
    },
    settings: {
      icon: <FaCog />,
      label: 'Settings',
      component: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary">Business Settings</h3>
          {/* Settings form will go here */}
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={business?.logo || 'https://via.placeholder.com/100'}
                  alt="Business Logo"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold text-primary">{business?.name || 'Business Name'}</h2>
                <p className="text-muted-green">{business?.category || 'Category'}</p>
              </div>
              <nav className="space-y-2">
                {Object.entries(tabs).map(([key, { icon, label }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === key
                        ? 'bg-primary text-white'
                        : 'text-charcoal hover:bg-background'
                    }`}
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {tabs[activeTab].component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
