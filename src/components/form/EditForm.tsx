/* AddForm.tsx */
import React, { useState } from 'react';
import Form from "./Form";
import './css/AddForm.css'; /* Importa tu archivo CSS */

interface EditFormProps {
  setIsAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formStructure?: Record<string, string>; // Cambiado a un objeto con strings
  contentStructure?: Record<string, string>; // Cambiado a un objeto con strings
}

const EditForm: React.FC<EditFormProps> = ({ setIsAddFormOpen, formStructure, contentStructure }) => {
  const [formData, setFormData] = useState(formStructure || {});
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="overlay">
      <div className="add-form-container">
        <div className="add-form-header">
          <h4>Registro</h4>
          <div className="add-form-buttons">
            <button onClick={() => setIsAddFormOpen(false)}>Cerrar</button>
          </div>
        </div>
        <div>
          <Form formData={formData} setFormData={setFormData} isEditing={true} />
        </div>
      </div>
    </div>
  );
};


export default EditForm;