import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../slices/authSlice';
import LoadingSpinner from '../common/LoadingSpinner';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'customer' // or 'business'
  });
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      await dispatch(register(formData)).unwrap();
      // Handle successful registration
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded">{error}</div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />
      </div>

      {/* Email, Password, and User Type fields */}
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          className="block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />

        <select
          value={formData.userType}
          onChange={(e) => setFormData({...formData, userType: e.target.value})}
          className="block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="customer">Customer</option>
          <option value="business">Business Owner</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 px-4 rounded bg-primary text-white hover:bg-primary/90 transition-colors
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? <LoadingSpinner size="sm" /> : 'Register'}
      </button>
    </form>
  );
};

export default RegisterForm;
