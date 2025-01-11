import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ label, type, register, required, errors }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type={type} {...register(label.toLowerCase(), { required })} className="input-field" />
      {errors[label.toLowerCase()] && <p className="error-message">{errors[label.toLowerCase()].message}</p>}
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
