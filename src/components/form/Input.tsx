import React from 'react';

interface InputProps {
    label: string;
    placeholder: string;
    formData: any;
    setFormData: any;
    key: string;
}

const Input: React.FC<InputProps> = ({label, placeholder, formData, setFormData, key}) => {
  const updateData = (e: any) => {
    setFormData({...formData, [key]: e.target.value});
  };

  return (
    <div>
        <label>{label}</label>
        <input type="text" placeholder={placeholder} onChange={(e: any) => updateData(e)}/>
    </div>
  );
};

export default Input;