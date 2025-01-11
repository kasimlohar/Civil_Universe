# Civil Universe

## Project Structure

```
Civil_Universe/
├──.vscode/
├── client/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── BussinessListings.js
│   │   │   ├── Profile.js
│   │   │   ├── Home.js
│   │   │   └── Booking.js
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── styles/
│   │   |   ├── tailwindcss
│   │   |   └── index.css
│   │   ├── App.js
│   │   ├── App.jsx
│   │   └── index.js
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
├──node_modules/
├── server/
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### Root Directory (`Civil_Universe/`)

- **.vscode/**: Contains Visual Studio Code specific settings and configurations.
- **node_modules/**: Contains all the npm packages required for the server-side of the project.
- **server/**: Likely contains the server-side code for your application.
- **.env**: Environment variables for the server-side.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package-lock.json**: Automatically generated file that describes the exact tree of dependencies.
- **package.json**: Lists the project's dependencies and scripts for the server-side.
- **README.md**: Documentation file for the project.

### Client Directory (`client/`)

- **node_modules/**: Contains all the npm packages required for the client-side of the project.
- **public/**: Contains static files that are served directly by the web server.
  - **index.html**: The main HTML file that is served by the web server.
- **src/**: Contains the source code for the client-side of the project.
  - **components/**: Contains reusable React components.
    - **BussinessListings.js**: Component for displaying business listings.
    - **Profile.js**: Component for displaying user profiles.
    - **Home.js**: Component for the home page.
    - **Booking.js**: Component for booking functionality.
  - **pages/**: Contains page-level components.
    - **Home.jsx**: Home page component.
    - **Footer.jsx**: Footer component.
    - **Navbar.jsx**: Navbar component.
  - **styles/**: Contains styling files.
    - **tailwindcss**: Directory for Tailwind CSS configurations.
    - **index.css**: Main CSS file for the project.
  - **App.js**: Main application component.
  - **App.jsx**: Another main application component, possibly used for different purposes or being refactored.
  - **index.js**: Entry point for the React application.
- **.env**: Environment variables for the client-side.
- **package-lock.json**: Automatically generated file that describes the exact tree of dependencies for the client-side.
- **package.json**: Lists the project's dependencies and scripts for the client-side.
- **postcss.config.js**: Configuration file for PostCSS.
- **tailwind.config.js**: Configuration file for Tailwind CSS.

## Installed Packages

### Client-side

- React
- React DOM
- React Scripts
- Axios
- Redux
- React Redux
- @reduxjs/toolkit
- TailwindCSS

### Server-side

- Express
- Mongoose
- Dotenv
- Jsonwebtoken

## Scripts

- `npm start`: Start the server
- `npm run client`: Start the client
- `npm run server`: Start the server
- `npm run dev`: Start both client and server concurrently

## Running the Project

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   ```

2. Navigate to the project directory:
   ```sh
   cd /d:/Civil_Universe
   ```

3. Install dependencies for the client:
   ```sh
   cd client
   npm install
   ```

4. Install dependencies for the server:
   ```sh
   cd ../server
   npm install
   ```

5. Start the development server:
   ```sh
   cd ..
   npm run dev
   ```

This will start both the client and server concurrently.
