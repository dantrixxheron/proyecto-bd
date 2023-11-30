// Form.tsx
import React from 'react';
import './css/form.css';

interface FormProps {
  formData: Record<string, string>; // Cambiado a un objeto con strings
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  isEditing?: boolean;
}

const Form: React.FC<FormProps> = ({ formData, setFormData, isEditing = false }) => {
  const formFields: JSX.Element[] = [];

  // Recorre las entradas del FormData y crea los campos del formulario
  for (const [key, value] of Object.entries(formData)) {
    // Si se está editando, permitir editar los valores existentes
    const inputValue = isEditing ? value : '';

    formFields.push(
      <div key={key}>
        <label htmlFor={key}>{key}</label>
        <input
          type="text"
          id={key}
          name={key}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
        />
      </div>
    );
  }

  return (
    <form>
      {formFields}
      <button className='submit'>{isEditing ? 'Actualizar' : 'Enviar'}</button>
    </form>
  );
};

export default Form;