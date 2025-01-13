import { USER_ROLES } from '../config/constants';

const roleHierarchy = {
  [USER_ROLES.ADMIN]: ['admin', 'business', 'customer'],
  [USER_ROLES.BUSINESS]: ['business', 'customer'],
  [USER_ROLES.CUSTOMER]: ['customer']
};

export const checkPermission = (userRole, requiredRole) => {
  if (!userRole || !requiredRole) return false;
  return roleHierarchy[userRole]?.includes(requiredRole) || false;
};

export const withPermission = (WrappedComponent, requiredRole) => {
  return function WithPermissionComponent(props) {
    const { user } = props;
    if (!checkPermission(user?.role, requiredRole)) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};
