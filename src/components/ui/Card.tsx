import React from 'react';

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
  const baseClasses = 'relative flex flex-col items-start justify-center rounded overflow-hidden transition-all duration-200';
  const cursorClass = onClick ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg' : 'cursor-default';
  
  const variantClasses = variant === 'services-smol'
    ? 'bg-[#fafafa] w-[200px] h-[140px] px-3 py-6'
    : 'bg-[#fafafa] w-[200px] h-[140px] p-4';

  const renderIcon = () => {
    if (icon) {
      return (
        <div className="w-8 h-8 flex items-center justify-center mb-3 flex-shrink-0">
          {icon}
        </div>
      );
    }

    // Default info icon
    return (
      <div className="w-8 h-8 flex items-center justify-center mb-3 flex-shrink-0">
        <svg className="w-8 h-8 rotate-180" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#666"/>
        </svg>
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
