import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector(state => state.user.user);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Please log in to view your profile</h2>
          {/* Add login button or form here */}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-blue-500 md:w-48">
            <div className="h-48 w-full flex items-center justify-center">
              <img
                className="h-32 w-32 rounded-full object-cover border-4 border-white"
                src={user.avatar || 'https://via.placeholder.com/150'}
                alt={user.name}
              />
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="font-semibold">{user.phone}</p>
              </div>
              {/* Add more user details here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
