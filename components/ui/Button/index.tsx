import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  onClick,
  disabled = false,
  className,
}) => {
  const baseClasses = {
    primary: 'bg-blue-500 text-white border-transparent mx-auto',
    secondary: 'bg-gray-500 text-white border-transparent',
    outline: 'bg-white text-black border-black mx-auto',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'relative overflow-hidden transition-all duration-300 border group',
        className, // This handles custom padding and other styles
        baseClasses[variant]
      )}
    >
      {/* First span: Moves up and disappears */}
      <span
        className={clsx(
          'absolute inset-0 flex items-center text-center justify-center transition-transform duration-500 ease-in-out transform',
          {
            'group-hover:-translate-y-full': variant === 'outline' || variant === 'primary',
            'translate-y-0': true,
          }
        )}
        style={{ padding: 'inherit' }} // Make sure padding is inherited from the button
      >
        {text}
      </span>

      {/* Second span: Comes from the bottom */}
      <span
        className={clsx(
          'absolute inset-0 bg-black text-white flex items-center justify-center transition-transform duration-500 ease-in-out transform translate-y-full rounded-full',
          {
            'group-hover:translate-y-0': variant === 'outline' || variant === 'primary',
          }
        )}
        style={{ padding: 'inherit' }} // Make sure padding is inherited from the button
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
