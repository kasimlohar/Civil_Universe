export const handleApiError = (error) => {
  if (error.response) {
    return error.response.data.message || 'Server error occurred';
  }
  if (error.request) {
    return 'No response from server';
  }
  return 'An unexpected error occurred';
};

export const isNetworkError = (error) => {
  return !error.response && error.request;
};
