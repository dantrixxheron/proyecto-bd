import React, { useState } from 'react';
import './css/table.css';

interface TableProps {
  data: any[];
  isOpen: boolean;
}

const Table: React.FC<TableProps> = ({ data, isOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (data.length === 0) {
    return <div className={`null ${(isOpen) ? 'open' : 'closed'}`}>No hay datos disponibles.</div>;
  }

  const headers = Object.keys(data[0]);

  // Calcular el rango de elementos a mostrar en la tabla (10)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular el número total de páginas (tablas)
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Avanzar a la siguiente página
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Retroceder a la página anterior
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Renderizar la tabla
  return (
    <div>
    <table className={`table ${(isOpen)? 'open': 'closed'}`}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    //PENDIENTE
    <div>
        {/* Botón para ir a la página anterior */}
        <button className={`button ${(isOpen) ? 'open' : 'closed'}`} onClick={prevPage} disabled={currentPage === 1}> Anterior </button>

        {/* Botón para ir a la página siguiente */}
        <button className={`button ${(isOpen) ? 'open' : 'closed'}`} onClick={nextPage} disabled={currentPage === totalPages}> Siguiente</button>
      </div>
    </div>
  );
};

export default Table;
