# Civil Universe

A comprehensive platform connecting civil-related businesses with potential customers.

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
