import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ label, type, register, required, errors }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...register(label.toLowerCase(), { required })} />
      {errors[label.toLowerCase()] && <p>{errors[label.toLowerCase()].message}</p>}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.string,
  errors: PropTypes.object.isRequired,
};

export default FormInput;
