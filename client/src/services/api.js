import axiosInstance from '../utils/axiosInstance';

export const businessService = {
  getFeatured: () => axiosInstance.get('/businesses/featured'),
  getById: (id) => axiosInstance.get(`/businesses/${id}`),
  search: (params) => axiosInstance.get('/businesses/search', { params }),
  create: (data) => axiosInstance.post('/businesses', data),
  update: (id, data) => axiosInstance.put(`/businesses/${id}`, data)
};

export const bookingService = {
  create: (data) => axiosInstance.post('/bookings', data),
  getByUser: (userId) => axiosInstance.get(`/bookings/user/${userId}`),
  getByBusiness: (businessId) => axiosInstance.get(`/bookings/business/${businessId}`),
  updateStatus: (id, status) => axiosInstance.patch(`/bookings/${id}`, { status })
};

export const userService = {
  getProfile: () => axiosInstance.get('/users/profile'),
  updateProfile: (data) => axiosInstance.put('/users/profile', data),
  getBookings: () => axiosInstance.get('/users/bookings'),
  getReviews: () => axiosInstance.get('/users/reviews')
};
