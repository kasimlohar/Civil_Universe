import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';
import LoadingSpinner from '../common/LoadingSpinner';
import Toast from '../common/Toast';

const BusinessDashboard = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    totalRevenue: 0
  });
  const [recentBookings, setRecentBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsResponse, bookingsResponse] = await Promise.all([
        axiosInstance.get(`/business/${user.id}/stats`),
        axiosInstance.get(`/business/${user.id}/bookings/recent`)
      ]);
      setStats(statsResponse.data);
      setRecentBookings(bookingsResponse.data);
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Failed to fetch dashboard data'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-primary mb-6">Business Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Bookings', value: stats.totalBookings },
          { label: 'Pending Bookings', value: stats.pendingBookings },
          { label: 'Completed Bookings', value: stats.completedBookings },
          { label: 'Total Revenue', value: `$${stats.totalRevenue.toFixed(2)}` }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-primary mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Customer</th>
                <th className="text-left py-3">Service</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map(booking => (
                <tr key={booking.id} className="border-b">
                  <td className="py-3">{booking.customerName}</td>
                  <td className="py-3">{booking.service}</td>
                  <td className="py-3">{new Date(booking.date).toLocaleDateString()}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3">${booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default BusinessDashboard;
