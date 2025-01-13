export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const BUSINESS_CATEGORIES = [
  'Construction',
  'Architecture',
  'Interior Design',
  'Plumbing',
  'Electrical',
  'Fabrication',
  'Civil Engineering',
  'Renovation'
];

export const SERVICE_TYPES = {
  CONSTRUCTION: 'construction',
  DESIGN: 'design',
  MAINTENANCE: 'maintenance',
  CONSULTATION: 'consultation'
};

export const USER_ROLES = {
  ADMIN: 'admin',
  BUSINESS: 'business',
  CUSTOMER: 'customer'
};
