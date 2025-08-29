import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../utils/axiosInstance';
import Toast from './common/Toast';

const BookingSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  date: Yup.date().min(new Date(), 'Date cannot be in the past').required('Date is required'),
  time: Yup.string().required('Time is required'),
  service: Yup.string().required('Service type is required'),
  message: Yup.string()
});

const BookingForm = ({ businessName, businessId }) => {
  const [toast, setToast] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const bookingData = {
        ...values,
        businessId,
        businessName
      };
      
      const response = await axiosInstance.post('/bookings', bookingData);
      
      setToast({
        type: 'success',
        message: 'Booking submitted successfully! You will receive a confirmation email.'
      });
      
      setBookingSuccess(true);
      resetForm();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setBookingSuccess(false);
      }, 5000);
      
    } catch (error) {
      setToast({
        type: 'error',
        message: error.response?.data?.message || 'Failed to submit booking. Please try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (bookingSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-green-50 rounded-lg shadow-md text-center">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h2 className="text-2xl font-bold text-green-800 mb-2">Booking Confirmed!</h2>
        <p className="text-green-700 mb-4">
          Your booking request has been submitted successfully. 
          {businessName} will contact you shortly to confirm your appointment.
        </p>
        <button 
          onClick={() => setBookingSuccess(false)}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Book Another Service
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      
      <h2 className="text-2xl font-bold mb-6">Book Service with {businessName}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <Field
                name="name"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
              {errors.name && touched.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <Field
                name="phone"
                type="tel"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="(555) 123-4567"
              />
              {errors.phone && touched.phone && (
                <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Preferred Date</label>
              <Field
                name="date"
                type="date"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && touched.date && (
                <div className="text-red-500 text-sm mt-1">{errors.date}</div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Preferred Time</label>
              <Field
                name="time"
                as="select"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </Field>
              {errors.time && touched.time && (
                <div className="text-red-500 text-sm mt-1">{errors.time}</div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Service Type</label>
              <Field
                name="service"
                as="select"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option value="Consultation">Consultation</option>
                <option value="Project Planning">Project Planning</option>
                <option value="Design Services">Design Services</option>
                <option value="Construction">Construction</option>
                <option value="Inspection">Inspection</option>
                <option value="Other">Other</option>
              </Field>
              {errors.service && touched.service && (
                <div className="text-red-500 text-sm mt-1">{errors.service}</div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message (Optional)</label>
              <Field
                name="message"
                as="textarea"
                rows="4"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Please describe your project or any specific requirements..."
              />
              {errors.message && touched.message && (
                <div className="text-red-500 text-sm mt-1">{errors.message}</div>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Book Now'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
