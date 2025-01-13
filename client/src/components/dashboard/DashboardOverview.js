import React, { useState, useEffect } from 'react';
import { FaUser, FaChartLine, FaStar, FaCalendar } from 'react-icons/fa';
import axiosInstance from '../../utils/axiosInstance';

const DashboardOverview = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    averageRating: 0,
    completedJobs: 0,
    revenue: 0
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await axiosInstance.get('/dashboard/stats');
      setStats(response.data);
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
    }
  };

  const StatCard = ({ icon, title, value }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        {icon}
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      <p className="text-3xl font-bold text-primary mt-2">{value}</p>
    </div>
  );

  // Component JSX
  // ...existing code...
};

export default DashboardOverview;
