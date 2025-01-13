import React, { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import Toast from '../common/Toast';

const ServiceManagement = ({ businessId }) => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    category: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchServices();
  }, [businessId]);

  const fetchServices = async () => {
    try {
      const response = await axiosInstance.get(`/services/business/${businessId}`);
      setServices(response.data);
    } catch (error) {
      showToast('error', 'Failed to fetch services');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axiosInstance.put(`/services/${editingId}`, newService);
        showToast('success', 'Service updated successfully');
      } else {
        await axiosInstance.post('/services', { ...newService, businessId });
        showToast('success', 'Service added successfully');
      }
      fetchServices();
      resetForm();
    } catch (error) {
      showToast('error', error.message);
    }
  };

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  const resetForm = () => {
    setNewService({
      name: '',
      description: '',
      price: '',
      duration: '',
      category: ''
    });
    setIsEditing(false);
    setEditingId(null);
  };

return (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Manage Services</h2>
        
        {/* Service Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
            {/* Form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {Object.keys(newService).map(key => (
                    <div key={key}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                        <input
                            type={key === 'price' ? 'number' : 'text'}
                            value={newService[key]}
                            onChange={(e) => setNewService({...newService, [key]: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-end gap-2">
                {isEditing && (
                    <button
                        type="button"
                        onClick={resetForm}
                        className="px-4 py-2 bg-gray-200 rounded"
                    >
                        Cancel
                    </button>
                )}
                <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded"
                >
                    {isEditing ? 'Update' : 'Add'} Service
                </button>
            </div>
        </form>

        {/* Services List */}
        <div className="bg-white rounded-lg shadow">
            <div className="grid grid-cols-1 divide-y">
                {services.map(service => (
                    <div key={service.id} className="p-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold">{service.name}</h3>
                                <p className="text-gray-600">{service.description}</p>
                                <p className="text-sm text-gray-500">
                                    Duration: {service.duration} • Price: ${service.price}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        setNewService(service);
                                        setIsEditing(true);
                                        setEditingId(service.id);
                                    }}
                                    className="text-primary hover:text-primary/80"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={async () => {
                                        try {
                                            await axiosInstance.delete(`/services/${service.id}`);
                                            fetchServices();
                                            showToast('success', 'Service deleted successfully');
                                        } catch (error) {
                                            showToast('error', 'Failed to delete service');
                                        }
                                    }}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {toast && (
            <Toast
                type={toast.type}
                message={toast.message}
                onClose={() => setToast(null)}
            />
        )}
    </div>
);
};
