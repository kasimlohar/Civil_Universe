import React from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../utils/axiosInstance';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      const response = await axiosInstance.post('/login', data);
      localStorage.setItem('token', response.data.token);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="Email" type="email" register={register} required="Email is required" errors={errors} />
      <FormInput label="Password" type="password" register={register} required="Password is required" errors={errors} />
      <FormInput label="Username" type="text" register={register} required="Username is required" errors={errors} />
      <FormInput label="Phone Number" type="tel" register={register} required="Phone number is required" errors={errors} />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
