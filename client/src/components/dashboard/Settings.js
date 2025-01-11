import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { FaBell, FaLock, FaShieldAlt, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });

  return (
    <div className="space-y-8">
      {/* Notification Settings */}
      <div className="bg-white rounded-lg p-6">
        <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <FaBell className="mr-2" /> Notification Preferences
        </h4>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-charcoal capitalize">{key} Notifications</p>
                <p className="text-sm text-muted-green">
                  Receive notifications via {key}
                </p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({
                  ...prev,
                  [key]: !prev[key]
                }))}
                className="text-2xl"
              >
                {value ? (
                  <FaToggleOn className="text-secondary" />
                ) : (
                  <FaToggleOff className="text-warm-gray" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Password Change */}
      <div className="bg-white rounded-lg p-6">
        <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <FaLock className="mr-2" /> Change Password
        </h4>
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">
                Current Password
              </label>
              <Field
                type="password"
                name="currentPassword"
                className="w-full p-2 border border-warm-gray rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">
                New Password
              </label>
              <Field
                type="password"
                name="newPassword"
                className="w-full p-2 border border-warm-gray rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">
                Confirm New Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                className="w-full p-2 border border-warm-gray rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded-lg transition-colors"
            >
              Update Password
            </button>
          </Form>
        </Formik>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg p-6">
        <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <FaShieldAlt className="mr-2" /> Privacy Settings
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-charcoal">Profile Visibility</p>
              <p className="text-sm text-muted-green">
                Control who can see your profile
              </p>
            </div>
            <select className="p-2 border border-warm-gray rounded-lg">
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="contacts">Contacts Only</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
