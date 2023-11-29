import React, { useState } from 'react';
import Form from "./Form"

interface EditFormProps {
    formStructure: any;
}

const EditForm: React.FC<EditFormProps> = ({formStructure}) => {
  const [formData, setFormData] = useState({});
    
  return (
    <div>
        <h4>Editar Registro</h4>

        <div>
            <Form formData={formData} setFormData={setFormData}/>
        </div>
    </div>
  );
};

export default EditForm;