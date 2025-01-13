import React from 'react';

const FormGenerator = ({ 
  fields, 
  values, 
  onChange, 
  onSubmit, 
  validationSchema,
  submitText = 'Submit' 
}) => {
  const renderField = (field) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: values[field.name] || '',
      onChange: (e) => onChange(field.name, e.target.value),
      className: "w-full p-2 border rounded focus:ring-2 focus:ring-primary",
      placeholder: field.placeholder,
      required: field.required
    };

    switch (field.type) {
      case 'textarea':
        return <textarea {...commonProps} rows={4} />;
      case 'select':
        return (
          <select {...commonProps}>
            {field.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return <input type={field.type} {...commonProps} />;
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {fields.map(field => (
        <div key={field.name} className="space-y-1">
          <label className="block text-sm font-medium">
            {field.label}
          </label>
          {renderField(field)}
          {field.error && (
            <p className="text-red-500 text-sm">{field.error}</p>
          )}
        </div>
      ))}
      
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
      >
        {submitText}
      </button>
    </form>
  );
};

export default FormGenerator;
