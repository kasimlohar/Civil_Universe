const mongoose = require('mongoose');
const Business = require('../models/Business');
require('dotenv').config();

const sampleBusinesses = [
  {
    name: "Premier Construction Co.",
    description: "Leading construction company specializing in residential and commercial projects.",
    rating: 4.8,
    location: "Mumbai, Maharashtra",
    contact: "+91 98765 43210",
    imageUrl: "/images/businesses/construction-1.jpg",
    featured: true,
    categories: ["Construction", "Project Management"],
    services: ["Building Construction", "Renovation"],
    reviews: 128,
    completedProjects: 234,
    establishedYear: 2002
  },
  {
    name: "Modern Architects & Associates",
    description: "Award-winning architectural firm delivering innovative design solutions.",
    rating: 4.9,
    location: "Bangalore, Karnataka",
    contact: "+91 98765 43211",
    imageUrl: "/images/businesses/architect-1.jpg",
    featured: true,
    categories: ["Architecture", "Interior Design"],
    services: ["Architectural Design", "3D Visualization"],
    reviews: 96,
    completedProjects: 156,
    establishedYear: 2010
  },
  {
    name: "Elite Fabricators",
    description: "Specialized in custom metal fabrication and structural steel work.",
    rating: 4.7,
    location: "Delhi NCR",
    contact: "+91 98765 43212",
    imageUrl: "/images/businesses/fabrication-1.jpg",
    featured: true,
    categories: ["Fabrication", "Steel Work"],
    services: ["Metal Fabrication", "Welding"],
    reviews: 84,
    completedProjects: 312,
    establishedYear: 2008
  }
];

const addSampleBusinesses = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Business.deleteMany({}); // Clear existing businesses
    const result = await Business.insertMany(sampleBusinesses);
    console.log('Sample businesses added successfully:', result.length);
    process.exit(0);
  } catch (error) {
    console.error('Error adding sample businesses:', error);
    process.exit(1);
  }
};

addSampleBusinesses();
