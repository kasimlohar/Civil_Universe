import React from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendar, FaUser, FaTags, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock data - replace with actual API call using the id
  const post = {
    id,  // Use the id parameter
    title: "Top 10 Construction Trends in 2024",
    content: `<p>Detailed blog content goes here...</p>
              <h2>First Trend</h2>
              <p>More content...</p>`,
    author: "John Smith",
    date: "2024-01-15",
    category: "Industry News",
    tags: ["Construction", "Trends", "Technology"],
    image: "https://via.placeholder.com/1200x600"
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-green mb-8">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTags />
                <span>{post.category}</span>
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-background text-primary px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="border-t border-warm-gray pt-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="text-[#1877F2] hover:opacity-80 transition-opacity">
                  <FaFacebook size={24} />
                </button>
                <button className="text-[#1DA1F2] hover:opacity-80 transition-opacity">
                  <FaTwitter size={24} />
                </button>
                <button className="text-[#0A66C2] hover:opacity-80 transition-opacity">
                  <FaLinkedin size={24} />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
