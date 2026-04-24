import React, { useState } from 'react';
import { theme } from '../theme';
import { Button } from './ui';

const MainPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getPageStyles = () => ({
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'white',
    fontFamily: theme.typography.fontFamily.helveticaNeueCyr,
    display: 'flex',
    flexDirection: 'column' as const,
  });

  const getHeaderStyles = () => ({
    background: 'linear-gradient(to right, #386df6, #5d9ef8)',
    position: 'relative' as const,
  });

  const getHeaderTopStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px 40px',
    borderBottom: '1px solid #f2f2f2',
  });

  const getHeaderMenuStyles = () => ({
    backgroundColor: 'white',
    padding: '12px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  const getMenuItemsStyles = () => ({
    display: 'flex',
    gap: '80px',
    alignItems: 'center',
  });

  const getMainContentStyles = () => ({
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '40px',
  });

  const getHeroSectionStyles = () => ({
    display: 'flex',
    gap: '31px',
    alignItems: 'flex-end',
  });

  const getLeftColumnStyles = () => ({
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  });

  const getContractsSectionStyles = () => ({
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  });

  const getSectionTitleStyles = () => ({
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: '28.8px',
    letterSpacing: '0.2px',
    color: '#000000',
    margin: 0,
    width: '186px',
  });

  const getContractInfoCardStyles = () => ({
    width: '663px',
    height: '114px',
    padding: '32px',
    backgroundColor: '#fafafa',
    border: '1px solid #f2f2f2',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  const getContractCardsStyles = () => ({
    width: '666px',
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap' as const,
  });

  const getContractCardStyles = () => ({
    flex: '1 1 0',
    height: '140px',
    padding: '24px 12px',
    border: '1px solid #cccccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '12px',
    cursor: 'pointer',
  });

  const getRightColumnStyles = () => ({
    width: '664px',
    height: '286px',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    backgroundColor: '#fafafa',
    borderRadius: '4px',
  });

  const getRightColumnContentStyles = () => ({
    position: 'absolute' as const,
    left: '313px',
    top: '31px',
    border: '1px solid #fff9ef',
    borderRadius: '4px',
    padding: '24px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  });

  const getReportsAndServicesStyles = () => ({
    display: 'flex',
    gap: '32px',
    alignItems: 'flex-start',
  });

  const getReportsSectionStyles = () => ({
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  });

  const getReportCardsStyles = () => ({
    width: '666px',
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap' as const,
  });

  const getReportCardStyles = () => ({
    width: '316px',
    padding: '24px',
    border: '1px solid #cccccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    cursor: 'pointer',
  });

  const getServicesSectionStyles = () => ({
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
    backgroundColor: 'white',
  });

  const getServiceCardsStyles = () => ({
    width: '664px',
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap' as const,
  });

  const getServiceCardStyles = () => ({
    width: '200px',
    height: '140px',
    padding: '24px 12px',
    backgroundColor: '#fafafa',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '12px',
    cursor: 'pointer',
  });

  const getFooterStyles = () => ({
    borderTop: '1px solid #f2f2f2',
    backgroundColor: 'white',
    padding: '16px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '82px',
  });

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
    <div style={getPageStyles()}>
      {/* Header */}
      <header style={getHeaderStyles()}>
        <div style={getHeaderTopStyles()}>
          {/* Logo */}
          <div style={{ width: '421px', height: '46px', position: 'relative' }}>
            <div style={{ 
              width: '210px', 
              height: '46px', 
              backgroundColor: '#fff', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '18px',
              color: '#386df7'
            }}>
              KAPLIFE
            </div>
          </div>
          
          {/* User actions */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Button 
              variant="ghost" 
              size="normal"
              onClick={handleLogout}
            >
              Выйти
            </Button>
            <div style={{
              backgroundColor: '#437aec',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              letterSpacing: '0.2px',
            }}>
              AK
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <div style={getHeaderMenuStyles()}>
          <div style={getMenuItemsStyles()}>
            {menuItems.map((item, index) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '2px', cursor: 'pointer' }}>
                <span style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '28px',
                  letterSpacing: '0.2px',
                  color: index === 0 ? '#191919' : '#191919',
                }}>
                  {item}
                </span>
                {index > 0 && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10l5 5 5-5z" fill="#666"/>
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Search input */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #b3b3b3',
            borderRadius: '4px',
            height: '56px',
            padding: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            width: '393px',
          }}>
            <div style={{
              backgroundColor: '#f2f2f2',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px',
              borderRadius: '4px',
              height: '40px',
            }}>
              <span style={{
                fontSize: '14px',
                color: '#4d4d4d',
                letterSpacing: '0.2px',
                padding: '2px 8px',
              }}>
                по номеру
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#666"/>
              </svg>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#666"/>
            </svg>
            <input
              type="text"
              placeholder="Поиск договора"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                color: '#666',
                letterSpacing: '0.5px',
                fontFamily: theme.typography.fontFamily.helveticaNeueCyr,
                backgroundColor: 'transparent',
              }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={getMainContentStyles()}>
        {/* Hero Section */}
        <div style={getHeroSectionStyles()}>
          {/* Left Column - Contracts */}
          <div style={getLeftColumnStyles()}>
            <div style={getContractsSectionStyles()}>
              <h2 style={getSectionTitleStyles()}>Договоры</h2>
              
              {/* Contract info card */}
              <div style={getContractInfoCardStyles()}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', backgroundColor: '#c4703e', borderRadius: '4px' }} />
                  <div>
                    <div style={{ fontSize: '20px', fontWeight: 400, lineHeight: '26px', color: '#000000' }}>
                      Договоры в работе
                    </div>
                    <div style={{ fontSize: '14px', color: '#666666', lineHeight: '19.6px', letterSpacing: '0.2px' }}>
                      Договоры, находящиеся в процессе ввода или оценки рисков
                    </div>
                  </div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#c4703e"/>
                </svg>
              </div>

              {/* Contract cards */}
              <div style={getContractCardsStyles()}>
                {contractCards.map((card, index) => (
                  <div key={index} style={getContractCardStyles()}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ width: '32px', height: '32px', backgroundColor: '#c4703e', borderRadius: '4px' }} />
                      <div style={{ fontSize: '20px', fontWeight: 400, lineHeight: '26px', color: '#000000' }}>
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
          <div style={getRightColumnStyles()}>
            <img style={{ width: '206px', height: '268px', position: 'absolute', left: '36px', top: '18px' }} src="https://placehold.co/206x268" alt="Contract illustration" />
            <div style={getRightColumnContentStyles()}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ width: '72px', height: '72px', backgroundColor: '#999999', borderRadius: '4px' }} />
                <div style={{ fontSize: '32px', fontWeight: 400, lineHeight: '38.4px', color: '#000000' }}>
                  Ввод договора
                </div>
              </div>
              <div style={{ 
                height: '64px', 
                padding: '16px 32px',
                background: '#386df7',
                color: 'white',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '0.3px'
              }}>
                Создать договор
              </div>
            </div>
          </div>
        </div>

        {/* Reports and Services */}
        <div style={getReportsAndServicesStyles()}>
          {/* Reports Section */}
          <div style={getReportsSectionStyles()}>
            <h2 style={getSectionTitleStyles()}>Отчёты</h2>
            <div style={getReportCardsStyles()}>
              {reportCards.map((report, index) => (
                <div key={index} style={getReportCardStyles()}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#c4703e', borderRadius: '4px' }} />
                    <div style={{ fontSize: '20px', fontWeight: 400, lineHeight: '26px', color: '#000000' }}>
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
          <div style={getServicesSectionStyles()}>
            <h2 style={getSectionTitleStyles()}>Сервисы</h2>
            <div style={getServiceCardsStyles()}>
              {serviceCards.map((service, index) => (
                <div key={index} style={getServiceCardStyles()}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: '#c4703e', borderRadius: '4px' }} />
                    <div style={{ fontSize: '20px', fontWeight: 400, lineHeight: '26px', color: '#000000' }}>
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
      <footer style={getFooterStyles()}>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontSize: '16px', color: '#313131', lineHeight: '24px' }}>
            © Портал продаж СК «Эверия Лайф»
          </p>
          <p style={{ margin: 0, fontSize: '16px', color: '#313131', lineHeight: '24px' }}>
            Официальный сайт компании – <span style={{ color: '#386df7' }}>everialife.ru</span>
          </p>
        </div>
        <div style={{ width: '64px', height: '50px', display: 'flex', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#c4703e', borderRadius: '4px' }} />
          <div style={{ width: '32px', height: '32px', backgroundColor: '#c4703e', borderRadius: '4px' }} />
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
