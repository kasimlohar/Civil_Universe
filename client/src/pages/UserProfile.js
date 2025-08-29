import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../slices/userSlice';
import LoadingSpinner from '../components/common/LoadingSpinner';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchUserProfile(user.id));
    }
  }, [dispatch, user]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex items-center space-x-6">
            <img
              src={profile.avatar || '/default-avatar.png'}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
              <p className="text-gray-600">{profile.email}</p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {/* Profile sections */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              {/* Contact details */}
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              {/* Activity list */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
