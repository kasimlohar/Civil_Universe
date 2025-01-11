import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // Add login logic here
    console.log(values);
    setSubmitting(false);
    navigate('/dashboard'); // Use navigate for redirection
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Welcome Back</h2>
          <p className="mt-2 text-muted-green">Sign in to your account</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    Email
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

                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-green" />
                    <Field
                      type="password"
                      name="password"
                      className="w-full pl-10 pr-4 py-2 border border-warm-gray rounded-lg focus:outline-none focus:border-primary"
                      placeholder="Enter your password"
                    />
                  </div>
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-warm-gray rounded"
                    />
                    <label className="ml-2 block text-charcoal">Remember me</label>
                  </div>
                  <Link to="/forgot-password" className="text-secondary hover:text-primary">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Signing in...' : 'Sign In'}
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-warm-gray"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-muted-green">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex justify-center items-center py-2 px-4 border border-warm-gray rounded-lg hover:bg-background transition-colors">
                <FaGoogle className="text-[#DB4437] mr-2" />
                Google
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-warm-gray rounded-lg hover:bg-background transition-colors">
                <FaFacebook className="text-[#4267B2] mr-2" />
                Facebook
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-charcoal">
            Don't have an account?{' '}
            <Link to="/register" className="text-secondary hover:text-primary font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
