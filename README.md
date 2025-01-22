# Civil Universe - Full Stack Project

<<<<<<< HEAD
## Project Overview
A platform connecting civil-related businesses with potential customers.
=======
A comprehensive platform connecting civil-related businesses with potential customers.
>>>>>>> feature/core-components

## Project Overview

Civil Universe is a centralized platform for civil engineering services, connecting businesses like construction companies, architects, fabricators, and contractors with potential clients.

### Core Features

- 🏢 **Business Listings**
  - Comprehensive directory of civil-related businesses
  - Advanced search & filtering
  - Featured business showcase
  - Ratings & reviews system

- 🔐 **Authentication System**
  - User/Business registration
  - Role-based access control
  - Protected routes

- 📊 **Business Dashboard**
  - Analytics & insights
  - Booking management
  - Service management
  - Profile customization

- 📱 **User Features**
  - Service booking
  - Business search
  - Real-time chat
  - Review system

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
<<<<<<< HEAD

   ```sh
   git clone https://github.com/your-username/civil_universe.git
   cd civil_universe
   ```

### Frontend Setup
```bash
cd client
npm install
npm start
```

### Backend Setup
```bash
cd server
npm install
npm run dev
```

### Environment Variables

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_STRIPE_KEY=your_stripe_key
REACT_APP_SOCKET_URL=ws://localhost:5000
```

Backend (.env):
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

Create a `.env` file in the `server` directory and add the following environment variables:

```properties
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
=======
```bash
git clone https://github.com/yourusername/Civil_Universe.git
cd Civil_Universe
>>>>>>> feature/core-components
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

<<<<<<< HEAD
## Database Schema Overview
```javascript
// User Schema
- id
- name
- email
- password
- role
- profile

// Business Schema
- id
- name
- description
- services
- location
- ratings
- portfolio

// Booking Schema
- id
- userId
- businessId
- serviceId
- date
- status
```

### API Endpoints
=======
# Start backend (in server directory)
npm run dev
```
>>>>>>> feature/core-components

## Project Structure

<<<<<<< HEAD
## API Routes Structure
```bash
/api
├── /auth
│   ├── /login
│   ├── /register
│   └── /verify
├── /users
│   ├── /profile
│   └── /settings
├── /businesses
│   ├── /listings
│   ├── /services
│   └── /reviews
└── /bookings
    ├── /create
    ├── /status
    └── /history
```

### Frontend Components
=======
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
>>>>>>> feature/core-components

## Available Scripts

### Frontend

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

<<<<<<< HEAD
## Contributing Guide
1. Fork the repository
2. Create feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit changes
   ```bash
   git commit -m "feat: add your feature"
   ```
4. Push to branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open Pull Request

## Running Tests
```bash
# Frontend Tests
cd client
npm test

# Backend Tests
cd server
npm test
```

### Contributing
=======
### Backend
>>>>>>> feature/core-components

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
