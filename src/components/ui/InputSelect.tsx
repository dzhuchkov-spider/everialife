import React, { useState } from 'react';
import arrowDownIcon from '../../assets/icons/arrow down.svg';

// Design tokens from Figma
const DESIGN_TOKENS = {
  colors: {
    contentLight: '#939393',
    contentPrimary: '#437aec',
    interactiveNeutralDefault: '#666666',
    backgroundDefaultLight: '#ffffff',
    interactiveOutlineNeutralDefault: '#b3b3b3',
    interactiveOutlineNeutralHover: '#999999',
    interactiveOutlineNeutralPressed: '#333333',
    backgroundWhite40: 'rgba(255,255,255,0.4)',
    backgroundPrimaryLight: '#aaceff',
    interactiveOutlineNegativeDefault: '#d83535',
    contentNegative: '#d83535',
    interactiveNegativeDefault: '#d83535',
    interactiveOutlineNegativeFocus: '#a50202',
    interactiveOutlineNegativeHover: '#bf1c1c',
    backgroundSecondary: '#666666',
  },
  borderRadius: '4px',
  fontSize: {
    body1: '16px',
    caption: '12px',
  },
};

export interface InputSelectProps {
  className?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  optional?: boolean;
  supportingText?: string;
  state?: 'resting' | 'focused' | 'hovered' | 'readOnly';
  onChange?: (value: string) => void;
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
}

const InputSelect: React.FC<InputSelectProps> = ({
  className = '',
  label,
  placeholder = 'Placeholder',
  value = '',
  disabled = false,
  error = false,
  required = false,
  optional = false,
  supportingText,
  state = 'resting',
  onChange,
  trailingIcon,
  showTrailingIcon = true,
}) => {
  const [internalState, setInternalState] = useState<'resting' | 'focused' | 'hovered'>('resting');
  
  const actualState = state === 'readOnly' ? 'readOnly' : internalState;
  const isPopulated = value.length > 0;

  const handleFocus = () => {
    if (!disabled && state !== 'readOnly') {
      setInternalState('focused');
    }
  };

  const handleBlur = () => {
    if (!disabled && state !== 'readOnly') {
      setInternalState('resting');
    }
  };

  const handleMouseEnter = () => {
    if (!disabled && state !== 'readOnly') {
      setInternalState('hovered');
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && state !== 'readOnly' && internalState !== 'focused') {
      setInternalState('resting');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && state !== 'readOnly' && onChange) {
      onChange(e.target.value);
    }
  };

  // Border color based on state and error
  const getBorderColor = () => {
    if (error) {
      if (actualState === 'focused') return DESIGN_TOKENS.colors.interactiveOutlineNegativeFocus;
      if (actualState === 'hovered') return DESIGN_TOKENS.colors.interactiveOutlineNegativeHover;
      return DESIGN_TOKENS.colors.interactiveOutlineNegativeDefault;
    }
    if (actualState === 'focused') return DESIGN_TOKENS.colors.interactiveOutlineNeutralPressed;
    if (actualState === 'hovered') return DESIGN_TOKENS.colors.interactiveOutlineNeutralHover;
    return DESIGN_TOKENS.colors.interactiveOutlineNeutralDefault;
  };

  // Background color based on state and error
  const getBackgroundColor = () => {
    if (error && actualState !== 'readOnly') {
      return DESIGN_TOKENS.colors.backgroundPrimaryLight;
    }
    if (disabled) {
      return DESIGN_TOKENS.colors.backgroundWhite40;
    }
    return DESIGN_TOKENS.colors.backgroundDefaultLight;
  };

  // Label color based on state and error
  const getLabelColor = () => {
    if (error) return DESIGN_TOKENS.colors.contentNegative;
    return DESIGN_TOKENS.colors.interactiveNeutralDefault;
  };

  // Supporting text color based on error
  const getSupportingTextColor = () => {
    if (error) return DESIGN_TOKENS.colors.contentNegative;
    return DESIGN_TOKENS.colors.contentLight;
  };

  const defaultTrailingIcon = trailingIcon || <img src={arrowDownIcon} alt="arrow down" className="w-4 h-4" style={{ filter: 'brightness(0.6)' }} />;

  return (
    <div className={`flex flex-col items-start relative w-full ${className}`}>
      <div className="flex flex-col items-start relative w-full">
        {/* Input Container */}
        <div
          className={`
            flex items-center gap-2 h-16 px-4 py-2 w-full
            border border-solid
            transition-all duration-200
            ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
          style={{
            backgroundColor: getBackgroundColor(),
            borderColor: getBorderColor(),
            borderRadius: DESIGN_TOKENS.borderRadius,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={disabled ? -1 : 0}
        >
          {/* Input Field */}
          <div className="flex-1 flex items-center min-w-0">
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              disabled={disabled}
              readOnly={state === 'readOnly'}
              className={`
                w-full border-none outline-none bg-transparent
                font-normal text-base tracking-wide
                ${disabled ? 'cursor-not-allowed' : ''}
              `}
              style={{
                color: isPopulated ? '#000000' : DESIGN_TOKENS.colors.interactiveNeutralDefault,
                fontSize: DESIGN_TOKENS.fontSize.body1,
                textAlign: 'left',
                verticalAlign: 'middle',
              }}
            />
          </div>

          {/* Trailing Icon */}
          {showTrailingIcon && (
            <div className="flex items-center justify-center flex-shrink-0">
              {defaultTrailingIcon}
            </div>
          )}
        </div>

        {/* Label (floating when populated) */}
        {label && (
          <div
            className={`
              absolute flex items-center gap-1 px-1
              font-normal text-base tracking-wide
              transition-all duration-200
              ${isPopulated || actualState === 'focused' ? '-top-2.5 left-3 text-xs' : 'top-4 left-4 text-base'}
            `}
            style={{
              backgroundColor: DESIGN_TOKENS.colors.backgroundDefaultLight,
              color: getLabelColor(),
              fontSize: isPopulated || actualState === 'focused' ? DESIGN_TOKENS.fontSize.caption : DESIGN_TOKENS.fontSize.body1,
            }}
          >
            <span>{label}</span>
            {required && <span style={{ color: DESIGN_TOKENS.colors.contentPrimary }}>*</span>}
            {optional && <span style={{ color: DESIGN_TOKENS.colors.interactiveNeutralDefault }}>(optional)</span>}
          </div>
        )}
      </div>

      {/* Supporting Text */}
      {supportingText && (
        <div className="flex items-start justify-end pl-4 pt-1 w-full">
          <p
            className="font-normal text-xs tracking-wide"
            style={{
              color: getSupportingTextColor(),
              fontSize: DESIGN_TOKENS.fontSize.caption,
            }}
          >
            {supportingText}
          </p>
        </div>
      )}
    </div>
  );
};

export default InputSelect;
