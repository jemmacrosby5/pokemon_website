import React, { useState } from 'react';
import caretUpSVG from '../assets/caret-up.svg'
import caretDownSVG from '../assets/caret-down.svg'

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [caretUp, setCaretUp] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    setCaretUp(!caretUp)
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className='text-xl p-2'
      >
        <div className='flex items-center gap-1'>
          {title}
          {caretUp ? <img src={caretUpSVG} className='h-5'/> : <img src={caretDownSVG} className='h-5'/>}
        </div>

      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
