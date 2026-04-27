import React from 'react';
import logoWeb from '../../assets/logo/Web.svg';
import logoMob from '../../assets/logo/Mob.svg';
import callIcon from '../../assets/icons/call.svg';
import signInIcon from '../../assets/icons/sign-in_24.svg';
import searchIcon from '../../assets/icons/search_24.svg';

export interface HeaderProps {
  className?: string;
  variant?: 'web' | 'mobile';
  mode?: 'enter' | 'login' | 'login-search';
  phoneNumber?: string;
  supportText?: string;
  logoText?: string;
  searchPlaceholder?: string;
  userName?: string;
  onSearch?: (query: string) => void;
  onLoginClick?: () => void;
  onCallClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  className = '',
  variant = 'web',
  mode = 'enter',
  phoneNumber = '8 (800) 200-68-86',
  supportText = 'техническая поддержка',
  searchPlaceholder = 'Поиск...',
  userName = 'AK',
  onSearch,
  onLoginClick,
  onCallClick,
}) => {
  const isMobAndEnter = variant === 'mobile' && mode === 'enter';
  const isMobAndLogin = variant === 'mobile' && mode === 'login';
  const isMobAndLoginSearch = variant === 'mobile' && mode === 'login-search';
  const isWebAndEnter = variant === 'web' && mode === 'enter';
  const isWebAndLoginSearch = variant === 'web' && mode === 'login-search';

  const Logo: React.FC<{ property1?: 'Mob' | 'Web' }> = ({ property1 = 'Mob' }) => {
    const isMob = property1 === 'Mob';
    const isWeb = property1 === 'Web';

    return (
      <div className={`relative ${isWeb ? 'h-[46px] w-[421px]' : 'h-[32px] w-[210px]'}`}>
        {isMob && (
          <>
            <div className="absolute text-white text-xs" style={{ top: '15.63%', bottom: '12.72%', left: 0, right: '73.81%' }}>
              портал продаж
            </div>
            <div className="absolute flex items-center justify-center" style={{ left: '33.35%', right: '66.65%', top: 0, bottom: 0 }}>
              <div className="w-0.5 h-full bg-white rotate-90" />
            </div>
          </>
        )}
        <div className={`absolute ${isWeb ? 'inset-[0_49.9%_0_0]' : '-translate-y-1/2 h-[28px] left-0 overflow-hidden right-[38.87%] top-1/2'}`}>
          <img 
            src={isWeb ? logoWeb : logoMob} 
            alt="Logo" 
            className="w-full h-full"
          />
        </div>
      </div>
    );
  };

  const ButtonCall: React.FC = () => (
    <div className="bg-[#386df7] relative rounded-[4px] size-[32px] cursor-pointer" onClick={onCallClick}>
      <img src={callIcon} alt="call" className="absolute inset-[21.88%] w-full h-full" />
    </div>
  );

  const UserInfo: React.FC = () => (
    <div className="flex items-center gap-3">
      <div className="bg-[#437aec] flex items-center justify-center overflow-hidden relative rounded-full w-8 h-8 flex-shrink-0">
        <div className="flex flex-col justify-center h-full font-normal not-italic relative text-sm text-white text-center tracking-[0.2px] w-[19px] leading-[1.4]">
          {userName}
        </div>
      </div>
      <div className="overflow-hidden relative w-6 h-6 flex-shrink-0 cursor-pointer" onClick={onLoginClick}>
        <img src={signInIcon} alt="sign-in" className="w-full h-full" />
      </div>
    </div>
  );

  const SearchInput: React.FC = () => (
    <div className="flex flex-col h-[56px] items-start min-w-0 relative flex-1">
      <div className="flex flex-col h-[56px] items-start justify-center relative flex-shrink-0 w-full">
        <div className="border border-[#b3b3b3] border-solid flex gap-2 h-[56px] items-center px-2 py-2 relative flex-shrink-0 w-full">
          <div className="bg-[#f2f2f2] flex h-10 items-center justify-center overflow-hidden px-1 relative flex-shrink-0">
            <div className="flex h-6 items-center justify-center px-2 py-0.5 relative flex-shrink-0">
              <span className="font-normal not-italic relative text-sm text-[#4d4d4d] tracking-[0.2px] whitespace-nowrap leading-[1.4]">
                по номеру
              </span>
            </div>
            <div className="flex h-6 items-center relative w-[19px] flex-shrink-0">
              <img src={searchIcon} alt="search" className="w-4 h-4" />
            </div>
          </div>
          <div className="flex h-full items-center justify-center py-2 relative flex-shrink-0">
            <img src={searchIcon} alt="search" className="w-6 h-6" />
          </div>
          <div className="flex flex-col flex-1 h-10 items-start justify-center min-w-0 py-2 relative">
            <div className="flex items-center relative flex-shrink-0 w-full">
              <div className="flex flex-1 items-center min-w-0 overflow-hidden relative">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="font-normal not-italic relative text-base text-[#666] tracking-[0.5px] whitespace-nowrap border-none outline-none bg-transparent w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactInfo: React.FC = () => (
    <div className="flex flex-col font-normal not-rial h-[37px] items-end leading-0 relative flex-shrink-0 w-[144px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative flex-shrink-0 text-base text-[#313131] leading-[1.3]">
        {phoneNumber}
      </div>
      <div className="flex flex-col justify-center relative flex-shrink-0 text-xs text-[#666] tracking-[0.4px] leading-4">
        {supportText}
      </div>
    </div>
  );

  return (
    <header className={className}>
      {(isWebAndEnter || isMobAndLoginSearch || isMobAndLogin) && (
        <div className={
          isMobAndLogin 
            ? 'absolute inset-0' 
            : isMobAndLoginSearch 
            ? 'flex flex-col items-start relative flex-shrink-0' 
            : 'absolute inset-0 bg-white border-b border-[#f5f5f5] border-solid'
        }>
          {variant === 'mobile' && ['Login+Search', 'Login'].includes(mode) && (
            <div className={
              isMobAndLogin 
              ? 'absolute inset-0 border-b border-[#f5f5f5] border-solid bg-gradient-to-r from-[#386df7] to-[#5d9ef8]' 
              : 'flex items-start relative flex-shrink-0'
            }>
              {isMobAndLoginSearch && (
                <div className="bg-[#386df7] h-16 relative flex-shrink-0 w-80">
                  <div className="absolute inset-0 border-b border-[#f5f5f5] border-solid bg-gradient-to-r from-[#386df7] to-[#5d9ef8]" />
                  <div className="absolute flex items-center justify-between left-0 px-4 top-4 w-80">
                    <Logo property1="Mob" />
                    <ButtonCall />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {isWebAndEnter && (
        <div className="absolute flex items-center justify-between left-10 top-[30px] w-[1360px]">
          <Logo property1="Web" />
          <ContactInfo />
        </div>
      )}

      {isWebAndLoginSearch && (
        <>
          <div className="bg-gradient-to-r from-[#386df7] to-[#5d9ef8] border-b border-[#f2f2f2]">
            <div className="flex items-center justify-between px-10 py-[30px]">
              <Logo property1="Web" />
              <UserInfo />
            </div>
          </div>
          <div className="bg-white px-10 py-3 flex items-center justify-between">
            <SearchInput />
          </div>
        </>
      )}

      {isMobAndEnter && (
        <div className="absolute flex items-center justify-between left-0 px-4 top-4 w-80">
          <Logo property1="Mob" />
          <ButtonCall />
        </div>
      )}

      {isMobAndLogin && (
        <div className="absolute flex items-center justify-between left-0 px-4 top-4 w-80">
          <Logo property1="Mob" />
          <UserInfo />
        </div>
      )}

      {isMobAndLoginSearch && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-[#f5f5f5] border-solid p-4 flex items-center gap-4">
          <SearchInput />
        </div>
      )}
    </header>
  );
};

export default Header;
