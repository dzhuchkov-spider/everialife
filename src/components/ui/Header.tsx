import React from 'react';
import { theme } from '../../theme';

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
  logoText = 'портал продаж',
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

  const getHeaderStyles = () => {
    const baseStyles = {
      position: 'relative' as const,
      backgroundColor: 'var(--basic/primary/pure, #386df7)',
      fontFamily: theme.typography.fontFamily.helveticaNeueCyr,
    };

    if (variant === 'mobile' && ['Enter', 'Login'].includes(mode)) {
      return {
        ...baseStyles,
        height: '64px',
        width: '320px',
      };
    } else if (isMobAndLoginSearch) {
      return {
        ...baseStyles,
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-start',
      };
    } else {
      return {
        ...baseStyles,
        height: '106px',
        width: '1440px',
      };
    }
  };

  const Logo: React.FC<{ property1?: 'Mob' | 'Web' }> = ({ property1 = 'Mob' }) => {
    const isMob = property1 === 'Mob';
    const isWeb = property1 === 'Web';

    return (
      <div style={{
        position: 'relative',
        height: isWeb ? '46px' : '32px',
        width: isWeb ? '421px' : '210px',
      }}>
        {isMob && (
          <>
            <div style={{
              position: 'absolute',
              top: '15.63%',
              bottom: '12.72%',
              left: 0,
              right: '73.81%',
              fontSize: '10px',
              color: 'white',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {logoText}
            </div>
            <div style={{
              position: 'absolute',
              left: '33.35%',
              right: '66.65%',
              top: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '2px',
                height: '100%',
                background: 'white',
                transform: 'rotate(90deg)',
              }} />
            </div>
          </>
        )}
        <div style={{
          position: 'absolute',
          ...(isWeb ? { 
            top: 0, 
            bottom: 0, 
            left: 0, 
            right: '49.9%' 
          } : {
            top: '50%',
            transform: 'translateY(-50%)',
            height: '28px',
            left: 0,
            right: '38.87%',
            overflow: 'hidden',
          }),
        }}>
          {isWeb ? (
            <div style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '18px',
              color: '#386df7',
            }}>
              KAPLIFE
            </div>
          ) : (
            <div style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '14px',
              color: '#386df7',
            }}>
              KAPLIFE
            </div>
          )}
        </div>
      </div>
    );
  };

  const ButtonCall: React.FC = () => (
    <div style={{
      backgroundColor: 'var(--action/fill/primary/default, #386df7)',
      position: 'relative',
      borderRadius: '4px',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    }} onClick={onCallClick}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', inset: '21.88%' }}>
        <path d="M6.62 10.79c1.44-2.83 3.76-5.14 6.59-6.59l2.2 2.2c.27.27.67.36 1.02.24 1.12-.37 2.33-.57 3.57-.57.62 0 1.12-.5 1.12-1.12V2.12C20.5 1.5 20 1 19.38 1 10.57 1 3 8.57 3 17.38c0 .62.5 1.12 1.12 1.12h3.84c.62 0 1.12-.5 1.12-1.12 0-1.24.2-2.45.57-3.57.12-.35.03-.74-.24-1.02l-2.79-2.8z" fill="white"/>
      </svg>
    </div>
  );

  const UserInfo: React.FC = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    }}>
      <div style={{
        backgroundColor: 'var(--content/primary, #437aec)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '999px',
        width: '32px',
        height: '32px',
        flexShrink: 0,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          fontFamily: theme.typography.fontFamily.helveticaNeueCyr,
          fontWeight: 400,
          fontStyle: 'normal',
          position: 'relative',
          fontSize: '14px',
          color: 'var(--content/default-on-background, white)',
          textAlign: 'center',
          letterSpacing: '0.2px',
          width: '19px',
          lineHeight: '1.4',
        }}>
          {userName}
        </div>
      </div>
      <div style={{
        overflow: 'hidden',
        position: 'relative',
        width: '24px',
        height: '24px',
        flexShrink: 0,
        cursor: 'pointer',
      }} onClick={onLoginClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', top: '4.17%', bottom: '4.17%', left: '33.33%', right: '4.17%' }}>
          <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="white" transform="scaleX(-1)"/>
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', top: '29.17%', bottom: '29.17%', left: '4.17%', right: '37.5%' }}>
          <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="white" transform="rotate(-90deg)"/>
        </svg>
      </div>
    </div>
  );

  const SearchInput: React.FC = () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '56px',
      alignItems: 'flex-start',
      minWidth: 0,
      position: 'relative',
      flex: '1 0 0',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '56px',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0,
        width: '100%',
      }}>
        <div style={{
          border: '1px solid var(--interactive/outline/neutral-default, #b3b3b3)',
          borderStyle: 'solid',
          display: 'flex',
          gap: '8px',
          height: '56px',
          alignItems: 'center',
          paddingLeft: '8px',
          paddingRight: '16px',
          paddingTop: '8px',
          paddingBottom: '8px',
          position: 'relative',
          flexShrink: 0,
          width: '100%',
        }}>
          <div style={{
            backgroundColor: 'var(--background/secondary-light, #f2f2f2)',
            display: 'flex',
            height: '40px',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingLeft: '4px',
            position: 'relative',
            flexShrink: 0,
          }}>
            <div style={{
              display: 'flex',
              height: '24px',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: '8px',
              paddingRight: '8px',
              paddingTop: '2px',
              paddingBottom: '2px',
              position: 'relative',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: theme.typography.fontFamily.helveticaNeueCyr,
                fontWeight: 400,
                fontStyle: 'normal',
                position: 'relative',
                fontSize: '14px',
                color: 'var(--interactive/neutral/selected, #4d4d4d)',
                letterSpacing: '0.2px',
                whiteSpace: 'nowrap',
                lineHeight: '1.4',
              }}>
                по номеру
              </span>
            </div>
            <div style={{
              display: 'flex',
              height: '24px',
              alignItems: 'relative',
              width: '19px',
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: 'relative', width: '16px', height: '16px' }}>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#666"/>
              </svg>
            </div>
          </div>
          <div style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '8px',
            paddingBottom: '8px',
            position: 'relative',
            flexShrink: 0,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: 'relative', width: '24px', height: '24px' }}>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#666"/>
            </svg>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 0',
            height: '40px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minWidth: 0,
            paddingTop: '8px',
            paddingBottom: '8px',
            position: 'relative',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              flexShrink: 0,
              width: '100%',
            }}>
              <div style={{
                display: 'flex',
                flex: '1 0 0',
                alignItems: 'center',
                minWidth: 0,
                overflow: 'hidden',
                position: 'relative',
              }}>
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  onChange={(e) => onSearch?.(e.target.value)}
                  style={{
                    fontFamily: theme.typography.fontFamily.helveticaNeueCyr,
                    fontWeight: 400,
                    fontStyle: 'normal',
                    position: 'relative',
                    fontSize: '16px',
                    color: 'var(--interactive/neutral/default, #666)',
                    letterSpacing: '0.5px',
                    whiteSpace: 'nowrap',
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactInfo: React.FC = () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.typography.fontFamily.helveticaNeueCyr,
      fontWeight: 400,
      fontStyle: 'normal',
      height: '37px',
      alignItems: 'flex-end',
      lineHeight: 0,
      position: 'relative',
      flexShrink: 0,
      width: '144px',
      whiteSpace: 'nowrap',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0,
        fontSize: '16px',
        color: '#313131',
        lineHeight: '1.3',
      }}>
        {phoneNumber}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0,
        fontSize: '12px',
        color: 'var(--action/content/neutral/default, #666)',
        letterSpacing: '0.4px',
        lineHeight: '16px',
      }}>
        {supportText}
      </div>
    </div>
  );

  return (
    <header className={className} style={getHeaderStyles()}>
      {(isWebAndEnter || isMobAndLoginSearch || isMobAndLogin) && (
        <div style={{
          ...(isMobAndLogin ? { 
            position: 'absolute', 
            top: 0, 
            bottom: 0, 
            left: 0, 
            right: 0 
          } : isMobAndLoginSearch ? { 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            position: 'relative', 
            flexShrink: 0 
          } : { 
            position: 'absolute', 
            top: 0, 
            bottom: 0, 
            left: 0, 
            right: 0, 
            backgroundColor: 'white', 
            borderBottom: '1px solid #f5f5f5', 
            borderStyle: 'solid' 
          }),
        }}>
          {variant === 'mobile' && ['Login+Search', 'Login'].includes(mode) && (
            <div style={{
              ...(isMobAndLogin ? { 
                position: 'absolute', 
                top: 0, 
                bottom: 0, 
                left: 0, 
                right: 0, 
                borderBottom: '1px solid #f5f5f5', 
                borderStyle: 'solid',
                backgroundImage: 'linear-gradient(90deg, rgb(56, 109, 246) 0%, rgb(93, 158, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)'
              } : { 
                display: 'flex', 
                alignItems: 'flex-start', 
                position: 'relative', 
                flexShrink: 0 
              }),
            }}>
              {isMobAndLoginSearch && (
                <div style={{
                  backgroundColor: 'var(--basic/primary/pure, #386df7)',
                  height: '64px',
                  position: 'relative',
                  flexShrink: 0,
                  width: '320px',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderBottom: '1px solid #f5f5f5',
                    borderStyle: 'solid',
                    backgroundImage: 'linear-gradient(90deg, rgb(56, 109, 246) 0%, rgb(93, 158, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    left: 0,
                    paddingLeft: '16px',
                    top: '16px',
                    width: '320px',
                  }}>
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
        <div style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          left: '40px',
          top: '30px',
          width: '1360px',
        }}>
          <Logo property1="Web" />
          <ContactInfo />
        </div>
      )}

      {isMobAndEnter && (
        <div style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          left: 0,
          paddingLeft: '16px',
          top: '16px',
          width: '320px',
        }}>
          <Logo property1="Mob" />
          <ButtonCall />
        </div>
      )}

      {isMobAndLogin && (
        <div style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          left: 0,
          paddingLeft: '16px',
          top: '16px',
          width: '320px',
        }}>
          <Logo property1="Mob" />
          <UserInfo />
        </div>
      )}

      {isMobAndLoginSearch && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderBottom: '1px solid #f5f5f5',
          borderStyle: 'solid',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <SearchInput />
        </div>
      )}
    </header>
  );
};

export default Header;
