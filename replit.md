# Civil Universe - Full Stack Business Directory Platform

## Overview

Civil Universe is a comprehensive business directory platform specifically designed for the civil engineering and construction industry. The platform connects businesses like construction companies, architects, fabricators, and contractors with potential clients through a centralized marketplace. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it provides features for business listings, user authentication, booking systems, payment processing, real-time chat, and analytics dashboards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The React-based frontend follows a modular component architecture with clear separation of concerns:

- **Component Organization**: Structured into feature-based modules (auth, business, booking, chat, dashboard, payment, reviews, search) with reusable common components
- **State Management**: Redux Toolkit for global state management with separate slices for auth, user, business, and booking domains
- **Routing**: React Router DOM with lazy loading for performance optimization and protected routes for authentication
- **Styling**: Tailwind CSS with custom design system using predefined color palette and responsive design patterns
- **Form Handling**: Combination of React Hook Form and Formik for different form types with Yup validation schemas

### Backend Architecture
Node.js/Express.js RESTful API with modular controller-based architecture:

- **Database Layer**: MongoDB with Mongoose ODM for data modeling and validation
- **Authentication**: JWT-based authentication with role-based access control (admin, business, customer)
- **API Structure**: RESTful endpoints organized by domain (businesses, bookings, payments, users, reviews)
- **Real-time Communication**: Socket.io integration for live chat functionality
- **Middleware**: Custom authentication middleware and error handling

### Database Design
MongoDB collections with the following schema structure:

- **Users**: Authentication data, profile information, and role-based permissions
- **Businesses**: Company profiles, services, ratings, and metadata
- **Bookings**: Appointment scheduling with status tracking and payment integration
- **Reviews**: Rating and feedback system linked to businesses and users
- **Chats**: Real-time messaging between users and businesses

### Authentication & Authorization
JWT-based authentication system with:

- **Token Management**: Access tokens stored in localStorage with automatic refresh
- **Role-Based Access**: Three-tier permission system (admin, business, customer)
- **Protected Routes**: Component-level route protection based on authentication status
- **Middleware Validation**: Server-side token verification and role checking

## External Dependencies

### Payment Processing
- **Razorpay**: Primary payment gateway for Indian market with order creation and verification
- **Stripe**: Secondary payment option with React Stripe.js integration

### Maps & Location Services
- **Google Maps API**: Business location display and search functionality through @react-google-maps/api

### Real-time Communication
- **Socket.io**: WebSocket implementation for live chat between users and businesses

### UI Libraries & Tools
- **Chart.js**: Data visualization for business analytics dashboards
- **React Calendar**: Date selection for booking appointments
- **React Icons**: Comprehensive icon library (Heroicons, Font Awesome)
- **Formik & Yup**: Form handling and validation
- **Lodash**: Utility functions for data manipulation

### Development & Testing
- **Jest**: Unit testing framework with React Testing Library
- **MSW (Mock Service Worker)**: API mocking for testing
- **Cypress**: End-to-end testing capabilities
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer

### Build & Development Tools
- **React Scripts**: Create React App tooling with custom configurations
- **Concurrently**: Development script management for running client and server simultaneously
- **Nodemon**: Development server auto-restart functionality