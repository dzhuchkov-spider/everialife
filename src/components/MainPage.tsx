import React, { useState } from 'react';

const MainPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  const menuItems = ['Главная', 'Договоры', 'Отчёты', 'Сервис'];

  const contractCards = [
    { title: 'Учебный портал продаж', icon: '📚' },
    { title: 'Пролонгация\nдоговора', icon: '🔄' },
    { title: 'Поиск\nдоговора', icon: '🔍' },
  ];

  const reportCards = [
    { title: 'Дубликат\nполиса', icon: '📄' },
    { title: 'Сформированные\nзаказы', icon: '📋' },
  ];

  const serviceCards = [
    { title: 'Инфо.\nматериалы', icon: 'ℹ️' },
    { title: 'Сменить\nпароль', icon: '🔑' },
    { title: 'Техническая\nподдержка', icon: '📞' },
    { title: 'Просмотреть реестр', icon: '👁️' },
    { title: 'Создать реестр\nна оплату', icon: '📝' },
    { title: 'Импорт реестра договоров', icon: '📥' },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-[var(--font-helvetica)]">
      {/* Header */}
      <header className="relative">
        {/* Top bar with gradient */}
        <div className="bg-gradient-to-r from-[#386df7] to-[#5d9ef8]">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 sm:py-[30px] border-b border-[#f2f2f2]">
            {/* Logo */}
            <div className="relative w-[210px] sm:w-[320px] lg:w-[421px] h-[32px] sm:h-[46px]">
              <div className="w-full sm:w-[210px] h-full bg-white rounded flex items-center justify-center font-bold text-base sm:text-lg text-[#386df7]">
                KAPLIFE
              </div>
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
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10l5 5 5-5z" fill="#666"/>
                  </svg>
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
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#666"/>
              </svg>
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
      <main className="flex-1 flex flex-col gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-10">
        {/* Hero Section */}
        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 items-start xl:items-end">
          {/* Left Column - Contracts */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full xl:w-auto">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-xl sm:text-2xl lg:text-[32px] font-normal text-black tracking-wide leading-tight m-0">
                Договоры
              </h2>
              
              {/* Contract info card */}
              <div className="w-full sm:w-full lg:w-[663px] h-auto min-h-[114px] p-4 sm:p-6 lg:p-8 bg-[#fafafa] border border-[#f2f2f2] rounded flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#c4703e] rounded flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg lg:text-xl font-normal text-black leading-tight">
                      Договоры в работе
                    </div>
                    <div className="text-xs sm:text-sm text-[#666666] leading-tight tracking-wide">
                      Договоры, находящиеся в процессе ввода или оценки рисков
                    </div>
                  </div>
                </div>
                <svg className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#c4703e"/>
                </svg>
              </div>

              {/* Contract cards */}
              <div className="w-full sm:w-full lg:w-[666px] flex gap-4 sm:gap-6 lg:gap-8 flex-wrap">
                {contractCards.map((card, index) => (
                  <div key={index} className="flex-1 min-w-[140px] sm:min-w-[180px] h-[120px] sm:h-[140px] px-2 sm:px-3 py-4 sm:py-6 border border-[#cccccc] rounded bg-white flex flex-col justify-center items-start gap-2 sm:gap-3 cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#c4703e] rounded" />
                      <div className="text-sm sm:text-lg lg:text-xl font-normal text-black leading-tight tracking-wide">
                        {card.title.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < card.title.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Create Contract */}
          <div className="w-full xl:w-[664px] h-auto min-h-[200px] sm:h-[286px] relative overflow-hidden bg-[#fafafa] rounded">
            <img className="hidden sm:block w-[150px] lg:w-[206px] h-auto lg:h-[268px] absolute left-4 lg:left-9 top-4 lg:top-[18px]" src="https://placehold.co/206x268" alt="Contract illustration" />
            <div className="static sm:absolute left-0 sm:left-[200px] lg:left-[313px] top-0 sm:top-[31px] border border-[#fff9ef] rounded p-4 sm:p-6 bg-white flex flex-col gap-4 sm:gap-6 m-4 sm:m-0">
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="w-12 sm:w-[72px] h-12 sm:h-[72px] bg-[#999999] rounded" />
                <div className="text-xl sm:text-2xl lg:text-[32px] font-normal text-black leading-tight tracking-wide">
                  Ввод договора
                </div>
              </div>
              <button className="h-12 sm:h-16 px-4 sm:px-8 bg-[#386df7] text-white rounded flex items-center justify-center cursor-pointer text-sm sm:text-base font-normal tracking-wide hover:bg-[#2459e3] transition-colors">
                Создать договор
              </button>
            </div>
          </div>
        </div>

        {/* Reports and Services */}
        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 items-start">
          {/* Reports Section */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full xl:w-auto">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-normal text-black tracking-wide leading-tight m-0">
              Отчёты
            </h2>
            <div className="w-full sm:w-full lg:w-[666px] flex gap-4 sm:gap-6 lg:gap-8 flex-wrap">
              {reportCards.map((report, index) => (
                <div key={index} className="flex-1 min-w-[140px] sm:min-w-[200px] lg:w-[316px] lg:flex-none p-4 sm:p-6 border border-[#cccccc] rounded bg-white flex flex-col gap-3 sm:gap-4 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="w-10 sm:w-[60px] h-10 sm:h-[60px] bg-[#c4703e] rounded" />
                    <div className="text-sm sm:text-lg lg:text-xl font-normal text-black leading-tight tracking-wide">
                      {report.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < report.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col gap-4 sm:gap-6 bg-white w-full xl:w-auto">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-normal text-black tracking-wide leading-tight m-0">
              Сервисы
            </h2>
            <div className="w-full sm:w-full lg:w-[664px] flex gap-4 sm:gap-6 lg:gap-8 flex-wrap">
              {serviceCards.map((service, index) => (
                <div key={index} className="w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] lg:w-[200px] h-[120px] sm:h-[140px] px-2 sm:px-3 py-4 sm:py-6 bg-[#fafafa] rounded flex flex-col justify-center items-start gap-2 sm:gap-3 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#c4703e] rounded" />
                    <div className="text-sm sm:text-lg lg:text-xl font-normal text-black leading-tight tracking-wide">
                      {service.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < service.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#f2f2f2] bg-white px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 h-auto sm:h-[82px]">
        <div className="flex-1">
          <p className="text-sm sm:text-base text-[#313131] leading-6 m-0">
            © Портал продаж СК «Эверия Лайф»
          </p>
          <p className="text-sm sm:text-base text-[#313131] leading-6 m-0">
            Официальный сайт компании – <span className="text-[#386df7]">everialife.ru</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#c4703e] rounded" />
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#c4703e] rounded" />
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
