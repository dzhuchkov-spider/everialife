import React from 'react';
import { theme } from '../../theme';

export interface CardProps {
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  variant?: 'services-smol' | 'default';
  width?: string;
  height?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  className = '',
  title = 'Информационные материалы',
  icon,
  variant = 'services-smol',
  width = '200px',
  height = '140px',
  onClick,
}) => {
  const getCardStyles = () => {
    const baseStyles = {
      position: 'relative' as const,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderRadius: '4px',
      fontFamily: theme.typography.fontFamily.helveticaNeueCyr,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all 0.2s ease',
      overflow: 'hidden',
    };

    const variantStyles = variant === 'services-smol'
      ? {
          backgroundColor: '#fafafa',
          width: width,
          height: height,
          padding: '24px 12px',
        }
      : {
          backgroundColor: '#fafafa',
          width: width,
          height: height,
          padding: '16px',
        };

    return { ...baseStyles, ...variantStyles };
  };

  const renderIcon = () => {
    if (icon) {
      return (
        <div style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px',
          flexShrink: 0,
        }}>
          {icon}
        </div>
      );
    }

    // Default info icon
    return (
      <div style={{
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px',
        flexShrink: 0,
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(180deg)' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#666"/>
        </svg>
      </div>
    );
  };

  const renderTitle = () => (
    <div style={{
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '26px',
      letterSpacing: '0.2px',
      color: '#000000',
      minWidth: 'min-content',
      flexShrink: 0,
      ...theme.textStyles.h4,
    }}>
      {title}
    </div>
  );

  return (
    <div 
      className={className}
      style={getCardStyles()}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-start',
        width: '100%',
        flexShrink: 0,
      }}>
        {renderIcon()}
        {renderTitle()}
      </div>
    </div>
  );
};

export default Card;
