export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const errors = [];
  if (password.length < minLength) errors.push(`Password must be at least ${minLength} characters`);
  if (!hasUpperCase) errors.push('Include at least one uppercase letter');
  if (!hasLowerCase) errors.push('Include at least one lowercase letter');
  if (!hasNumbers) errors.push('Include at least one number');
  if (!hasSpecialChar) errors.push('Include at least one special character');

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validatePhone = (phone) => {
  const regex = /^\+?[\d\s-]{10,}$/;
  return regex.test(phone);
};

export const validateBusinessFields = (fields) => {
  const errors = {};
  
  if (!fields.name?.trim()) errors.name = 'Business name is required';
  if (!fields.description?.trim()) errors.description = 'Description is required';
  if (!fields.address?.trim()) errors.address = 'Address is required';
  if (!validatePhone(fields.phone)) errors.phone = 'Invalid phone number';
  if (!fields.categories?.length) errors.categories = 'Select at least one category';
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
