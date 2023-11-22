import React, { useState } from 'react';
import './css/textbox.css';

const Textbox: React.FC = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleExecuteQuery = () => {
    try {
      // Validar que la caja de texto no esté en blanco
      if (!query.trim()) {
        throw new Error('Por favor, ingrese una consulta SQL.');
      }

      //Mensajes: error
      validateSqlQuery(query);
    } catch (err) {
    const error = err instanceof Error ? err.message : 'Error desconocido';
    alert(`Error al ejecutar la consulta: ${error}`);
  }
  };

  const validateSqlQuery = (sqlQuery: string) => {
    const forbiddenKeywords = ['DROP', 'DELETE', 'UPDATE']; // Claves prohibidas
    const mandatoryClauses = ['SELECT', 'FROM']; // Sintaxis obligatoria
    const optionalClauses = ['WHERE', 'GROUP BY', 'HAVING', 'ORDER BY', 'LIMIT']; // Sintaxis opcional

    // Verificar que la consulta termine con punto y coma
    if (!sqlQuery.trim().endsWith(';')) {
      throw new Error('La consulta debe finalizar con punto y coma.');
    }

    // Verificar que no tenga claves prohibidas
    forbiddenKeywords.forEach(keyword => {
      if (sqlQuery.toUpperCase().includes(keyword)) {
        throw new Error(`Palabra clave prohibida: ${keyword}`);
      }
    });

    // Validar el orden de las cláusulas SQL
    let lastClauseIndex = -1;
    let afterMandatory = false;
    let groupByFound = false; // Encuentra la clausula "GROUP BY"

    mandatoryClauses.forEach(clause => {
      const index = sqlQuery.toUpperCase().indexOf(clause);
      if (index === -1 || index < lastClauseIndex) {
        throw new Error(`La cláusula "${clause}" es obligatoria.`);
      }
      lastClauseIndex = index + clause.length;
      afterMandatory = true;

      if (clause === 'FROM') {
        groupByFound = false;
      }
    });

    // Validar las cláusulas opcionales después de las obligatorias
    optionalClauses.forEach(clause => {
      const index = sqlQuery.toUpperCase().indexOf(clause);

      if (index !== -1) {
        if (!afterMandatory || index < lastClauseIndex) {
          throw new Error(`La cláusula "${clause}" está fuera de orden.`);
        }

        // Validar que "HAVING" solo aparezca si antes esta "GROUP BY"
        if (clause === 'HAVING' && !groupByFound) {
          throw new Error(`"HAVING" requiere la cláusula "GROUP BY".`);
        }

        // Actualizar la variable si se encuentra "GROUP BY"
        if (clause === 'GROUP BY') {
          groupByFound = true;
        }

        lastClauseIndex = index + clause.length;
        afterMandatory = true;
      }
    });
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newQuery = event.target.value;
    const lastCharacter = newQuery.charAt(newQuery.length - 1);

      // Verificar si el último carácter es punto y coma (;)
    if (lastCharacter === ';') {
      setQuery(newQuery.substring(0, newQuery.indexOf(';') + 1));
    } else {
      setQuery(newQuery);
    }

    setError(null); //Limpiar mensaje de error
  };

  return (
    <div>
      <textarea className='textarea' value={query} onChange={handleQueryChange} />
      <button className='runbutton' onClick={handleExecuteQuery}>
        Ejecutar
      </button>

      {error && <div className='error-message'>{error}</div>}
    </div>
  );
};

export default Textbox;