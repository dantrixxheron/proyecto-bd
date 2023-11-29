import React, { useState } from 'react';
import Form from "./Form"

interface AddFormProps {
    formStructure: any;
}

const AddForm: React.FC<AddFormProps> = ({formStructure}) => {
  const [formData, setFormData] = useState({});
    
  return (
    <div>
        <h4>Agregar Registro</h4>

        <div>
            <Form formData={formData} setFormData={setFormData}/>
        </div>
    </div>
  );
};

export default AddForm;