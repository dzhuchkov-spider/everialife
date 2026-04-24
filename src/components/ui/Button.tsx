import React from 'react';
import { theme } from '../../theme';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined' | 'ghost';
  size?: 'normal' | 'large';
  state?: 'resting' | 'hovered' | 'focused' | 'pressed' | 'disabled';
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
  state = 'resting',
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
}) => {
  const actualState = disabled ? 'disabled' : state;
  
  const getButtonStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: size === 'large' ? '8px' : '4px',
      borderRadius: '4px',
      border: 'none',
      cursor: actualState === 'disabled' ? 'not-allowed' : 'pointer',
      fontFamily: theme.typography.fontFamily.helveticaNeueCyr,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20.8px',
      letterSpacing: '0.3px',
      transition: 'all 0.2s ease',
      overflow: 'hidden',
      position: 'relative' as const,
      ...theme.textStyles.button,
    };

    const sizeStyles = {
      height: size === 'large' ? '64px' : '40px',
      paddingLeft: size === 'large' ? '32px' : '16px',
      paddingRight: size === 'large' ? '32px' : '16px',
      paddingTop: size === 'large' ? '16px' : '8px',
      paddingBottom: size === 'large' ? '16px' : '8px',
    };

    let variantStyles: React.CSSProperties = {};

    if (variant === 'contained') {
      switch (actualState) {
        case 'resting':
          variantStyles = {
            backgroundColor: '#386df7',
            color: 'white',
          };
          break;
        case 'hovered':
          variantStyles = {
            backgroundColor: '#386fe9',
            color: 'white',
          };
          break;
        case 'focused':
          variantStyles = {
            backgroundColor: '#2e64e6',
            color: 'white',
          };
          break;
        case 'pressed':
          variantStyles = {
            backgroundColor: '#2459e3',
            color: 'white',
          };
          break;
        case 'disabled':
          variantStyles = {
            backgroundColor: '#939393',
            color: 'white',
            opacity: 1,
          };
          break;
      }
    } else if (variant === 'outlined') {
      variantStyles = {
        border: '1px solid #386df7',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: '#386df7',
      };
      
      switch (actualState) {
        case 'hovered':
          variantStyles.backgroundColor = 'rgba(56, 109, 247, 0.06)';
          break;
        case 'focused':
          variantStyles.backgroundColor = 'rgba(56, 109, 247, 0.12)';
          break;
        case 'pressed':
          variantStyles.backgroundColor = 'rgba(56, 109, 247, 0.22)';
          break;
        case 'disabled':
          variantStyles.opacity = 0.5;
          break;
      }
    } else if (variant === 'ghost') {
      variantStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: '#386df7',
      };
      
      switch (actualState) {
        case 'hovered':
          variantStyles.backgroundColor = 'rgba(56, 109, 247, 0.06)';
          break;
        case 'focused':
          variantStyles.backgroundColor = 'rgba(56, 109, 247, 0.12)';
          break;
        case 'pressed':
          variantStyles.backgroundColor = 'rgba(56, 109, 247, 0.22)';
          break;
        case 'disabled':
          variantStyles.opacity = 0.5;
          break;
      }
    }

    return { ...baseStyles, ...sizeStyles, ...variantStyles };
  };

  const getIconSize = () => {
    return size === 'large' ? '24px' : '20px';
  };

  const renderLeadingIcon = () => {
    if (!leadingIcon) return null;
    
    return (
      <div style={{ 
        width: getIconSize(), 
        height: getIconSize(), 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0
      }}>
        {leadingIcon}
      </div>
    );
  };

  const renderTrailingIcon = () => {
    if (!trailingIcon) return null;
    
    return (
      <div style={{ 
        width: getIconSize(), 
        height: getIconSize(), 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0
      }}>
        {trailingIcon}
      </div>
    );
  };

  return (
    <button
      className={className}
      style={getButtonStyles()}
      onClick={actualState !== 'disabled' ? onClick : undefined}
      disabled={actualState === 'disabled'}
    >
      {renderLeadingIcon()}
      {children && (
        <span style={{ 
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}>
          {children}
        </span>
      )}
      {renderTrailingIcon()}
    </button>
  );
};

export default Button;
