import React from 'react';
import type { HeaderProps } from '../../types/layout';
import { COLORS, TYPOGRAPHY, SPACING } from '../../types/layout';

const EnhancedHeader: React.FC<HeaderProps> = ({
  property1 = 'Web',
  property2 = 'Login',
  showMenu = true,
  showIcon = true,
  userName = 'AK',
  onLogout,
  onSearch,
}) => {
  const isWeb = property1 === 'Web';
  const isLogin = property2 === 'Login';

  const getHeaderStyles = () => ({
    left: 0,
    top: 0,
    position: 'absolute' as const,
    background: 'linear-gradient(90deg, #386DF6 0%, #5D9EF8 100%)',
    justifyContent: 'flex-start' as const,
    alignItems: 'flex-start' as const,
    display: 'inline-flex' as const,
    width: isWeb ? 1440 : 320,
    height: isWeb ? 129 : 64,
  });

  const getTopBarStyles = () => ({
    width: 1441,
    paddingLeft: SPACING.XXXL,
    paddingRight: SPACING.XXXL,
    paddingTop: SPACING.XXXL,
    paddingBottom: SPACING.XXXL,
    borderBottom: `1px ${COLORS.BACKGROUND_LIGHT} solid`,
    justifyContent: 'space-between' as const,
    alignItems: 'flex-start' as const,
    display: 'inline-flex' as const,
  });

  const getLogoStyles = () => ({
    width: 421,
    height: 46,
    position: 'relative' as const,
  });

  const getLogoInnerStyles = () => ({
    width: 210.91,
    height: 46,
    left: 0,
    top: 0,
    position: 'absolute' as const,
    overflow: 'hidden' as const,
  });

  const getLogoShapeStyles = (index: number) => {
    const shapes = [
      { width: 27.90, height: 33.28, left: 0.07, top: 12.64 },
      { width: 29.29, height: 32.02, left: 28.39, top: 13.28 },
      { width: 27.90, height: 33.28, left: 58.11, top: 12.64 },
      { width: 18.73, height: 32.02, left: 91.10, top: 13.28 },
      { width: 8.73, height: 45.11, left: 112.15, top: 0.18 },
      { width: 27.59, height: 33.28, left: 124.81, top: 12.64 },
      { width: 3.59, height: 30.24, left: 160.91, top: 0.01, background: '#CAD1F9' },
      { width: 5.14, height: 30.06, left: 169.30, top: 0.18, background: '#CAD1F9' },
      { width: 15.51, height: 30.24, left: 176.62, top: 0.01, background: '#CAD1F9' },
      { width: 18.31, height: 22.46, left: 192.57, top: 8.21, background: '#CAD1F9' },
    ];
    
    return {
      position: 'absolute' as const,
      background: index >= 6 ? '#CAD1F9' : 'white',
      ...shapes[index],
    };
  };

  const getUserActionsStyles = () => ({
    justifyContent: 'flex-start' as const,
    alignItems: 'center' as const,
    gap: SPACING.XL,
    display: 'flex' as const,
  });

  const getButtonStyles = (style: 'Ghost' | 'Contained') => ({
    padding: SPACING.SM,
    background: style === 'Ghost' ? 'rgba(255, 255, 255, 0)' : COLORS.PRIMARY,
    overflow: 'hidden' as const,
    borderRadius: 4,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    gap: SPACING.SM,
    display: 'flex' as const,
    cursor: 'pointer',
  });

  const getButtonTextStyles = () => ({
    justifyContent: 'center' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    color: COLORS.CONTENT_ON_BACKGROUND,
    fontSize: TYPOGRAPHY.FONT_SIZES.MD,
    fontFamily: TYPOGRAPHY.FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 20.80,
    letterSpacing: 0.30,
    wordWrap: 'break-word' as const,
  });

  const getAvatarStyles = () => ({
    width: 46,
    height: 46,
    background: COLORS.CONTENT_PRIMARY,
    overflow: 'hidden' as const,
    borderRadius: 999,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    display: 'flex' as const,
  });

  const getAvatarTextStyles = () => ({
    width: 19,
    alignSelf: 'stretch' as const,
    textAlign: 'center' as const,
    justifyContent: 'center' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    color: COLORS.CONTENT_ON_BACKGROUND,
    fontSize: TYPOGRAPHY.FONT_SIZES.SM,
    fontFamily: TYPOGRAPHY.FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 19.60,
    letterSpacing: 0.20,
    wordWrap: 'break-word' as const,
  });

  const getMenuBarStyles = () => ({
    width: 1441,
    paddingLeft: SPACING.XXXL,
    paddingRight: SPACING.XXXL,
    paddingTop: SPACING.MD,
    paddingBottom: SPACING.MD,
    background: COLORS.BACKGROUND,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    display: 'inline-flex' as const,
  });

  const getMenuItemsStyles = () => ({
    justifyContent: 'flex-start' as const,
    alignItems: 'flex-start' as const,
    gap: 80,
    display: 'flex' as const,
  });

  const getMenuItemStyles = () => ({
    justifyContent: 'center' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    color: COLORS.CONTENT_DEFAULT,
    fontSize: TYPOGRAPHY.FONT_SIZES.LG,
    fontFamily: TYPOGRAPHY.FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 26,
    letterSpacing: 0.20,
    wordWrap: 'break-word' as const,
    cursor: 'pointer',
  });

  const getDropdownIconStyles = () => ({
    width: 16,
    height: 16,
    position: 'relative' as const,
  });

  const getSearchInputStyles = () => ({
    width: 393,
    height: 56,
    flexDirection: 'column' as const,
    justifyContent: 'flex-start' as const,
    alignItems: 'flex-start' as const,
    display: 'inline-flex' as const,
  });

  const getSearchContainerStyles = () => ({
    alignSelf: 'stretch' as const,
    height: 56,
    flexDirection: 'column' as const,
    justifyContent: 'center' as const,
    alignItems: 'flex-start' as const,
    display: 'flex' as const,
  });

  const getSearchInnerStyles = () => ({
    alignSelf: 'stretch' as const,
    height: 56,
    paddingTop: SPACING.SM,
    paddingBottom: SPACING.SM,
    paddingLeft: SPACING.SM,
    paddingRight: SPACING.XL,
    background: 'rgba(255, 255, 255, 0)',
    outline: `1px ${COLORS.OUTLINE_DEFAULT} solid`,
    outlineOffset: -1,
    justifyContent: 'flex-start' as const,
    alignItems: 'center' as const,
    gap: SPACING.SM,
    display: 'inline-flex' as const,
  });

  const getChipStyles = () => ({
    height: 40,
    paddingLeft: SPACING.SM,
    paddingRight: SPACING.SM,
    background: COLORS.BACKGROUND_LIGHT,
    overflow: 'hidden' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    display: 'flex' as const,
  });

  const getChipLabelStyles = () => ({
    height: 24,
    paddingLeft: SPACING.SM,
    paddingRight: SPACING.SM,
    paddingTop: 2,
    paddingBottom: 2,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    display: 'flex' as const,
  });

  const getChipTextStyles = () => ({
    color: COLORS.INTERACTIVE_SELECTED,
    fontSize: TYPOGRAPHY.FONT_SIZES.SM,
    fontFamily: TYPOGRAPHY.FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 19.60,
    letterSpacing: 0.20,
    wordWrap: 'break-word' as const,
  });

  const renderLogo = () => (
    <div style={getLogoStyles()}>
      <div style={getLogoInnerStyles()}>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} style={getLogoShapeStyles(i)} />
        ))}
      </div>
    </div>
  );

  const renderUserActions = () => (
    <div style={getUserActionsStyles()}>
      <div style={getButtonStyles('Ghost')} onClick={onLogout}>
        <div style={getButtonTextStyles()}>Выйти</div>
      </div>
      <div style={getAvatarStyles()}>
        <div style={getAvatarTextStyles()}>{userName}</div>
      </div>
    </div>
  );

  const renderMenuItems = () => {
    const items = ['Главная', 'Договоры', 'Отчёты', 'Сервис'];
    const activeIndex = 0; // Главная активна

    return (
      <div style={getMenuItemsStyles()}>
        {items.map((item, index) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <div style={getMenuItemStyles()}>
              {item}
            </div>
            {index > 0 && (
              <div style={getDropdownIconStyles()}>
                <div style={{ width: 8, height: 4, left: 4, top: 7, position: 'absolute', background: COLORS.CONTENT_PRESSED }} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderSearchInput = () => (
    <div style={getSearchInputStyles()}>
      <div style={getSearchContainerStyles()}>
        <div style={getSearchInnerStyles()}>
          <div style={getChipStyles()}>
            <div style={getChipLabelStyles()}>
              <div style={getChipTextStyles()}>по номеру</div>
            </div>
            <div style={{ width: 19, height: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 18, height: 18, position: 'relative' }}>
                <div style={{ width: 9, height: 4.50, left: 4.50, top: 7.88, position: 'absolute', background: COLORS.CONTENT_PRESSED }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'stretch', paddingTop: SPACING.SM, paddingBottom: SPACING.SM, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
            <div style={{ width: 24, height: 24, position: 'relative' }}>
              <div style={{ width: 17.49, height: 17.49, left: 3.26, top: 3.26, position: 'absolute', background: COLORS.INTERACTIVE_DEFAULT }} />
            </div>
          </div>
          <div style={{ flex: '1 1 0', height: 40, paddingTop: SPACING.SM, paddingBottom: SPACING.SM, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                <input
                  type="text"
                  placeholder="Поиск договора"
                  style={{
                    color: COLORS.INTERACTIVE_DEFAULT,
                    fontSize: TYPOGRAPHY.FONT_SIZES.MD,
                    fontFamily: TYPOGRAPHY.FONT_FAMILY,
                    fontWeight: 400,
                    lineHeight: 22.40,
                    letterSpacing: 0.50,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    width: '100%',
                  }}
                  onChange={(e) => onSearch?.(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={getHeaderStyles()}>
      <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
        {/* Top bar */}
        <div style={getTopBarStyles()}>
          {renderLogo()}
          {isLogin && renderUserActions()}
        </div>

        {/* Menu bar */}
        {showMenu && (
          <div style={getMenuBarStyles()}>
            {renderMenuItems()}
            {renderSearchInput()}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedHeader;
