import React, { useState } from 'react';
import Form from "./Form"

const DeleteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id_name: null,
    row_id: null
  });
    
  return (
    <div>
      <Form formData={formData} setFormData={setFormData} />
      <button className="btn btn-danger" onClick={() => {}}>Borrar</button>
    </div>
  );
};

export default DeleteForm;