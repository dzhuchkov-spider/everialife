import React from 'react';
import type { FooterProps } from '../../types/layout';
import { COLORS, SPACING } from '../../types/layout';

const EnhancedFooter: React.FC<FooterProps> = ({
  property1 = 'Web',
  showIcon = true,
}) => {
  const getFooterStyles = () => ({
    width: 1439,
    height: 82,
    paddingLeft: SPACING.XXXL,
    paddingRight: SPACING.XXXL,
    paddingTop: SPACING.MD,
    paddingBottom: SPACING.MD,
    left: -1,
    top: 998,
    position: 'absolute' as const,
    borderTop: `1px ${COLORS.OUTLINE_HOVER} solid`,
    justifyContent: 'flex-start' as const,
    alignItems: 'center' as const,
    gap: 10,
    display: 'inline-flex' as const,
  });

  const getFooterContentStyles = () => ({
    width: 1352,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    display: 'flex' as const,
  });

  const getFooterTextStyles = () => ({
    flex: '1 1 0',
    justifyContent: 'center' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
  });

  const getFooterIconStyles = () => ({
    width: 64,
    height: 50.64,
    position: 'relative' as const,
  });

  const renderFooterIcon = () => (
    <div style={getFooterIconStyles()}>
      <div style={{ width: 41.02, height: 34.09, left: 0, top: 16.56, position: 'absolute', background: COLORS.PRIMITIVES_YELLOW }} />
      <div style={{ width: 39.87, height: 34.16, left: 24.13, top: 0, position: 'absolute', background: COLORS.PRIMITIVES_YELLOW }} />
    </div>
  );

  return (
    <footer style={getFooterStyles()}>
      <div style={getFooterContentStyles()}>
        <div style={getFooterTextStyles()}>
          <span style={{ color: '#313131', fontSize: 16, fontFamily: 'HelveticaNeueCyr', fontWeight: 400, lineHeight: 24, wordWrap: 'break-word' as const }}>
            © Портал продаж СК «Эверия Лайф»
            <br />
            Официальный сайт компании – 
          </span>
          <span style={{ color: COLORS.PRIMARY, fontSize: 16, fontFamily: 'HelveticaNeueCyr', fontWeight: 400, lineHeight: 24, wordWrap: 'break-word' as const }}>
            everialife.ru
          </span>
        </div>
        {showIcon && renderFooterIcon()}
      </div>
    </footer>
  );
};

export default EnhancedFooter;
