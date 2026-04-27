import React from 'react';
import selectIcon from '../../assets/check/Select.svg';
import noSelectIcon from '../../assets/check/No-select.svg';

export interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  className = '',
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={`flex items-center gap-2 ${className} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={handleClick}
    >
      <img
        src={checked ? selectIcon : noSelectIcon}
        alt={checked ? 'checked' : 'unchecked'}
        className="w-6 h-6 flex-shrink-0"
      />
      {label && (
        <span className="text-base font-normal text-[#191919] tracking-wide">
          {label}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
