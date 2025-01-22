# Civil Universe - Full Stack Business Directory Platform 🏗️

## Project Structure Overview

### Frontend Architecture (client/)

#### Core Components
```
src/components/
├── common/              # Reusable UI components
│   ├── LoadingSpinner   # Loading animation component
│   ├── Toast           # Notification system
│   ├── Modal           # Reusable modal component
│   └── Rating          # Star rating component
├── auth/               # Authentication components
│   ├── LoginForm       # User login interface
│   ├── RegisterForm    # User registration
│   └── ProtectedRoute  # Route protection HOC
└── layout/             # Layout components
    ├── MainLayout      # Main app layout wrapper
    ├── Navbar          # Navigation header
    └── Footer          # Page footer
```

#### Feature Modules
```
src/components/
├── analytics/          # Business analytics & reporting
├── booking/           # Appointment scheduling system
├── business/          # Business profile management
├── chat/             # Real-time messaging system
├── dashboard/         # User & business dashboards
├── payment/          # Payment processing integration
├── reviews/          # Rating & review system
└── search/           # Search & filtering system
```

## Project Overview

Civil Universe is a centralized platform for civil engineering services, connecting businesses like construction companies, architects, fabricators, and contractors with potential clients.

### Core Features

1. **Authentication & Authorization**
   - User registration and login
   - Role-based access control
   - Protected routes
   - JWT token management

2. **Business Management**
   - Business profile creation/editing
   - Service management
   - Booking system
   - Analytics dashboard

3. **User Features**
   - Service search & filtering
   - Business ratings & reviews
   - Booking appointments
   - Chat with businesses

4. **Advanced Features**
   - Real-time notifications
   - Payment processing
   - File upload system
   - Analytics & reporting

## Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Chart.js
- Socket.io-client
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Socket.io
- JWT Authentication

## Frontend Status (75% Complete)

### Completed Features ✅
- Authentication System
- User Dashboard
- Business Listings
- Search System
- Error Handling
- Loading States
- Form Validations
- Protected Routes
- Business Analytics (Basic)
- Responsive Design

### Remaining Frontend Work 🚧
1. Real-time Features (25% remaining)
   - Chat System Implementation
   - Live Notifications
   - Real-time Booking Updates

2. Advanced Features (30% remaining)
   - Payment Integration
   - PDF/Document Generation
   - Advanced Analytics Dashboard
   - File Upload System

3. Testing (80% remaining)
   - Unit Tests
   - Integration Tests
   - E2E Tests

## Backend Status (40% Complete)

### Completed Backend Features ✅
- Basic API Setup
- Authentication Routes
- User Management
- Database Schema
- Basic CRUD Operations

### Remaining Backend Work 🚧
1. Core Features (60% remaining)
   - Business Logic Implementation
   - Booking System
   - Review System
   - Analytics Engine

2. Advanced Features (80% remaining)
   - Payment Processing
   - Real-time Communication
   - File Management
   - Email Service

3. Security & Optimization (70% remaining)
   - Rate Limiting
   - Data Validation
   - Caching
   - API Documentation

## Backend Roadmap

### Phase 1: Core API Development
```bash
1. User Management ✅
   - Authentication
   - Authorization
   - Profile Management

2. Business Management 🚧
   - Business Profiles
   - Service Categories
   - Portfolio Management

3. Booking System 🚧
   - Appointment Scheduling
   - Status Management
   - Notifications
```

### Phase 2: Advanced Features
```bash
1. Payment Integration
   - Stripe Setup
   - Transaction Management
   - Invoice Generation

2. Real-time Features
   - WebSocket Setup
   - Chat System
   - Live Notifications

3. File Management
   - Image Upload
   - Document Storage
   - PDF Generation
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Civil_Universe.git
cd Civil_Universe
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Environment Setup:

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=ws://localhost:5000
```

Backend (.env):
```
MONGO_URI=your_mongodb_uri
PORT=5000
JWT_SECRET=your_secret_key
```

4. Run the application:
```bash
# Start frontend (in client directory)
npm start

# Start backend (in server directory)
npm run dev
```

## Component Documentation

### Key Components

1. `RotatingTagline.js`
   - Animated text rotation for service categories
   - Auto-transitions with fade effects
   - Configurable timing and content

2. `BusinessCard.js`
   - Display business information
   - Rating display
   - Action buttons
   - Image handling

3. `SearchBar.js`
   - Advanced search functionality
   - Location-based filtering
   - Auto-suggestions
   - Query parameter handling

4. `BookingCalendar.js`
   - Interactive calendar interface
   - Availability management
   - Time slot selection
   - Booking confirmation

[More component documentation to be added...]

## Project Structure

```
Civil_Universe/
├── client/                 # Frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/         # Page components
│       ├── slices/        # Redux slices
│       ├── utils/         # Utility functions
│       └── styles/        # CSS styles
└── server/                # Backend
    ├── models/           # Database models
    ├── routes/          # API routes
    ├── controllers/     # Route controllers
    └── utils/          # Utility functions
```

### State Management
```
src/
├── store/            # Redux store configuration
├── slices/           # Redux Toolkit slices
├── actions/          # Redux actions
└── reducers/         # Redux reducers
```

### API Integration
```
src/utils/
├── axiosInstance.js  # Axios configuration
└── errorHandler.js   # Global error handling
```

## Available Scripts

### Frontend

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

### Backend

- `npm start`: Start production server
- `npm run dev`: Start development server with nodemon

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Color Theme

```css
colors: {
  primary: '#143D30',    // Deep Forest Green
  secondary: '#F05A28',  // Vibrant Orange
  background: '#F9F4E6', // Warm Beige
  'muted-green': '#4F6D5A',
  'warm-gray': '#D9D9D9',
  'soft-blue': '#A3D4D0',
  golden: '#F0C75E',
  charcoal: '#333333'
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
