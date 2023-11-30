import React, { useState } from 'react';
import './css/deleteForm.css';
import { deleteRow } from '../../lib/api/deleteRow';
import { useAuth } from '../AuthContext';
import { useDbContext } from '../dbContext';
interface DeleteFormProps {
  closeDeleteForm: () => void;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ closeDeleteForm }) => {
  const { user, password } = useAuth();
  const { database, table } = useDbContext();
  const [data, setData] = useState<any>([]);
  const [formData, setFormData] = useState({
    id_name: '',
    row_id: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async () => {
    /******************NO FUNCIONA**********************/
    try {
          if(!user || !password || !database || !table) throw new Error("Error fetching: ");
          const res = await deleteRow(user, password, database, table, formData.id_name, formData.row_id);
          setData(res);
        } catch (e: any) {
          console.error("Error fetching: ", e);
      }
    closeDeleteForm();
  };

  return (
    <div className="delete-form-overlay">
      <div className="delete-form">
        <h2>Delete Row</h2>
        <label htmlFor="id_name">Campo a buscar:</label>
        <input
          type="text"
          id="id_name"
          name="id_name"
          value={formData.id_name}
          onChange={handleInputChange}
        />
        <label htmlFor="row_id">Contenido del campo:</label>
        <input
          type="text"
          id="row_id"
          name="row_id"
          value={formData.row_id}
          onChange={handleInputChange}
        />
        <div className="delete-form-buttons">
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={closeDeleteForm}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
