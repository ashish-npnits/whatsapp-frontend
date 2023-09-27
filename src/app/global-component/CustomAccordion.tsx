import React, { useState, ReactNode } from 'react';

interface AccordionProps {
  heading: ReactNode;
  children: ReactNode;
}

const CustomAccordion: React.FC<AccordionProps> = ({ heading, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='shadow-lg shadow-gray-500/10'>
      <div className="mb-4  border border-green-600 rounded ">
        {/* Accordion Header */}
        <div
          className={`p-4 cursor-pointer`}
          onClick={toggleAccordion}
        >
          {heading}
        </div>

        {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-max-h  ${
            isActive ? 'max-h-full border-t border-green-600' : 'max-h-0'
          }`}
        >
          <div className='p-8'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
