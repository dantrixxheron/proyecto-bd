// Sidebar.tsx
import React, { useState } from 'react';
import '../index.css';
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '<--' : '-->'}
      </button>
      {/* Agrega aquí el contenido de tu barra lateral */}
    </div>
  );
};

export default Sidebar;