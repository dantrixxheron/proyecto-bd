import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import './css/table.css';
import { deleteRow } from '../lib/api/deleteRow';
import { useAuth } from './AuthContext';
import { useDbContext } from './dbContext';
import DeleteForm from './form/DeleteForm';
interface TableProps {
  data: any[];
  isOpen: boolean;
  setData?: any;
}

const Table: React.FC<TableProps> = ({ data, isOpen, setData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const { user, password } = useAuth();
  const { database, table } = useDbContext();
  const itemsPerPage = 10;
  // Show Forms
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

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

  // Toggle para mostrar/ocultar el menú
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Función para enfocar la caja de texto
  const focusTextarea = () => {
    const textarea = document.getElementById('Textarea');
    if (textarea) {
      textarea.focus();
    }
  };

  // Borrar
  // const deleteField = async (id_name: string, row_id:string) => {
  //   try {
  //     if(!user || !password || !database || !table) throw new Error("Error fetching: ");
  //     const res = await deleteRow(user, password, database, table, id_name, row_id);

  //     setData(res);
  //   } catch (e: any) {
  //     console.error("Error fetching: ", e);
  //   }
  // }
  const sure = () => {
    setDeleteOpen(!deleteOpen);
    <DeleteForm />
  }
  const showAddForm = () => {
    
  }
  // Renderizar la tabla
  return (
    <div>
      {/* Menú de operaciones CRUD */}
      <button className={`btn-toggle-menu ${isOpen ? 'open' : 'closed'}`} onClick={toggleMenu}>⁝</button>
      {showMenu && (
        <div className={`mini-menu ${isOpen ? 'open' : 'closed'}`}>
          <button className="btn-agregar" onClick={showAddForm}>Agregar</button>
          <button className="btn-modificar" onClick={focusTextarea}>Modificar</button>
          <button className="btn-eliminar" onClick={()=>sure()}>Eliminar</button>
        </div>
      )}

      <table className={`table ${(isOpen) ? 'open' : 'closed'}`}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {/* Botón para ir a la página anterior */}
        <button className={`btnAnterior ${(isOpen) ? 'open' : 'closed'}`} onClick={prevPage} disabled={currentPage === 1}> Anterior </button>
        {/* Botón para ir a la página siguiente */}
        <button className={`btnSiguiente ${(isOpen) ? 'open' : 'closed'}`} onClick={nextPage} disabled={currentPage === totalPages}> Siguiente</button>
      </div>

      {/* FORMS */}
      {deleteOpen && (
        <DeleteForm />
      )}
    </div>
  );
};

export default Table;