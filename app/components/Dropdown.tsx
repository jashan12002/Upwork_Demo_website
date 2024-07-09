
import React from 'react';

const DropdownMenu: React.FC = () => {
  return (
    <ul className="absolute mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <li className="px-4 py-2 hover:bg-gray-200">Evacuation</li>
      <li className="px-4 py-2 hover:bg-gray-200">Shipyard</li>
      <li className="px-4 py-2 hover:bg-gray-200">Another Item</li>
    </ul>
  );
};

export default DropdownMenu;
