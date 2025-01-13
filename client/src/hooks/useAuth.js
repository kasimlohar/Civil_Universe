import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from '../slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return { user, isAuthenticated, loading };
};
