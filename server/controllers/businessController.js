const Business = require('../models/Business');

// Mock data for when database is not connected
const mockBusinesses = [
  {
    _id: '1',
    name: 'ABC Construction',
    description: 'Professional construction services with 20+ years of experience',
    location: 'New York, NY',
    rating: 4.5,
    contact: '(555) 123-4567',
    categories: ['Construction', 'Commercial'],
    website: 'https://abc-construction.com',
    imageUrl: '/images/business1.jpg',
    services: ['Building Construction', 'Renovation', 'Project Management'],
    featured: true
  },
  {
    _id: '2',
    name: 'Precision Architects',
    description: 'Award-winning architectural design firm specializing in modern buildings',
    location: 'Los Angeles, CA',
    rating: 4.8,
    contact: '(555) 987-6543',
    categories: ['Architecture', 'Design'],
    website: 'https://precision-architects.com',
    imageUrl: '/images/business2.jpg',
    services: ['Architectural Design', 'Interior Design', 'Planning'],
    featured: true
  },
  {
    _id: '3',
    name: 'Steel Works Fabrication',
    description: 'Custom steel fabrication for construction and industrial projects',
    location: 'Chicago, IL',
    rating: 4.3,
    contact: '(555) 456-7890',
    categories: ['Fabrication', 'Steel Work'],
    website: 'https://steelworks-fab.com',
    imageUrl: '/images/business3.jpg',
    services: ['Steel Fabrication', 'Welding', 'Custom Metalwork'],
    featured: false
  }
];

// Get all businesses
exports.getAllBusinesses = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      return res.json(mockBusinesses);
    }
    
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    // Fallback to mock data if database error
    console.log('Database error, using mock data:', error.message);
    res.json(mockBusinesses);
  }
};

// Get featured businesses
exports.getFeaturedBusinesses = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const featured = mockBusinesses.filter(business => business.featured);
      return res.json(featured);
    }
    
    const featuredBusinesses = await Business.find({ rating: { $gte: 4.0 } });
    res.json(featuredBusinesses);
  } catch (error) {
    // Fallback to mock data if database error
    console.log('Database error, using mock data:', error.message);
    const featured = mockBusinesses.filter(business => business.featured);
    res.json(featured);
  }
};

// Get business by ID
exports.getBusinessById = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const business = mockBusinesses.find(b => b._id === req.params.id);
      if (!business) {
        return res.status(404).json({ message: 'Business not found' });
      }
      return res.json(business);
    }
    
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.json(business);
  } catch (error) {
    // Fallback to mock data
    console.log('Database error, using mock data:', error.message);
    const business = mockBusinesses.find(b => b._id === req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.json(business);
  }
};

// Create a new business
exports.createBusiness = async (req, res) => {
  try {
    const newBusiness = new Business(req.body);
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a business
exports.updateBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    
    res.json(business);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a business
exports.deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    
    res.json({ message: 'Business deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBusinesses = async (req, res) => {
  try {
    const { 
      type, 
      category, 
      location, 
      featured, 
      search,
      minRating,
      maxRating,
      sortBy,
      sortOrder,
      page,
      limit,
      services
    } = req.query;
    
    // Pagination settings
    const pageNum = parseInt(page) || 1;
    const pageSize = Math.min(parseInt(limit) || 10, 50); // Max 50 items per page
    const skip = (pageNum - 1) * pageSize;
    
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      let filteredBusinesses = [...mockBusinesses];
      
      // Apply enhanced filters to mock data
      if (search) {
        const searchLower = search.toLowerCase();
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.name.toLowerCase().includes(searchLower) ||
          business.description.toLowerCase().includes(searchLower) ||
          business.location.toLowerCase().includes(searchLower) ||
          business.services.some(service => service.toLowerCase().includes(searchLower))
        );
      }
      
      if (type && type !== 'all') {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.categories.some(cat => cat.toLowerCase().includes(type.toLowerCase()))
        );
      }
      
      if (category) {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.categories.some(cat => cat.toLowerCase().includes(category.toLowerCase()))
        );
      }
      
      if (location) {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.location.toLowerCase().includes(location.toLowerCase())
        );
      }
      
      if (featured) {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.featured === (featured === 'true')
        );
      }
      
      if (minRating) {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.rating >= parseFloat(minRating)
        );
      }
      
      if (maxRating) {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.rating <= parseFloat(maxRating)
        );
      }
      
      if (services) {
        const serviceList = services.split(',');
        filteredBusinesses = filteredBusinesses.filter(business => 
          serviceList.some(service => 
            business.services.some(businessService => 
              businessService.toLowerCase().includes(service.toLowerCase())
            )
          )
        );
      }
      
      // Apply sorting
      if (sortBy) {
        filteredBusinesses.sort((a, b) => {
          let aVal = a[sortBy];
          let bVal = b[sortBy];
          
          if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
          }
          
          if (sortOrder === 'desc') {
            return bVal > aVal ? 1 : -1;
          }
          return aVal > bVal ? 1 : -1;
        });
      }
      
      // Apply pagination
      const total = filteredBusinesses.length;
      const paginatedBusinesses = filteredBusinesses.slice(skip, skip + pageSize);
      
      return res.json({
        businesses: paginatedBusinesses,
        pagination: {
          page: pageNum,
          limit: pageSize,
          total,
          pages: Math.ceil(total / pageSize)
        }
      });
    }

    const query = {};

    // Enhanced search functionality
    if (search) {
      query.$or = [
        { name: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') },
        { location: new RegExp(search, 'i') },
        { services: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    // Category filters
    if (type && type !== 'all') {
      query.categories = { $in: [new RegExp(type, 'i')] };
    }
    
    if (category) {
      query.categories = { $in: [new RegExp(category, 'i')] };
    }
    
    // Location filter
    if (location) {
      query.location = new RegExp(location, 'i');
    }
    
    // Featured filter
    if (featured) {
      query.featured = featured === 'true';
    }
    
    // Rating filters
    if (minRating || maxRating) {
      query.rating = {};
      if (minRating) query.rating.$gte = parseFloat(minRating);
      if (maxRating) query.rating.$lte = parseFloat(maxRating);
    }
    
    // Services filter
    if (services) {
      const serviceList = services.split(',');
      query.services = { $in: serviceList.map(service => new RegExp(service, 'i')) };
    }

    // Sorting options
    let sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
    } else {
      sortOptions.rating = -1; // Default sort by rating desc
    }

    // Execute query with pagination
    const businesses = await Business.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(pageSize);
      
    const total = await Business.countDocuments(query);

    res.json({
      businesses,
      pagination: {
        page: pageNum,
        limit: pageSize,
        total,
        pages: Math.ceil(total / pageSize)
      }
    });
  } catch (error) {
    console.log('Database error, using mock data:', error.message);
    res.status(500).json({ 
      message: 'Error fetching businesses', 
      error: error.message,
      businesses: mockBusinesses.slice(0, 10),
      pagination: { page: 1, limit: 10, total: mockBusinesses.length, pages: 1 }
    });
  }
};

// Dedicated search endpoint
exports.searchBusinesses = async (req, res) => {
  try {
    const { q, type, minRating, page, limit } = req.query;
    
    if (!q || q.trim() === '') {
      return res.status(400).json({ message: 'Search query is required' });
    }
    
    const pageNum = parseInt(page) || 1;
    const pageSize = Math.min(parseInt(limit) || 10, 50);
    const skip = (pageNum - 1) * pageSize;
    
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const searchLower = q.toLowerCase();
      let results = mockBusinesses.filter(business => 
        business.name.toLowerCase().includes(searchLower) ||
        business.description.toLowerCase().includes(searchLower) ||
        business.location.toLowerCase().includes(searchLower) ||
        business.services.some(service => service.toLowerCase().includes(searchLower)) ||
        business.categories.some(cat => cat.toLowerCase().includes(searchLower))
      );
      
      if (type) {
        results = results.filter(business => 
          business.categories.some(cat => cat.toLowerCase().includes(type.toLowerCase()))
        );
      }
      
      if (minRating) {
        results = results.filter(business => business.rating >= parseFloat(minRating));
      }
      
      const total = results.length;
      const paginatedResults = results.slice(skip, skip + pageSize);
      
      return res.json({
        query: q,
        results: paginatedResults,
        pagination: {
          page: pageNum,
          limit: pageSize,
          total,
          pages: Math.ceil(total / pageSize)
        }
      });
    }
    
    const query = {
      $or: [
        { name: new RegExp(q, 'i') },
        { description: new RegExp(q, 'i') },
        { location: new RegExp(q, 'i') },
        { services: { $in: [new RegExp(q, 'i')] } },
        { categories: { $in: [new RegExp(q, 'i')] } }
      ]
    };
    
    if (type) {
      query.categories = { $in: [new RegExp(type, 'i')] };
    }
    
    if (minRating) {
      query.rating = { $gte: parseFloat(minRating) };
    }
    
    const results = await Business.find(query)
      .sort({ rating: -1 })
      .skip(skip)
      .limit(pageSize);
      
    const total = await Business.countDocuments(query);
    
    res.json({
      query: q,
      results,
      pagination: {
        page: pageNum,
        limit: pageSize,
        total,
        pages: Math.ceil(total / pageSize)
      }
    });
  } catch (error) {
    console.log('Search error:', error.message);
    res.status(500).json({ message: 'Search failed', error: error.message });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const categories = [...new Set(mockBusinesses.flatMap(business => business.categories))];
      return res.json({
        categories: categories.map(cat => ({
          name: cat,
          count: mockBusinesses.filter(b => b.categories.includes(cat)).length
        }))
      });
    }
    
    const categoryAggregation = await Business.aggregate([
      { $unwind: '$categories' },
      { $group: { _id: '$categories', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { name: '$_id', count: 1, _id: 0 } }
    ]);
    
    res.json({ categories: categoryAggregation });
  } catch (error) {
    console.log('Categories error:', error.message);
    const categories = [...new Set(mockBusinesses.flatMap(business => business.categories))];
    res.json({
      categories: categories.map(cat => ({
        name: cat,
        count: mockBusinesses.filter(b => b.categories.includes(cat)).length
      }))
    });
  }
};

// Get business statistics
exports.getBusinessStats = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const stats = {
        totalBusinesses: mockBusinesses.length,
        featuredBusinesses: mockBusinesses.filter(b => b.featured).length,
        averageRating: (mockBusinesses.reduce((sum, b) => sum + b.rating, 0) / mockBusinesses.length).toFixed(1),
        topCategories: [...new Set(mockBusinesses.flatMap(b => b.categories))]
          .map(cat => ({
            name: cat,
            count: mockBusinesses.filter(b => b.categories.includes(cat)).length
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5),
        locationStats: [...new Set(mockBusinesses.map(b => b.location))]
          .map(loc => ({
            location: loc,
            count: mockBusinesses.filter(b => b.location === loc).length
          }))
          .sort((a, b) => b.count - a.count)
      };
      
      return res.json(stats);
    }
    
    const totalBusinesses = await Business.countDocuments();
    const featuredBusinesses = await Business.countDocuments({ featured: true });
    
    const avgRatingResult = await Business.aggregate([
      { $group: { _id: null, avgRating: { $avg: '$rating' } } }
    ]);
    
    const topCategories = await Business.aggregate([
      { $unwind: '$categories' },
      { $group: { _id: '$categories', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
      { $project: { name: '$_id', count: 1, _id: 0 } }
    ]);
    
    const locationStats = await Business.aggregate([
      { $group: { _id: '$location', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { location: '$_id', count: 1, _id: 0 } }
    ]);
    
    const stats = {
      totalBusinesses,
      featuredBusinesses,
      averageRating: avgRatingResult.length > 0 ? avgRatingResult[0].avgRating.toFixed(1) : '0.0',
      topCategories,
      locationStats
    };
    
    res.json(stats);
  } catch (error) {
    console.log('Stats error:', error.message);
    res.status(500).json({ message: 'Failed to get statistics', error: error.message });
  }
};

// Get businesses by location
exports.getBusinessesByLocation = async (req, res) => {
  try {
    const { location } = req.params;
    const { page, limit } = req.query;
    
    const pageNum = parseInt(page) || 1;
    const pageSize = Math.min(parseInt(limit) || 10, 50);
    const skip = (pageNum - 1) * pageSize;
    
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const businesses = mockBusinesses.filter(business => 
        business.location.toLowerCase().includes(location.toLowerCase())
      );
      
      const total = businesses.length;
      const paginatedBusinesses = businesses.slice(skip, skip + pageSize);
      
      return res.json({
        location,
        businesses: paginatedBusinesses,
        pagination: {
          page: pageNum,
          limit: pageSize,
          total,
          pages: Math.ceil(total / pageSize)
        }
      });
    }
    
    const query = { location: new RegExp(location, 'i') };
    
    const businesses = await Business.find(query)
      .sort({ rating: -1 })
      .skip(skip)
      .limit(pageSize);
      
    const total = await Business.countDocuments(query);
    
    res.json({
      location,
      businesses,
      pagination: {
        page: pageNum,
        limit: pageSize,
        total,
        pages: Math.ceil(total / pageSize)
      }
    });
  } catch (error) {
    console.log('Location search error:', error.message);
    res.status(500).json({ message: 'Failed to get businesses by location', error: error.message });
  }
};

