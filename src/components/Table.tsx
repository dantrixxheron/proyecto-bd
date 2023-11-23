import React from 'react';
import './css/table.css';

interface TableProps {
  data: any[];
  isOpen: boolean;
}

const Table: React.FC<TableProps> = ({ data, isOpen }) => {
  if (data.length === 0) {
    return <div className={`null ${(isOpen)? 'open': 'closed'}`}>No hay datos disponibles.</div>;
  }

  const headers = Object.keys(data[0]);

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
    </div>
  );
};

export default Table;
