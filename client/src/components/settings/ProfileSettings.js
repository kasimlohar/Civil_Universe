import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../slices/authSlice';
import { validateEmail, validatePhone } from '../../utils/formValidation';
import Toast from '../common/Toast';

const ProfileSettings = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone || '',
    address: user.address || '',
    bio: user.bio || ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate fields
    if (!validateEmail(formData.email)) {
      setToast({
        type: 'error',
        message: 'Please enter a valid email'
      });
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      setToast({
        type: 'error',
        message: 'Please enter a valid phone number'
      });
      return;
    }

    try {
      await dispatch(updateProfile(formData)).unwrap();
      setIsEditing(false);
      setToast({
        type: 'success',
        message: 'Profile updated successfully'
      });
    } catch (error) {
      setToast({
        type: 'error',
        message: error.message || 'Failed to update profile'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Profile Settings</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-primary hover:text-primary/80"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields */}
          <div className="space-y-4">
            {[
              { label: 'Name', key: 'name' },
              { label: 'Email', key: 'email', type: 'email' },
              { label: 'Phone', key: 'phone', type: 'tel' },
              { label: 'Address', key: 'address' },
              { label: 'Bio', key: 'bio', type: 'textarea' }
            ].map(field => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    value={formData[field.key]}
                    onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    rows={4}
                  />
                ) : (
                  <input
                    type={field.type || 'text'}
                    value={formData[field.key]}
                    onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                )}
              </div>
            ))}
          </div>

          {isEditing && (
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
            >
              Save Changes
            </button>
          )}
        </form>
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

export default ProfileSettings;
