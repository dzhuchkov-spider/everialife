import React from 'react';

interface DocumentsSentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentsSentPopup: React.FC<DocumentsSentPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight mb-4">
            Документы отправлены
          </h2>
          
          {/* Description */}
          <p className="text-base text-[#666] tracking-wide leading-relaxed mb-8">
            Документы успешно отправлены страхователю. Вы будете перенаправлены на главную страницу через несколько секунд.
          </p>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-[#386df7] text-white py-3 px-6 rounded-lg hover:bg-[#2a5bc7] transition-colors text-base font-normal tracking-wide"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSentPopup;
