import React from 'react';
import closeIcon from '../assets/icons/close.svg';
import fileIcon from '../assets/icons/file_24.svg';
import toolsIcon from '../assets/icons/Tools.svg';

interface Contract {
  id: string;
  number: string;
  date: string;
  status: string;
  statusColor: string;
  statusTextColor: string;
}

interface ContractsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContract?: () => void;
}

const ContractsPopup: React.FC<ContractsPopupProps> = ({ isOpen, onClose, onNavigateToContract }) => {
  const contracts: Contract[] = [
    {
      id: '1',
      number: 'Договор №5033819720',
      date: '03.04.2024',
      status: 'Ожидание дополнительной информации',
      statusColor: '#ffe8c6',
      statusTextColor: '#9f6000',
    },
    {
      id: '2',
      number: 'Договор №5033819688',
      date: '03.04.2024',
      status: 'Редактирование договора',
      statusColor: '#ffddf0',
      statusTextColor: '#8a1c51',
    },
    {
      id: '3',
      number: 'Договор №5033819542',
      date: '25.03.2024',
      status: 'Ожидание подписания документов',
      statusColor: '#d8f9d8',
      statusTextColor: '#3e7340',
    },
    {
      id: '4',
      number: 'Договор №5033818576',
      date: '15.03.2024',
      status: 'Договор у андеррайтера',
      statusColor: '#e2d5ff',
      statusTextColor: '#613caf',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative">
        {/* Header with close button */}
        <div className="flex justify-end p-3 sm:p-4">
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <img src={closeIcon} alt="Close" className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 pb-8 sm:pb-12">
          <div className="flex flex-col gap-8">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#313131] leading-tight tracking-wide">
              Договоры в работе
            </h2>

            {/* Contracts list */}
            <div className="flex flex-col gap-4">
              {contracts.map((contract) => (
                <div
                  key={contract.id}
                  className="bg-[#fafafa] rounded-2xl p-4 sm:p-6 lg:p-8 flex items-center justify-between gap-4 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => {
                    onClose();
                    onNavigateToContract?.();
                  }}
                >
                  <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                    {/* File icon and contract info */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <img src={fileIcon} alt="File" className="w-8 h-8 flex-shrink-0" />
                      <div className="flex flex-col gap-1 min-w-0">
                        {/* Mobile: Status chip above, Desktop: Status chip beside */}
                        <div className="sm:hidden">
                          {/* Status chip */}
                          <div
                            className="inline-block px-3 py-1.5 rounded-full mb-2"
                            style={{
                              backgroundColor: contract.statusColor,
                            }}
                          >
                            <p
                              className="text-xs font-normal leading-tight tracking-wide whitespace-nowrap"
                              style={{
                                color: contract.statusTextColor,
                              }}
                            >
                              {contract.status}
                            </p>
                          </div>
                        </div>
                        
                        <div className="hidden sm:flex items-center gap-2 flex-wrap">
                          <p className="text-base sm:text-lg lg:text-xl font-normal text-black leading-tight truncate">
                            {contract.number}
                          </p>
                          {/* Status chip */}
                          <div
                            className="flex-shrink-0 px-3 py-1.5 rounded-full"
                            style={{
                              backgroundColor: contract.statusColor,
                            }}
                          >
                            <p
                              className="text-sm font-normal leading-tight tracking-wide whitespace-nowrap"
                              style={{
                                color: contract.statusTextColor,
                              }}
                            >
                              {contract.status}
                            </p>
                          </div>
                        </div>
                        
                        {/* Mobile: Contract number below status chip */}
                        <p className="sm:hidden text-base font-normal text-black leading-tight truncate">
                          {contract.number}
                        </p>
                        
                        <p className="text-sm sm:text-base text-[#666] leading-tight tracking-wide">
                          {contract.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tools icon */}
                  <button className="flex-shrink-0 w-6 h-6 hover:opacity-70 transition-opacity">
                    <img src={toolsIcon} alt="Tools" className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractsPopup;
