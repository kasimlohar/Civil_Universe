import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../slices/authSlice';
import { validateEmail, validatePassword } from '../../utils/formValidation';
import Toast from '../common/Toast';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'customer'
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.errors.join(', ');
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await dispatch(register(formData)).unwrap();
        navigate('/login');
      } catch (err) {
        setErrors({ submit: err.message || 'Registration failed' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.submit && (
        <div className="bg-red-50 text-red-600 p-3 rounded">
          {errors.submit}
        </div>
      )}
      
      <div>
        <label className="block text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className={`w-full p-3 border rounded focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : ''}`}
          required
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className={`w-full p-3 border rounded focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : ''}`}
          required
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className={`w-full p-3 border rounded focus:ring-2 focus:ring-primary ${errors.password ? 'border-red-500' : ''}`}
          required
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Confirm Password</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          className={`w-full p-3 border rounded focus:ring-2 focus:ring-primary ${errors.confirmPassword ? 'border-red-500' : ''}`}
          required
        />
        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Account Type</label>
        <select
          value={formData.userType}
          onChange={(e) => setFormData({...formData, userType: e.target.value})}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-primary"
        >
          <option value="customer">Customer</option>
          <option value="business">Business Owner</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded hover:bg-primary/90"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
