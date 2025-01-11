import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaClock } from 'react-icons/fa';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['All', 'Construction Tips', 'Design Ideas', 'Industry News', 'Project Management'];
  
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Construction Trends in 2024",
      excerpt: "Discover the latest trends shaping the construction industry this year...",
      author: "John Smith",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Industry News",
      image: "https://via.placeholder.com/600x400",
      tags: ["Construction", "Trends", "Technology"]
    },
    // Add more blog posts here
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Civil Universe Blog</h1>
          <p className="text-muted-green text-lg">Stay updated with the latest insights and trends</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.toLowerCase()
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-green mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendar /> {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-secondary">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-charcoal mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-muted-green" />
                    <span className="text-muted-green">{post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-secondary hover:text-primary font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="mb-6">Get the latest updates and insights delivered to your inbox</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-charcoal focus:outline-none"
            />
            <button className="bg-secondary hover:bg-secondary/90 px-6 py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
