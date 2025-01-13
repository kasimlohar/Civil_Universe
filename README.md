# Civil Universe - Full Stack Project

## Project Overview
A platform connecting civil-related businesses with potential customers.

## Features

- User registration and login
- Business listings with search and filter options
- Featured businesses
- Business profiles
- Booking services
- User profiles

## Technologies Used

- Frontend: React, Redux, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT, bcryptjs

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

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

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
```

Replace `<username>`, `<password>`, `<cluster-url>`, and `<database>` with your actual MongoDB credentials and database name.

### Running the Application

1. Start the backend server:

   ```sh
   cd server
   node index.js
   ```

2. Start the frontend development server:

   ```sh
   cd ../client
   npm start
   ```

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

- `GET /api/businesses`: Get all businesses
- `GET /api/businesses/featured`: Get featured businesses
- `POST /api/businesses`: Create a new business (protected route)
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Login user

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

- `Profile`: Displays user profile information
- `Home`: Displays featured businesses and search bar
- `FormInput`: Custom input component with validation
- `Card`: Custom card component
- `Button`: Custom button component
- `BusinessListings`: Displays business listings with search and filter options
- `BusinessList`: Displays paginated list of businesses
- `BusinessCard`: Displays business details in a card format
- `BookingForm`: Form for booking services
- `Booking`: Booking page with calendar and status tracking

### Backend Structure

- `models`: Contains Mongoose models
  - `Business.js`: Business model
  - `User.js`: User model
- `controllers`: Contains controller functions
  - `businessController.js`: Business controller
  - `userController.js`: User controller
- `routes`: Contains route definitions
  - `businesses.js`: Business routes
  - `users.js`: User routes
- `middleware`: Contains middleware functions
  - `auth.js`: Authentication middleware
- `db.js`: Database connection setup

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

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.
