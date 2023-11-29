import React from 'react';

interface FormProps {
  formData: any;
  setFormData: any;
}

const Form: React.FC<FormProps> = ({ formData, setFormData }) => {
  const formFields: JSX.Element[] = [];

  // Recorre las entradas del FormData y crea los campos del formulario
  for (const [key, value] of formData.entries()) {
    formFields.push(
      <div key={key}>
        <label htmlFor={key}>{key}</label>
        <input type="text" id={key} name={key} value={value} />
      </div>
    );
  }

  return (
    <form>
      {formFields}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
