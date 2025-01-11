import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    // Add password reset logic here
    console.log(values);
    setIsEmailSent(true);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Reset Password</h2>
          <p className="mt-2 text-muted-green">
            Enter your email to receive password reset instructions
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {!isEmailSent ? (
            <Formik
              initialValues={{ email: '' }}
              validationSchema={ForgotPasswordSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label className="block text-charcoal font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-green" />
                      <Field
                        type="email"
                        name="email"
                        className="w-full pl-10 pr-4 py-2 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </Form>
              )}
            </Formik>
          ) : (
            <div className="text-center">
              <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Email Sent!</h3>
              <p className="text-charcoal mb-6">
                Please check your email for password reset instructions.
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link to="/login" className="text-secondary hover:text-primary">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
