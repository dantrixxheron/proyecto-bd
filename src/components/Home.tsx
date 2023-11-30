import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Textbox from './Textbox';
import Table from './Table';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useData } from './contexts/dataContext';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { data, setData } = useData();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <IoArrowBack /> : <IoArrowForward />}
      </button>
      <Sidebar isOpen={isOpen} setData={setData} />
      <Textbox isOpen={isOpen} />
      {
        (data && data.length > 0) &&
        <Table isOpen={isOpen}/>
      }
    </div>
    );
}

export default Home;
