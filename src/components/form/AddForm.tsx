/* AddForm.tsx */
import React, { useState } from 'react';
import Form from "./Form";
import './css/AddForm.css'; /* Importa tu archivo CSS */
import { createRow } from '../../lib/api/createRow';
import { useAuth } from '../contexts/AuthContext';
import { useDbContext } from '../contexts/dbContext';
import { useData } from '../contexts/dataContext';

interface AddFormProps {
  setIsAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formStructure?: Record<string, string>; // Cambiado a un objeto con strings
}

const AddForm: React.FC<AddFormProps> = ({ setIsAddFormOpen, formStructure }) => {
  const [formData, setFormData] = useState(formStructure || {});
  const [isEditing, setIsEditing] = useState(false);

  const { user, password } = useAuth();
  const { database, table } = useDbContext();
  const { setData } = useData();

  const createItem = async () => {
    const columns = Object.keys(formData);
    const row_content = Object.values(formData);

    if (user && password && database && table) {
      const res = await createRow(user, password, database, table, columns, row_content);
      setData(res || []);
    }
    setIsAddFormOpen(false);
  }


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
          <Form formData={formData} setFormData={setFormData} />
          <button className='submit' onClick={createItem}>Crear</button>
        </div>
      </div>
    </div>
  );
};


export default AddForm;