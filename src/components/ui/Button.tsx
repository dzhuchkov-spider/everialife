import React from 'react';
import plusIcon from '../../assets/icons/plus.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined' | 'ghost';
  size?: 'normal' | 'large';
  state?: 'resting' | 'hovered' | 'focused' | 'pressed' | 'disabled';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  className = '',
  variant = 'contained',
  size = 'normal',
  state = 'resting',
  leadingIcon,
  trailingIcon,
  showTrailingIcon = true,
  onClick,
}) => {
  const actualState = state === 'disabled' ? 'disabled' : state;
  const baseClasses = 'flex items-center justify-center rounded overflow-hidden transition-all duration-200 font-normal text-base tracking-wide';
  
  const sizeClasses = size === 'large' 
    ? 'h-16 px-8 py-4 gap-2' 
    : 'h-10 px-4 py-2 gap-1';

  // Figma color variables
  const variantClasses = {
    contained: {
      resting: 'bg-[#386df7] text-white cursor-pointer',
      hovered: 'bg-[#386fe9] text-white cursor-pointer',
      focused: 'bg-[#2e64e6] text-white cursor-pointer',
      pressed: 'bg-[#2459e3] text-white cursor-pointer',
      disabled: 'bg-[#939393] text-white cursor-not-allowed',
    },
    outlined: {
      resting: 'border border-[#386df7] bg-transparent text-[#386df7] cursor-pointer',
      hovered: 'border border-[#386df7] bg-[rgba(56,109,247,0.06)] text-[#386df7] cursor-pointer',
      focused: 'border border-[#386df7] bg-[rgba(56,109,247,0.12)] text-[#386df7] cursor-pointer',
      pressed: 'border border-[#386df7] bg-[rgba(56,109,247,0.22)] text-[#386df7] cursor-pointer',
      disabled: 'border border-[#386df7] bg-transparent text-[#386df7] opacity-50 cursor-not-allowed',
    },
    ghost: {
      resting: 'bg-transparent text-[#386df7] cursor-pointer',
      hovered: 'bg-[rgba(56,109,247,0.06)] text-[#386df7] cursor-pointer',
      focused: 'bg-[rgba(56,109,247,0.12)] text-[#386df7] cursor-pointer',
      pressed: 'bg-[rgba(56,109,247,0.22)] text-[#386df7] cursor-pointer',
      disabled: 'bg-transparent text-[#386df7] opacity-50 cursor-not-allowed',
    },
  };

  const iconSize = size === 'large' ? 'w-6 h-6' : 'w-5 h-5';

  // Default icons from Figma
  const defaultLeadingIcon = leadingIcon || (variant !== 'contained' ? <img src={plusIcon} alt="plus" className="w-full h-full" /> : null);
  const defaultTrailingIcon = trailingIcon || (showTrailingIcon && variant === 'contained' && size === 'large' && state === 'resting' ? <img src={arrowRightIcon} alt="arrow" className="w-full h-full" /> : null);

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses[variant][actualState]} ${className}`}
      onClick={actualState === 'disabled' ? undefined : onClick}
      disabled={actualState === 'disabled'}
    >
      {defaultLeadingIcon && (
        <div className={`${iconSize} flex items-center justify-center overflow-hidden flex-shrink-0`}>
          {defaultLeadingIcon}
        </div>
      )}
      {children && (
        <span className="whitespace-nowrap flex-shrink-0">
          {children}
        </span>
      )}
      {defaultTrailingIcon && (
        <div className={`${iconSize} flex items-center justify-center overflow-hidden flex-shrink-0`}>
          {defaultTrailingIcon}
        </div>
      )}
    </button>
  );
};

export default Button;
