import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-muted-green">
            Get in touch with us for any questions or concerns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-charcoal font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-charcoal font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-charcoal font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-charcoal font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-secondary text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-primary">Address</h4>
                    <p className="text-charcoal">123 Construction Ave, Building City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-secondary text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-primary">Phone</h4>
                    <p className="text-charcoal">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-secondary text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-primary">Email</h4>
                    <p className="text-charcoal">info@civiluniverse.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClock className="text-secondary text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-primary">Business Hours</h4>
                    <p className="text-charcoal">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-charcoal">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-charcoal">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Location</h3>
              <div className="h-64 bg-gray-200 rounded-lg">
                {/* Add your map component here */}
                <div className="w-full h-full flex items-center justify-center text-charcoal">
                  Map goes here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
