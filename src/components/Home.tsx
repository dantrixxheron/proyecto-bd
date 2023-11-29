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
  

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <IoArrowBack /> : <IoArrowForward />}
      </button>
      <Sidebar isOpen={isOpen} />
      <Textbox isOpen={isOpen} />
      
      {/* <Table data={} isOpen={isOpen} /> */}
    </div>
  );
}

export default Home;
