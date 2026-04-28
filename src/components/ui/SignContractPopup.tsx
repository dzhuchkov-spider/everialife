import React from 'react';
import Button from './Button';

interface SignContractPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const SignContractPopup: React.FC<SignContractPopupProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="bg-white rounded-2xl p-3 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full hover:bg-[#f2f2f2] flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 text-[#313131]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 pt-8 flex flex-col gap-8">
          {/* Header */}
          <div className="border-b border-[#f2f2f2] pb-5">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#313131] tracking-wide leading-tight m-0">
              Изменение статуса договора
            </h2>
          </div>

          {/* Message */}
          <p className="text-base font-normal text-[#313131] tracking-wide leading-relaxed w-full">
            Статус договора успешно изменен
          </p>

          {/* Confirm Button */}
          <div className="flex justify-end">
            <Button
              variant="contained"
              size="large"
              state="resting"
              showTrailingIcon={false}
              className="w-full sm:w-[200px]"
              onClick={onConfirm}
            >
              Хорошо
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignContractPopup;
