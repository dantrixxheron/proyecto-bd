
import React, { useState } from 'react';

const Textbox: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleExecuteQuery = () => {
    // Aquí puedes agregar la lógica para enviar la consulta a la API
    // Sin embargo, como mencionaste que tus compañeros de trabajo de backend se encargarán de esto,
    // simplemente dejaremos esta función vacía por ahora.
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
