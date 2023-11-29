import React from 'react';

interface ButtonProps {
    label: string;
    action: any;
}

const Button: React.FC<ButtonProps> = ({label, action}) => {
  return (
    <div>
      <button onClick={() => {action()}}>
        {label}
      </button>
    </div>
  );
};

export default Button;