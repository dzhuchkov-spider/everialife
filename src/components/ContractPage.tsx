import React from 'react';
import { Header } from './ui';
import arrowDown from '../assets/icons/arrow down.svg';
import groupIcon from '../assets/icons/Group.svg';

const ContractPage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: false, current: true },
    { number: 3, label: 'Данные', completed: false, current: false },
    { number: 4, label: 'Завершение', completed: false, current: false },
  ];

  const menuItems = ['Главная', 'Договоры', 'Отчёты', 'Сервис'];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-[var(--font-helvetica)] relative">
      {/* Header */}
      <Header
        variant="web"
        mode="login-search"
        userName="AK"
        searchPlaceholder="Поиск договора"
        onSearch={handleSearch}
        onLoginClick={handleLogout}
      />

      {/* Navigation Menu */}
      <div className="bg-white px-10 py-3 flex items-center justify-between">
        <nav className="flex items-center gap-20">
          {menuItems.map((item, index) => (
            <div key={item} className="flex items-center gap-0.5 cursor-pointer flex-shrink-0">
              <span className="text-[20px] font-normal text-[#191919] tracking-[0.2px] leading-[28px]">
                {item}
              </span>
              {index > 0 && (
                <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
              )}
            </div>
          ))}
        </nav>
        <div className="flex flex-col h-[56px] items-start relative shrink-0 w-[393px]">
          <div className="flex flex-col h-[56px] items-start justify-center relative shrink-0 w-full">
            <div className="bg-transparent border border-[#b3b3b3] border-solid flex gap-2 h-[56px] items-center pl-2 pr-4 py-2 relative shrink-0 w-full">
              <div className="bg-[#f2f2f2] flex h-10 items-center justify-center overflow-hidden px-1 relative shrink-0">
                <div className="flex h-6 items-center justify-center px-2 py-0.5 relative shrink-0">
                  <span className="font-normal not-italic relative text-sm text-[#4d4d4d] tracking-[0.2px] whitespace-nowrap leading-[1.4]">
                    по номеру
                  </span>
                </div>
                <div className="flex h-6 items-center relative w-[19px] shrink-0">
                  <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
                </div>
              </div>
              <div className="flex h-full items-center justify-center py-2 relative shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#666"/>
                </svg>
              </div>
              <div className="flex flex-col flex-1 h-10 items-start justify-center min-w-0 py-2 relative">
                <div className="flex items-center relative shrink-0 w-full">
                  <div className="flex flex-1 items-center min-w-0 overflow-hidden relative">
                    <input
                      type="text"
                      placeholder="Поиск договора"
                      onChange={(e) => handleSearch(e.target.value)}
                      className="font-normal not-italic relative text-base text-[#666] tracking-[0.5px] whitespace-nowrap border-none outline-none bg-transparent w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute left-[156px] top-[227px] flex flex-col gap-8 w-[1128px]">
        {/* Page Title */}
        <h2 className="text-[32px] font-normal text-black tracking-wide leading-[48px] m-0">
          Ввод договора
        </h2>

        {/* Progress Bar */}
        <div className="w-[1057px] h-[50px] overflow-hidden">
          <div className="flex items-center h-full inset-0">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* Progress Bar Item */}
                <div className={`flex flex-col items-center gap-1 overflow-hidden ${index === 0 ? 'w-[187.667px]' : 'flex-1'} min-w-px`}>
                  {/* Step Icon */}
                  <div className="h-[25px] w-full relative">
                    {/* Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 left-1/2 right-0 h-px -translate-y-1/2 overflow-hidden">
                        <div 
                          className="h-full w-full"
                          style={{ 
                            backgroundColor: step.completed ? '#c4703e' : '#e0e0e0'
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Circle */}
                    <div 
                      className={`
                        absolute left-1/2 -translate-x-1/2 top-0 w-[25px] h-[25px] rounded-full flex items-center justify-center
                        ${step.current || step.completed 
                          ? 'bg-[#c4703e]' 
                          : 'bg-white border border-[#ccc] border-solid'
                        }
                      `}
                    >
                      {step.completed ? (
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                          </svg>
                        </div>
                      ) : (
                        <span className={`text-base font-normal tracking-[0.5px] ${step.current ? 'text-white' : 'text-[#191919]'}`}>
                          {step.number}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Step Label */}
                  <div className="px-6">
                    <span className="text-sm font-normal text-[#191919] tracking-[0.2px] leading-[1.4]">
                      {step.label}
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#f2f2f2] border-solid bg-white px-10 py-4 flex items-center justify-between h-[82px] absolute top-[998px] left-0 w-[1439px]">
        <div className="flex items-center justify-between w-[1352px]">
          <div className="flex-1">
            <p className="text-base text-[#313131] leading-6 m-0 mb-0">
              © Портал продаж СК «Эверия Лайф»
            </p>
            <p className="text-base text-[#313131] leading-6 m-0">
              Официальный сайт компании – <span className="text-[#386df7]">everialife.ru</span>
            </p>
          </div>
          <div className="h-[50.643px] w-[64px]">
            <img src={groupIcon} alt="Group" className="w-full h-full" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContractPage;
