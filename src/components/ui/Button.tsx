import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined' | 'ghost';
  size?: 'normal' | 'large';
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  className = '',
  variant = 'contained',
  size = 'normal',
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
}) => {
  const baseClasses = 'flex items-center justify-center rounded overflow-hidden transition-all duration-200 font-normal text-base tracking-wide';
  
  const sizeClasses = size === 'large' 
    ? 'h-16 px-8 py-4 gap-2' 
    : 'h-10 px-4 py-2 gap-1';

  const variantClasses = {
    contained: disabled 
      ? 'bg-[#939393] text-white cursor-not-allowed' 
      : 'bg-[#386df7] text-white hover:bg-[#2459e3] cursor-pointer',
    outlined: disabled
      ? 'border border-[#386df7] bg-transparent text-[#386df7] opacity-50 cursor-not-allowed'
      : 'border border-[#386df7] bg-transparent text-[#386df7] hover:bg-[rgba(56,109,247,0.06)] cursor-pointer',
    ghost: disabled
      ? 'bg-transparent text-[#386df7] opacity-50 cursor-not-allowed'
      : 'bg-transparent text-white hover:bg-white/10 cursor-pointer',
  };

  const iconSize = size === 'large' ? 'w-6 h-6' : 'w-5 h-5';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses[variant]} ${className}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {leadingIcon && (
        <div className={`${iconSize} flex items-center justify-center overflow-hidden flex-shrink-0`}>
          {leadingIcon}
        </div>
      )}
      {children && (
        <span className="whitespace-nowrap flex-shrink-0">
          {children}
        </span>
      )}
      {trailingIcon && (
        <div className={`${iconSize} flex items-center justify-center overflow-hidden flex-shrink-0`}>
          {trailingIcon}
        </div>
      )}
    </button>
  );
};

export default Button;
