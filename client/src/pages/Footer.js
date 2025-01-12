import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Civil Universe</h3>
            <p className="text-warm-gray mb-4">
            Connecting you with trusted professionals for all your construction and design needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-warm-gray hover:text-secondary transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-warm-gray hover:text-secondary transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-warm-gray hover:text-secondary transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-warm-gray hover:text-secondary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-warm-gray hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-warm-gray hover:text-secondary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/business-listings" className="text-warm-gray hover:text-secondary transition-colors">
                  Find Professionals
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-warm-gray hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/construction" className="text-warm-gray hover:text-secondary transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/services/renovation" className="text-warm-gray hover:text-secondary transition-colors">
                  Renovation
                </Link>
              </li>
              <li>
                <Link to="/services/design" className="text-warm-gray hover:text-secondary transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/services/consultation" className="text-warm-gray hover:text-secondary transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center text-warm-gray">
                <FaMapMarkerAlt className="mr-2" />
                Dhule, Maharashtra, India, 424001
              </p>
              <p className="flex items-center text-warm-gray">
                <FaPhone className="mr-2" />
                +91 123-456-7890
              </p>
              <p className="flex items-center text-warm-gray">
                <FaEnvelope className="mr-2" />
                info@civiluniverse.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-gray/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-warm-gray text-sm">
              © {new Date().getFullYear()} Civil Universe. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-warm-gray hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-warm-gray hover:text-secondary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
