import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Textbox from './Textbox';
import Table from './Table';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Datos de ejemplo para la tabla
  const tableData = [
    { id: 1, nombre: 'John', años: 25 },
    { id: 2, nombre: 'Jane', años: 30 },
    { id: 3, nombre: 'Bob', años: 22 },
    { id: 4, nombre: 'Alice', años: 28 },
    { id: 5, nombre: 'Charlie', años: 35 },
    { id: 6, nombre: 'Diana', años: 29 },
    { id: 7, nombre: 'Eva', años: 26 },
    { id: 8, nombre: 'Frank', años: 32 },
    { id: 9, nombre: 'Grace', años: 31 },
    { id: 10, nombre: 'Henry', años: 27 },
    { id: 11, nombre: 'Michael', años: 20 },
    { id: 12, nombre: 'Jane', años: 30 },
    { id: 13, nombre: 'Marylin', años: 22 },
    { id: 14, nombre: 'Alice', años: 28 },
    { id: 15, nombre: 'Caroline', años: 35 },
    { id: 16, nombre: 'Diane', años: 29 },
    { id: 17, nombre: 'Sofia', años: 22 },
    { id: 18, nombre: 'Zoe', años: 28 },
    { id: 19, nombre: 'Charlie', años: 35 },
    { id: 20, nombre: 'Charlott', años: 29 },
  ];
  

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <IoArrowBack /> : <IoArrowForward />}
      </button>
      <Sidebar isOpen={isOpen} />
      <Textbox isOpen={isOpen} />
      
      <Table data={tableData} isOpen={isOpen} />
    </div>
  );
}

export default Home;
