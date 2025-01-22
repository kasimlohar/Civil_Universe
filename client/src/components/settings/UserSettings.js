import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../slices/userSlice';
import Toast from '../common/Toast';

const UserSettings = () => {
  const { user, settings } = useSelector(state => state.user);
  const [formData, setFormData] = useState(settings);
  const [toast, setToast] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateUserProfile(formData)).unwrap();
      setToast({
        type: 'success',
        message: 'Settings updated successfully'
      });
    } catch (error) {
      setToast({
        type: 'error',
        message: error.message || 'Failed to update settings'
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">User Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Notification Settings */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Notification Preferences</h3>
          <div className="space-y-2">
            {['email', 'push', 'sms'].map(type => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.notifications?.[type]}
                  onChange={(e) => setFormData({
                    ...formData,
                    notifications: {
                      ...formData.notifications,
                      [type]: e.target.checked
                    }
                  })}
                  className="mr-2"
                />
                {type.charAt(0).toUpperCase() + type.slice(1)} Notifications
              </label>
            ))}
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Privacy Settings</h3>
          <div className="space-y-2">
            {['profile', 'activity', 'contact'].map(item => (
              <label key={item} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.privacy?.[item]}
                  onChange={(e) => setFormData({
                    ...formData,
                    privacy: {
                      ...formData.privacy,
                      [item]: e.target.checked
                    }
                  })}
                  className="mr-2"
                />
                Make {item} public
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
        >
          Save Settings
        </button>
      </form>

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

export default UserSettings;
