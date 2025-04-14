'use client'
import clsx from 'clsx';
import React, { useState } from 'react';

interface CheckButtonProps {
  title: string;
  name: string;
  value: string;
  onCheck?: (checked: boolean) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // This will handle the form logic
  className?: string;
}

const CheckBox: React.FC<CheckButtonProps> = ({ title, name, value, onCheck, onChange, className }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked); // Update the visual state based on input change

    // Trigger the form logic
    onChange(e);

    // Call onCheck if provided (optional)
    if (onCheck) {
      onCheck(e.target.checked);
    }
  };

  return (
    <label
      className={clsx(
        className, 
        `flex items-center p-3 px-4 md:p-8 rounded-full border transition-colors duration-300 ease-in-out cursor-pointer w-fit`,
        isChecked ? 'border-black bg-transparent' : 'border-gray-200'
      )}
    >
      {/* Hidden checkbox input */}
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked} // Controlled by state
        onChange={handleChange} // Handle the form logic and visual state update
        className="hidden"
      />

      {/* Custom square box */}
      <div
        className={`w-4 h-4 md:w-5 md:h-5 border mr-2 md:mr-3 ${
          isChecked ? 'bg-black' : 'bg-white'
        } border-gray-400`}
      ></div>
      
      {/* Title */}
      <span className="text-gray-800 font-helveticaNowDisplayRegular font-medium text-start leading-5 text-sm md:text-base">{title}</span>
    </label>
  );
};

export default CheckBox;
