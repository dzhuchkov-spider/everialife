import React from 'react';
import arrowDown from '../../assets/icons/arrow down.svg';
import groupIcon from '../../assets/icons/Group.svg';
import logoWeb from '../../assets/logo/Web.svg';
import NewProgressBar from '../ui/NewProgressBar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showProgress?: boolean;
  steps?: Array<{ number: number; label: string; completed: boolean; current: boolean }>;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Ввод договора',
  showProgress = true,
  steps
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleNavigation = (item: string) => {
    if (item === 'Главная') {
      window.location.href = '/'; // Переход на главную страницу
    } else {
      console.log(`Navigation clicked: ${item}`);
    }
  };

  const menuItems = ['Главная', 'Договоры', 'Отчёты', 'Сервис'];

  const defaultSteps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: false, current: true },
    { number: 3, label: 'Страхователь', completed: false, current: false },
    { number: 4, label: 'Застрахованный', completed: false, current: false },
    { number: 5, label: 'Просмотр договора', completed: false, current: false },
  ];

  const displaySteps = steps || defaultSteps;

  // Calculate progress based on steps
  const calculateProgress = () => {
    let currentStep = 0;
    let hasCurrentStep = false;
    
    displaySteps.forEach((step) => {
      if (step.current) {
        currentStep = step.number;
        hasCurrentStep = true;
      }
    });
    
    // If no current step found, calculate based on completed steps
    if (!hasCurrentStep) {
      const completedSteps = displaySteps.filter(step => step.completed).length;
      currentStep = completedSteps + 1;
    }
    
    return currentStep;
  };

  const currentProgress = calculateProgress();

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
              <div key={item} className="flex items-center gap-0.5 cursor-pointer flex-shrink-0" onClick={() => handleNavigation(item)}>
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
          {title}
        </h2>

        {/* Progress Bar */}
        {showProgress && <div className="hidden sm:block"><NewProgressBar steps={displaySteps} progress={currentProgress} /></div>}

        {/* Children Content */}
        {children}
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

export default Layout;
