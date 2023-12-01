/* AddForm.tsx */
import React, { useEffect, useState } from 'react';
import Form from "./Form";
import './css/AddForm.css'; /* Importa tu archivo CSS */
import { updateRow } from '../../lib/api/updateRow';
import { useAuth } from '../contexts/AuthContext';
import { useDbContext } from '../contexts/dbContext';
import { useData } from '../contexts/dataContext';
import { getRowInfo } from '../../lib/api/getRowInfo';

interface EditFormProps {
  setIsAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formStructure?: Record<string, string>; // Cambiado a un objeto con strings
  contentStructure?: Record<string, string>; // Cambiado a un objeto con strings
  idName?: string;
  rowId?: string;
}

const EditForm: React.FC<EditFormProps> = ({ setIsAddFormOpen, formStructure, idName, rowId }) => {
  const [formData, setFormData] = useState(formStructure || {});
  const [isEditing, setIsEditing] = useState(false);
  const { user, password } = useAuth();
  const { database, table } = useDbContext();
  const { setData } = useData();


  useEffect(() => {
    const fetchData = async () => {
      if (user && password && database && table && idName && rowId) {
        const res = await getRowInfo(user, password, database, table, idName, rowId);
        
        console.log(res);
        setFormData(res || {});
      }
    }

    fetchData();
  }, [])

  const updateText = async () => {

    if (user && password && database && table && idName && rowId) {
      const columns = Object.keys(formData);
      const row_content = Object.values(formData);

      const res = await updateRow(user, password, database, table, columns, row_content, idName, rowId);
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
          <Form formData={formData} setFormData={setFormData}/>
          <button className='submit' onClick={updateText}>Editar</button>
        </div>
      </div>
    </div>
  );
};


export default EditForm;