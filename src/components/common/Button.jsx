import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-widest text-xs uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-xs font-medium tracking-[0.25em]',
  };

  const variantStyles = {
    primary: 'bg-[#1F1B18] text-[#FAF7F2] border border-[#1F1B18] hover:bg-[#FAF7F2] hover:text-[#1F1B18] hover:border-[#1F1B18] shadow-sm',
    secondary: 'bg-transparent text-[#FAF7F2] border border-[#FAF7F2]/60 hover:bg-[#FAF7F2] hover:text-[#1F1B18] hover:border-[#FAF7F2]',
    outline: 'bg-transparent text-[#1F1B18] border border-[#1F1B18]/60 hover:bg-[#1F1B18] hover:text-[#FAF7F2] hover:border-[#1F1B18]',
    gold: 'bg-[#C5A059] text-[#FAF7F2] border border-[#C5A059] hover:bg-[#FAF7F2] hover:text-[#9E7E38] hover:border-[#C5A059] shadow-sm',
    goldOutline: 'bg-transparent text-[#9E7E38] border border-[#C5A059] hover:bg-[#C5A059] hover:text-[#FAF7F2]',
    light: 'bg-[#FAF7F2] text-[#1F1B18] border border-[#FAF7F2] hover:bg-transparent hover:text-[#FAF7F2] hover:border-[#FAF7F2]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
