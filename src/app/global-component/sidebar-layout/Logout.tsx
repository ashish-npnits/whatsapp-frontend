'use client'
import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';

const Logout = (props:any) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="relative inline-block">
      <MoreVertical size={20} onClick={handleClick} />
      {props.expanded && isClicked && (
        <div
          className={`
            absolute rounded-md p-2
            bg-indigo-100 text-indigo-800 text-sm
            opacity-100 transition-all
            z-50
          `}
          style={{ left: '100%', top: '-100px' }}
        >
          {/* Add your additional content here */}
          Additional Content
        </div>
      )}
    </div>
  );
};

export default Logout;
