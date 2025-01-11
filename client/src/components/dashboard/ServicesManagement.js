import React, { useState } from 'react';
import { FaEdit, FaTrash, FaDollarSign, FaClock } from 'react-icons/fa';

const ServicesManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Construction Consultation',
      description: 'Professional consultation for construction projects',
      price: 100,
      duration: '1 hour',
      category: 'Consultation',
      status: 'active',
    },
    // Add more sample services
  ]);

  const ServiceForm = ({ service, onSubmit, onCancel }) => (
    <div className="bg-background p-6 rounded-lg mb-6">
      <h3 className="text-xl font-semibold text-primary mb-4">
        {service ? 'Edit Service' : 'Add New Service'}
      </h3>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">
            Service Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-warm-gray rounded-lg"
            defaultValue={service?.name || ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">
            Description
          </label>
          <textarea
            className="w-full p-2 border border-warm-gray rounded-lg"
            rows="3"
            defaultValue={service?.description || ''}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Price
            </label>
            <div className="relative">
              <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-green" />
              <input
                type="number"
                className="w-full pl-8 p-2 border border-warm-gray rounded-lg"
                defaultValue={service?.price || ''}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Duration
            </label>
            <div className="relative">
              <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-green" />
              <input
                type="text"
                className="w-full pl-8 p-2 border border-warm-gray rounded-lg"
                defaultValue={service?.duration || ''}
                placeholder="e.g., 1 hour"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-warm-gray text-charcoal rounded-lg hover:bg-background"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary"
          >
            {service ? 'Update Service' : 'Add Service'}
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Services Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
        >
          Add New Service
        </button>
      </div>

      {showAddForm && (
        <ServiceForm
          onSubmit={() => {
            // Add service logic here
            setShowAddForm(false);
          }}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="p-4 bg-white shadow rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  {service.name}
                </h3>
                <p className="text-muted-green mt-1">{service.description}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center text-charcoal">
                    <FaDollarSign className="mr-1" />
                    {service.price}
                  </span>
                  <span className="flex items-center text-charcoal">
                    <FaClock className="mr-1" />
                    {service.duration}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="p-2 text-secondary hover:text-primary transition-colors"
                  onClick={() => {
                    /* Edit logic */
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  className="p-2 text-red-500 hover:text-red-600 transition-colors"
                  onClick={() => {
                    /* Delete logic */
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesManagement;
