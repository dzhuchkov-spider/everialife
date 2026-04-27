import React from 'react';
import InputSelect from './ui/InputSelect';
import Button from './ui/Button';
import arrowDown from '../assets/icons/arrow down.svg';
import groupIcon from '../assets/icons/Group.svg';
import helpIcon from '../assets/icons/Inputs/Help.svg';
import logoWeb from '../assets/logo/Web.svg';

interface ContractPageProps {
  onBack?: () => void;
}

const ContractPage: React.FC<ContractPageProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: false, current: true },
    { number: 3, label: 'Страхователь', completed: false, current: false },
    { number: 4, label: 'Завершение', completed: false, current: false },
  ];

  const menuItems = ['Главная', 'Договоры', 'Отчёты', 'Сервис'];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-[var(--font-helvetica)] relative">
      {/* Header */}
      <header className="relative">
        {/* Top bar with gradient */}
        <div className="bg-gradient-to-r from-[#386df7] to-[#5d9ef8]">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 sm:py-[30px] border-b border-[#f2f2f2]">
            {/* Logo */}
            <div className="relative w-[210px] sm:w-[320px] lg:w-[421px] h-[32px] sm:h-[46px]">
              <img src={logoWeb} alt="KAPLIFE" className="w-full h-full object-contain" />
            </div>
            
            {/* User actions */}
            <div className="flex items-center gap-2 sm:gap-5">
              <button 
                onClick={handleLogout}
                className="hidden sm:block px-2 py-2 bg-transparent text-white rounded hover:bg-white/10 transition-all text-sm sm:text-base tracking-wide"
              >
                Выйти
              </button>
              <div className="w-10 sm:w-[46px] h-10 sm:h-[46px] bg-[#437aec] rounded-full flex items-center justify-center text-white text-xs sm:text-sm tracking-wide">
                AK
              </div>
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <div className="bg-white px-4 sm:px-6 lg:px-10 py-3 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
          <nav className="flex items-center gap-4 sm:gap-10 lg:gap-20 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            {menuItems.map((item, index) => (
              <div key={item} className="flex items-center gap-0.5 cursor-pointer flex-shrink-0">
                <span className="text-base sm:text-xl font-normal text-[#191919] tracking-wide leading-7">
                  {item}
                </span>
                {index > 0 && (
                  <img src={arrowDown} alt="arrow down" className="w-4 h-4" style={{ filter: 'brightness(0.2)' }} />
                )}
              </div>
            ))}
          </nav>

          {/* Search input */}
          <div className="flex items-center gap-2 border border-[#b3b3b3] rounded h-12 sm:h-14 px-2 w-full sm:w-[320px] lg:w-[393px]">
            <div className="bg-[#f2f2f2] flex items-center gap-1 px-1 rounded h-10 flex-shrink-0">
              <span className="text-xs sm:text-sm text-[#4d4d4d] tracking-wide px-2 py-0.5">
                по номеру
              </span>
              <img src={arrowDown} alt="arrow down" className="w-4 h-4" style={{ filter: 'brightness(0.2)' }} />
            </div>
            <svg className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#666"/>
            </svg>
            <input
              type="text"
              placeholder="Поиск договора"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="flex-1 border-none outline-none bg-transparent text-sm sm:text-base text-[#666] tracking-wide min-w-0"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8 px-4 sm:px-6 lg:px-[156px] py-8 lg:py-10">
        {/* Page Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-black tracking-wide leading-tight m-0">
          Ввод договора
        </h2>

        {/* Progress Bar */}
        <div className="w-full h-[50px] overflow-hidden">
          <div className="flex items-center h-full">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* Progress Bar Item */}
                <div className={`flex flex-col items-center gap-1 overflow-hidden ${index === 0 ? 'w-[160px] sm:w-[180px] lg:w-[187.667px]' : 'flex-1'} min-w-px`}>
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
                  <div className="px-4 sm:px-6">
                    <span className="text-sm font-normal text-[#191919] tracking-[0.2px] leading-[1.4]">
                      {step.label}
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col gap-8 w-full">
          {/* Form Title */}
          <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
            Расчёт
          </h3>

          {/* Form Fields Container */}
          <div className="bg-[#f2f2f2] px-10 py-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <InputSelect
                    label="Агент"
                    placeholder="Агент"
                    value="Aгент | MAGNUM-С-N007288 | ТЕСТ МАГНУМ ТЕСТ"
                    showTrailingIcon={false}
                    onChange={(value) => console.log('Agent:', value)}
                  />
                </div>
                <img src={helpIcon} alt="Help" className="w-6 h-6 flex-shrink-0" />
              </div>
              <InputSelect
                label="Продукт"
                placeholder="Выберите продукт"
                value="11110 | ЗА РУЛЁМ.ЗДОРОВЬЕ"
                required
                onChange={(value) => console.log('Product:', value)}
              />
              <InputSelect
                label="Канал продаж"
                placeholder="Банковский"
                value="Банковский"
                required
                onChange={(value) => console.log('Sales Channel:', value)}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-3 items-end w-full">
          {/* Required Fields Note */}
          <p className="text-sm text-[#666] leading-tight">
            <span className="text-[#437aec]">*</span> Поля, обязательные к заполнению
          </p>

          {/* Next Button */}
          <div className="flex items-center justify-end w-full">
            <Button
              variant="contained"
              size="large"
              state="resting"
              showTrailingIcon={false}
              className="w-[200px]"
            >
              Далее
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#f2f2f2] border-solid bg-white px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 h-auto sm:h-[82px]">
        <div className="flex-1">
          <p className="text-sm sm:text-base text-[#313131] leading-6 m-0">
            © Портал продаж СК «Эверия Лайф»
          </p>
          <p className="text-sm sm:text-base text-[#313131] leading-6 m-0">
            Официальный сайт компании – <span className="text-[#386df7]">everialife.ru</span>
          </p>
        </div>
        <div className="flex gap-2">
          <img src={groupIcon} alt="Group" className="w-16 h-[50px]" />
        </div>
      </footer>
    </div>
  );
};

export default ContractPage;
