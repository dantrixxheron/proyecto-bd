import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Textbox from './Textbox';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Table from './Table';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const testData = [
    {nombre: 'Juan', apellido: 'Perez', edad: 25},
    {nombre: 'Maria', apellido: 'Gomez', edad: 30},
    {nombre: 'Jose', apellido: 'Gonzalez', edad: 45},
  ];

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <IoArrowBack /> : <IoArrowForward />}
      </button>
      <Sidebar isOpen={isOpen} />
      <Textbox isOpen={isOpen} />
      <Table data={testData} isOpen={isOpen}/>
    </div>
  );
}

export default Home;