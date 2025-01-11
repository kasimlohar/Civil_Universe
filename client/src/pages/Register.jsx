import React from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../utils/axiosInstance';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      const response = await axiosInstance.post('/register', data);
      localStorage.setItem('token', response.data.token);
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="Email" type="email" register={register} required="Email is required" errors={errors} />
      <FormInput label="Password" type="password" register={register} required="Password is required" errors={errors} />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
