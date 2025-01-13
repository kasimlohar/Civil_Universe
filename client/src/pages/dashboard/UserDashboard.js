import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaUser, FaCalendar, FaCog, FaHistory, FaBookmark, FaStar } from 'react-icons/fa';
import BookingsList from '../../components/dashboard/BookingsList';
import SavedServices from '../../components/dashboard/SavedServices';
import ReviewsList from '../../components/dashboard/ReviewsList';
import Settings from '../../components/dashboard/Settings';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user } = useSelector(state => state.user);

  const tabs = {
    profile: {
      icon: <FaUser />,
      label: 'Profile',
      component: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
              <input 
                type="text" 
                value={user?.name || ''} 
                className="w-full p-2 border border-warm-gray rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
              <input 
                type="email" 
                value={user?.email || ''} 
                className="w-full p-2 border border-warm-gray rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Phone</label>
              <input 
                type="tel" 
                value={user?.phone || ''} 
                className="w-full p-2 border border-warm-gray rounded-lg"
                readOnly
              />
            </div>
          </div>
          <button className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded-lg transition-colors">
            Edit Profile
          </button>
        </div>
      )
    },
    bookings: {
      icon: <FaCalendar />,
      label: 'My Bookings',
      component: <BookingsList />
    },
    saved: {
      icon: <FaBookmark />,
      label: 'Saved Services',
      component: <SavedServices />
    },
    reviews: {
      icon: <FaStar />,
      label: 'My Reviews',
      component: <ReviewsList />
    },
    settings: {
      icon: <FaCog />,
      label: 'Settings',
      component: <Settings />
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
                  src={user?.avatar || 'https://via.placeholder.com/100'}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold text-primary">{user?.name || 'User'}</h2>
                <p className="text-muted-green">{user?.email}</p>
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

export default UserDashboard;
