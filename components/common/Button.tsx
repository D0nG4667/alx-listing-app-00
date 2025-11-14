import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  ariaLabel,
}) => {
  const baseStyle =
    'px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  } as const;

  type VariantKey = keyof typeof variantStyles;
  const variantKey: VariantKey = variant as VariantKey;
  const variantClass = variantStyles[variantKey];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantClass} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      aria-label={ariaLabel} // Optional descriptive label
    >
      {label}
    </button>
  );
};

export default Button;
