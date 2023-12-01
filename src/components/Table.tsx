import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import './css/table.css';
import { useAuth } from './contexts/AuthContext';
import DeleteForm from './form/DeleteForm';
import AddForm from './form/AddForm';
import EditForm from './form/EditForm';
import { useData } from './contexts/dataContext';

interface TableProps {
  isOpen: boolean;
}

const Table: React.FC<TableProps> = ({ isOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const { user, password } = useAuth();
  const itemsPerPage = 10;
  const { data } = useData();
  // Show Forms
  const [addOpen, setAddOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
  const [idName, setIdName] = useState('');
  const [rowId, setRowId] = useState('');
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

  const sure = () => {
    setIsDeleteFormOpen(true);
  }

  const closeDeleteForm = () => {
    setIsDeleteFormOpen(false);
  }
  const showAddForm = () => {
    setIsAddFormOpen(true); // Cambia el estado para mostrar el formulario de agregar
  };


  const handleUpdate = () => {
    const id_name = (prompt(`Campo a buscar:`));
    const row_id = (prompt(`Contenido del campo:`));

    setIdName(id_name || '');
    setRowId(row_id || '');
    setEditOpen(true);
  }

  // Renderizar la tabla
  return (
    <div>
      {/* Menú de operaciones CRUD */}
      <button className={`btn-toggle-menu ${isOpen ? 'open' : 'closed'}`} onClick={toggleMenu}>⁝</button>
      {showMenu && (
        <div className={`mini-menu ${isOpen ? 'open' : 'closed'}`}>
          <button className="btn-agregar" onClick={showAddForm}>Agregar</button>
          <button className="btn-modificar" onClick={handleUpdate}>Modificar</button>
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
      {isDeleteFormOpen && (
        <DeleteForm closeDeleteForm={closeDeleteForm} />
      )}
      {isAddFormOpen && (
        <AddForm setIsAddFormOpen={setIsAddFormOpen} formStructure={headers.reduce((acc, header) => ({ ...acc, [header]: '' }), {})} />
      )}
      {
        editOpen && (
          <EditForm setIsAddFormOpen={setEditOpen} formStructure={headers.reduce((acc, header) => ({ ...acc, [header]: '' }), {})} idName={idName} rowId={rowId} />
        )}
    </div>
  );
};

export default Table;