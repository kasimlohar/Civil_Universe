import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import axiosInstance from '../../utils/axiosInstance';
import LoadingSpinner from '../common/LoadingSpinner';

const BusinessAnalytics = ({ businessId }) => {
  const [timeRange, setTimeRange] = useState('month');
  const [analytics, setAnalytics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange, businessId]);

  const fetchAnalytics = async () => {
    try {
      const response = await axiosInstance.get(
        `/analytics/business/${businessId}?timeRange=${timeRange}`
      );
      setAnalytics(response.data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (!analytics) return null;

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-end">
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <Line data={analytics.revenueData} options={analytics.revenueOptions} />
        </div>

        {/* Bookings Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Booking Trends</h3>
          <Bar data={analytics.bookingData} options={analytics.bookingOptions} />
        </div>

        {/* Service Distribution */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Popular Services</h3>
          <Doughnut data={analytics.serviceData} options={analytics.serviceOptions} />
        </div>

        {/* Key Metrics */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(analytics.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-gray-600 text-sm">{key}</p>
                <p className="text-2xl font-bold text-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAnalytics;
