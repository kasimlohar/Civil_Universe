# Civil Universe - Business Directory Platform

## Overview

Civil Universe is a comprehensive business directory platform designed specifically for the civil engineering and construction industry. The platform connects construction companies, architects, fabricators, contractors, and other civil engineering service providers with potential clients through a centralized hub. Built as a full-stack MERN application, it features business listings, appointment booking, real-time messaging, payment processing, and analytics dashboards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client-side application is built with React 18 and uses a component-based architecture with the following key patterns:

- **State Management**: Redux Toolkit for global state management with separate slices for authentication, user data, business listings, and booking management
- **Routing**: React Router DOM v6+ for client-side navigation with lazy loading for performance optimization
- **UI Framework**: Tailwind CSS with custom color scheme and design system
- **Component Structure**: Feature-based organization with reusable common components (LoadingSpinner, Toast, Modal, Rating) and specialized modules (analytics, booking, business, chat, dashboard, payment, reviews, search)
- **Form Handling**: React Hook Form with Yup validation for robust form management
- **API Communication**: Axios with interceptors for centralized HTTP handling and authentication token management

### Backend Architecture

The server-side follows a traditional MVC pattern with Express.js:

- **Framework**: Express.js with middleware for CORS, authentication, and error handling
- **Database**: MongoDB with Mongoose ODM for data modeling and relationships
- **Authentication**: JWT-based authentication with role-based access control (admin, business, customer)
- **Real-time Features**: Socket.IO integration for live chat and notifications
- **File Structure**: Organized with controllers, models, routes, middleware, and services separation

### Data Models

Key database schemas include:
- **User**: Authentication and profile information with role-based permissions
- **Business**: Company profiles with ratings, categories, services, and location data
- **Booking**: Appointment scheduling with status tracking and payment integration
- **Review**: Rating and feedback system with image support
- **Chat**: Real-time messaging between users and businesses

### Authentication & Authorization

- JWT token-based authentication stored in localStorage
- Role-based access control with three user types: admin, business, and customer
- Protected routes on both frontend and backend
- Middleware for request authentication and role verification

### Real-time Features

Socket.IO implementation provides:
- Live chat messaging between users and businesses
- Real-time notifications for bookings and updates
- Connection management with authentication verification

## External Dependencies

### Payment Processing
- **Razorpay**: Primary payment gateway for Indian market transactions
- **Stripe**: Alternative payment processing (configured but not actively used)

### Maps & Location
- **Google Maps API**: Business location display and geocoding services through @react-google-maps/api

### Frontend Libraries
- **Chart.js**: Analytics and business dashboard visualization
- **React Calendar**: Date selection for appointment booking
- **React Icons**: Consistent icon library throughout the application
- **Formik**: Alternative form handling (used alongside React Hook Form)
- **Lodash**: Utility functions for data manipulation
- **Date-fns**: Date formatting and manipulation utilities

### Development & Testing
- **MSW (Mock Service Worker)**: API mocking for development and testing
- **Cypress**: End-to-end testing framework
- **Jest**: Unit testing with React Testing Library integration
- **Concurrently**: Development script management for running client and server simultaneously

### Build & Development Tools
- **Create React App**: React application scaffolding and build configuration
- **Nodemon**: Server development with automatic restarts
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

### File Handling & Export
- **PDF-lib**: PDF generation for reports and invoices
- **File-saver**: Client-side file downloading functionality

The architecture emphasizes separation of concerns, scalability, and maintainability while providing a rich user experience for both service providers and customers in the construction industry.