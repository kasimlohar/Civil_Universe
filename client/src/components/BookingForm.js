import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const BookingSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  date: Yup.date().min(new Date(), 'Date cannot be in the past').required('Date is required'),
  time: Yup.string().required('Time is required'),
  service: Yup.string().required('Service type is required'),
  message: Yup.string()
});

const BookingForm = ({ businessName }) => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Add your booking submission logic here
    setSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
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
                className="w-full p-2 border rounded"
                placeholder="Your Name"
              />
              {errors.name && touched.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>

            {/* Add similar blocks for email, phone, date, time, service, and message */}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
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
