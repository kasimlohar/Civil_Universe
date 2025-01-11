import React from 'react';
import { FaUsers, FaHandshake, FaLightbulb, FaChartLine } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
      bio: 'Civil engineer with 15+ years of experience in construction management.'
    },
    // Add more team members
  ];

  const values = [
    {
      icon: <FaUsers className="text-4xl text-secondary" />,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above all else.'
    },
    {
      icon: <FaHandshake className="text-4xl text-secondary" />,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through transparent and reliable service.'
    },
    {
      icon: <FaLightbulb className="text-4xl text-secondary" />,
      title: 'Innovation',
      description: 'Embracing new technologies and methods to improve construction services.'
    },
    {
      icon: <FaChartLine className="text-4xl text-secondary" />,
      title: 'Growth',
      description: 'Committed to continuous improvement and industry leadership.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Civil Universe</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Connecting construction professionals with clients to build a better future together.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Our Story</h2>
            <p className="text-lg text-charcoal mb-6">
              Founded in 2023, Civil Universe emerged from a vision to transform how construction
              services are discovered and delivered. We recognized the need for a platform that
              seamlessly connects skilled professionals with clients seeking quality construction
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-charcoal">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-secondary mb-2">{member.role}</p>
                <p className="text-charcoal">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
