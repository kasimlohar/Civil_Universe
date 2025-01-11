# Civil Universe

Civil Universe is a platform for finding and booking civil-related businesses such as contractors, architects, interior designers, and more.

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

2. Install dependencies for the client:

   ```sh
   cd client
   npm install
   ```

3. Install dependencies for the server:

   ```sh
   cd ../server
   npm install
   ```

### Environment Variables

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

### API Endpoints

- `GET /api/businesses`: Get all businesses
- `GET /api/businesses/featured`: Get featured businesses
- `POST /api/businesses`: Create a new business (protected route)
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Login user

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

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.
