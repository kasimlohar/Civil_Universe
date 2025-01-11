import React from 'react';
import { useForm } from 'react-hook-form';

const BookingForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Service</label>
        <input
          type="text"
          {...register('service', { required: 'Service is required' })}
        />
        {errors.service && <p>{errors.service.message}</p>}
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          {...register('date', { required: 'Date is required' })}
        />
        {errors.date && <p>{errors.date.message}</p>}
      </div>
      <button type="submit">Book Service</button>
    </form>
  );
};

export default BookingForm;
