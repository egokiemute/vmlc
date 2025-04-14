import React from 'react';
import clsx from 'clsx';

interface AlertComponentProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void; // A function to close the alert
}

const AlertComponent: React.FC<AlertComponentProps> = ({ message, type, onClose }) => {
  return (
    <div
      className={clsx(
        'fixed top-4 right-4 p-4 rounded shadow-md transition-opacity duration-300',
        {
          'bg-green-500 text-white': type === 'success',
          'bg-red-500 text-white': type === 'error',
        }
      )}
    >
      <div className="flex justify-between items-center">
        <span className='font-baseneue'>{message}</span>
        <button onClick={onClose} className="ml-4 font-bold text-2xl font-helveticaNowDisplayRegular">X</button>
      </div>
    </div>
  );
};

export default AlertComponent;
