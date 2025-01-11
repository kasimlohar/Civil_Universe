import React from 'react';

const BusinessProfile = ({ name, description, services, contactInfo }) => {
  return (
    <div className="business-profile">
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <h2>Contact Info</h2>
      <p>{contactInfo}</p>
    </div>
  );
};

export default BusinessProfile;
