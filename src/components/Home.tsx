import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Textbox from './Textbox';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <IoArrowBack /> : <IoArrowForward />}
      </button>
      <Sidebar isOpen={isOpen} />
      <Textbox isOpen={isOpen} />
      {/* <Consulta /> */}
    </div>
  );
}

export default Home;