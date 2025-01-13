export interface Business {
  id: string;
  name: string;
  description: string;
  location: string;
  contact: string;
  rating: number;
  categories: string[];
  images: string[];
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'business' | 'customer';
  profileImage?: string;
}

export interface Booking {
  id: string;
  userId: string;
  businessId: string;
  serviceId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}
