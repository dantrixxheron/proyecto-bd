import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Textbox from './Textbox';
import Table from './Table';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import AddForm from './form/AddForm';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [datas, setDatas] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <IoArrowBack /> : <IoArrowForward />}
      </button>
      <Sidebar isOpen={isOpen} />
      <Textbox isOpen={isOpen} setData={setDatas} />
      <Table data={datas} isOpen={isOpen} setData={setDatas} />
    </div>
    );
}

export default Home;
