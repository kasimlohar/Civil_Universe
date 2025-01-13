# Civil Universe - Frontend Documentation

## Project Structure
```
Civil_Universe/
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   ├── hero-bg2.jpg
│   │   │   └── avatars/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── analytics/
│   │   │   │   └── BusinessAnalytics.js
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.js
│   │   │   │   ├── RegisterForm.js
│   │   │   │   └── ProtectedRoute.js
│   │   │   ├── booking/
│   │   │   │   ├── BookingCalendar.js
│   │   │   │   └── BookingSystem.js
│   │   │   ├── business/
│   │   │   │   └── BusinessProfileEditor.js
│   │   │   ├── chat/
│   │   │   │   ├── ChatInterface.js
│   │   │   │   └── ChatSystem.js
│   │   │   ├── common/
│   │   │   │   ├── LoadingSpinner.js
│   │   │   │   ├── Toast.js
│   │   │   │   └── ErrorBoundary.js
│   │   │   ├── dashboard/
│   │   │   │   ├── BusinessDashboard.js
│   │   │   │   └── UserDashboard.js
│   │   │   ├── payment/
│   │   │   │   └── PaymentSystem.js
│   │   │   ├── search/
│   │   │   │   └── AdvancedSearchSystem.js
│   │   │   ├── BusinessCard.js
│   │   │   ├── BusinessList.js
│   │   │   └── RotatingTagline.js
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── userSlice.js
│   │   │   ├── businessSlice.js
│   │   │   └── bookingSlice.js
│   │   ├── utils/
│   │   │   ├── axiosInstance.js
│   │   │   ├── constants.js
│   │   │   ├── errorHandler.js
│   │   │   └── formValidation.js
│   │   ├── store/
│   │   │   └── index.js
│   │   └── App.js
│   ├── .env
│   └── package.json
```

## Implementation Status

### Completed Components:
- ✅ Authentication System
- ✅ Business Management
- ✅ User Dashboard
- ✅ Business Analytics
- ✅ Search & Filter System
- ✅ Form Validation
- ✅ Error Handling
- ✅ Loading States
- ✅ Toast Notifications
- ✅ Protected Routes

### Core Features:
1. Authentication
   - Login/Register
   - Protected Routes
   - Role-based Access

2. Business Management
   - Profile Creation/Editing
   - Service Management
   - Analytics Dashboard

3. User Features
   - Service Booking
   - Business Search
   - Reviews & Ratings

4. Common Components
   - Loading Spinners
   - Toast Notifications
   - Error Boundaries

## Environment Setup

```bash
# Required environment variables
REACT_APP_API_URL=http://localhost:5000
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_key
REACT_APP_SOCKET_URL=ws://localhost:5000
```

## Dependencies
```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.5",
    "@stripe/stripe-js": "^1.54.1",
    "axios": "^1.4.0",
    "react-router-dom": "^6.14.1",
    "socket.io-client": "^4.7.1",
    "tailwindcss": "^3.3.2",
    "chart.js": "^4.3.0",
    "date-fns": "^2.30.0",
    "react-icons": "^4.10.1"
  }
}
```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/your-username/Civil_Universe.git
```

2. Install dependencies
```bash
cd Civil_Universe/client
npm install
```

3. Start development server
```bash
npm start
```

## Contributing

1. Branch naming convention:
   - feature/feature-name
   - bugfix/bug-name
   - hotfix/issue-name

2. Commit message format:
   - feat: add new feature
   - fix: bug fix
   - docs: documentation changes
   - style: formatting, missing semicolons
   - refactor: code refactoring
   - test: adding tests
   - chore: maintenance

## Testing

Run tests:
```bash
npm test
```

Run test coverage:
```bash
npm run test:coverage
```
