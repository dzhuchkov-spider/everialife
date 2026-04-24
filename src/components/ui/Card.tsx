import React from 'react';
import infoIcon from '../../assets/icons/info_24.svg';

export interface CardProps {
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  variant?: 'services-smol' | 'default';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  className = '',
  title = 'Информационные материалы',
  icon,
  variant = 'services-smol',
  onClick,
}) => {
  // Figma variables: border-radius: 4px, background: #fafafa
  const baseClasses = 'relative flex flex-col items-start justify-center rounded overflow-hidden transition-all duration-200';
  const cursorClass = onClick ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg' : 'cursor-default';
  
  const variantClasses = variant === 'services-smol'
    ? 'bg-[#fafafa] w-[200px] h-[140px] pl-6 pr-3 py-6'
    : 'bg-[#fafafa] w-[200px] h-[140px] p-4';

  const renderIcon = () => {
    if (icon) {
      return (
        <div className="w-8 h-8 flex items-center justify-center mb-3 flex-shrink-0">
          {icon}
        </div>
      );
    }

    // Default info icon from Figma (info_24)
    return (
      <div className="w-8 h-8 flex items-center justify-center mb-3 flex-shrink-0">
        <img src={infoIcon} alt="info" className="w-full h-full rotate-180" />
      </div>
    );
  };

  return (
    <div 
      className={`${baseClasses} ${cursorClass} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col gap-3 items-start w-full flex-shrink-0">
        {renderIcon()}
        <div className="text-xl font-normal text-black min-w-min flex-shrink-0 leading-[26px] tracking-wide">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
