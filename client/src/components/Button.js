import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, children, onClick }) => {
  return <button type={type} onClick={onClick} className="button">{children}</button>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
