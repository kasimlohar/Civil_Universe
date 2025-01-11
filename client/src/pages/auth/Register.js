import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  phone: Yup.string().required('Phone number is required'),
  userType: Yup.string().required('Please select user type')
});

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Create Account</h2>
          <p className="mt-2 text-muted-green">Join Civil Universe today</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
              phone: '',
              userType: 'client'
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-green" />
                      <Field
                        name="fullName"
                        className="w-full pl-10 pr-4 py-2 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                        placeholder="John Doe"
                      />
                      {errors.fullName && touched.fullName && (
                        <div className="text-red-500 text-sm mt-1">{errors.fullName}</div>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Email</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-green" />
                      <Field
                        type="email"
                        name="email"
                        className="w-full pl-10 pr-4 py-2 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                        placeholder="john@example.com"
                      />
                      {errors.email && touched.email && (
                        <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Phone</label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-green" />
                      <Field
                        type="tel"
                        name="phone"
                        className="w-full pl-10 pr-4 py-2 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                        placeholder="(123) 456-7890"
                      />
                      {errors.phone && touched.phone && (
                        <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                      )}
                    </div>
                  </div>

                  {/* User Type */}
                  <div>
                    <label className="block text-charcoal font-medium mb-2">I am a</label>
                    <Field
                      as="select"
                      name="userType"
                      className="w-full pl-4 pr-4 py-2 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="client">Client</option>
                      <option value="business">Business Owner</option>
                    </Field>
                    {errors.userType && touched.userType && (
                      <div className="text-red-500 text-sm mt-1">{errors.userType}</div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-primary text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </button>
              </Form>
            )}
          </Formik>

          <p className="mt-8 text-center text-charcoal">
            Already have an account?{' '}
            <Link to="/login" className="text-secondary hover:text-primary font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
