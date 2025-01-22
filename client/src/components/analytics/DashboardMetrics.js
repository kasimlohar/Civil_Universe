import React, { useEffect, useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import axiosInstance from '../../utils/axiosInstance';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const DashboardMetrics = ({ businessId }) => {
  const [data, setData] = useState(null);
  const [timeRange, setTimeRange] = useState('week');

  const fetchMetrics = async () => {
    try {
      const response = await axiosInstance.get(
        `/analytics/${businessId}?range=${timeRange}`
      );
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, [timeRange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Metrics and charts */}
      // ...existing code...
    </div>
  );
};

export default DashboardMetrics;
