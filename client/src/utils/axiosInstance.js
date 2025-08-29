import axios from 'axios';

// Function to get the correct API base URL
const getApiBaseURL = () => {
  const currentOrigin = window.location.origin;
  
  // In Replit environment, use the same origin with /api path
  if (currentOrigin.includes('replit.dev')) {
    return currentOrigin + '/api';
  }
  
  // In local development, switch from port 5000 to 3001
  if (currentOrigin.includes('localhost:5000')) {
    return currentOrigin.replace(':5000', ':3001') + '/api';
  }
  
  // Default fallback
  return currentOrigin + '/api';
};

const axiosInstance = axios.create({
  baseURL: getApiBaseURL(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Add response interceptor for debugging
axiosInstance.interceptors.response.use(
  response => {
    console.log('API Success:', response.config.url, response.status);
    return response;
  },
  error => {
    console.error('API Error:', {
      url: error.config?.url,
      method: error.config?.method,
      baseURL: error.config?.baseURL,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

// Log the base URL for debugging
console.log('Axios instance configured with baseURL:', getApiBaseURL());

export default axiosInstance;
