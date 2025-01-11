import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHardHat, 
  FaPaintRoller, 
  FaDraftingCompass, 
  FaTools,
  FaHome,
  FaRuler 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Construction',
      icon: <FaHardHat className="text-5xl text-secondary mb-4" />,
      description: 'Full-scale construction services for residential and commercial projects',
      features: ['New Construction', 'Remodeling', 'Project Management', 'Site Planning'],
      link: '/services/construction'
    },
    {
      id: 2,
      title: 'Renovation',
      icon: <FaPaintRoller className="text-5xl text-secondary mb-4" />,
      description: 'Transform your space with our expert renovation services',
      features: ['Interior Renovation', 'Exterior Updates', 'Kitchen & Bath', 'Basement Finishing'],
      link: '/services/renovation'
    },
    {
      id: 3,
      title: 'Architecture & Design',
      icon: <FaDraftingCompass className="text-5xl text-secondary mb-4" />,
      description: 'Professional architectural design and planning services',
      features: ['Custom Design', 'Blueprint Creation', '3D Modeling', 'Permit Processing'],
      link: '/services/design'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive construction and design solutions for every project
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-charcoal mb-6">{service.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-charcoal">
                      <FaTools className="text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="block text-center bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaHome />, title: 'Consultation' },
              { icon: <FaDraftingCompass />, title: 'Planning' },
              { icon: <FaRuler />, title: 'Execution' },
              { icon: <FaTools />, title: 'Delivery' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.cloneElement(step.icon, { className: 'text-white text-2xl' })}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-secondary"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="mb-8 text-lg">Connect with our professionals today</p>
          <Link
            to="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
