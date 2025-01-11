import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <p>&copy; 2023 Civil Universe. All rights reserved.</p>
        <ul className="flex justify-center space-x-4">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;