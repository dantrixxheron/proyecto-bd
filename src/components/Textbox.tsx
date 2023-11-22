
import React, { useState } from 'react';
import './css/textbox.css';

const Textbox: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleExecuteQuery = () => {
    
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <textarea className='textarea' value={query} onChange={handleQueryChange} />
      <button className='runbutton' onClick={handleExecuteQuery}>Ejecutar</button>
    </div>
  );
};

export default Textbox;
