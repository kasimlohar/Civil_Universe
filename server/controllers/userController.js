const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, email, password, phone, userType } = req.body;
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      // Mock successful registration
      const mockUser = {
        id: Date.now(),
        name,
        email,
        userType: userType || 'customer'
      };
      const token = 'mock_jwt_token_' + Date.now();
      return res.status(201).json({ 
        token,
        user: mockUser
      });
    }
    
    const user = new User({ name, email, password, phone, userType });
    await user.save();
    const token = jwt.sign(
      { user: { id: user.id, email: user.email, userType: user.userType } }, 
      process.env.JWT_SECRET || 'fallback_secret', 
      { expiresIn: '24h' }
    );
    res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.log('Registration error:', error.message);
    res.status(400).json({ message: 'Error registering user: ' + error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      // Mock successful login for demo purposes
      if (email && password) {
        const mockUser = {
          id: Date.now(),
          name: 'Demo User',
          email,
          userType: 'customer'
        };
        const token = 'mock_jwt_token_' + Date.now();
        return res.json({ 
          token,
          user: mockUser
        });
      } else {
        return res.status(400).json({ message: 'Email and password are required' });
      }
    }
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { user: { id: user.id, email: user.email, userType: user.userType } }, 
      process.env.JWT_SECRET || 'fallback_secret', 
      { expiresIn: '24h' }
    );
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.log('Login error:', error.message);
    res.status(500).json({ message: 'Login failed: ' + error.message });
  }
};
