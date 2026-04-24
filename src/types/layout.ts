import type { CSSProperties } from 'react';

// Base style interfaces
export interface BaseStyleProps extends CSSProperties {
  width?: number | string;
  height?: number | string;
  position?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky';
  background?: string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  left?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  display?: 'inline-flex' | 'flex' | 'inline-block' | 'block' | 'none';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gap?: number | string;
  padding?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  margin?: number | string;
  border?: string;
  borderRadius?: number | string;
  outline?: string;
  outlineOffset?: string | number;
  flex?: string | number;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  boxShadow?: string;
  transform?: string;
  transformOrigin?: string;
  opacity?: number;
  zIndex?: number;
}

// Typography interfaces
export interface TypographyProps {
  color?: string;
  fontSize?: number | string;
  fontFamily?: string;
  fontWeight?: number | string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  wordWrap?: 'normal' | 'break-word';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textOverflow?: 'clip' | 'ellipsis';
}

// Component specific interfaces
export interface LogoProps extends BaseStyleProps {
  property1?: 'Web' | 'Mob';
}

export interface ButtonProps extends BaseStyleProps {
  ctaLabel?: boolean;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  size?: 'Normal' | 'Large';
  state?: 'Resting' | 'Hovered' | 'Pressed' | 'Disabled';
  style?: 'Contained' | 'Ghost' | 'Outlined';
  disabled?: boolean;
}

export interface InputProps extends BaseStyleProps {
  disabled?: boolean;
  empty?: boolean;
  error?: boolean;
  expandable?: boolean;
  label?: boolean;
  leadingIcon?: boolean;
  placeholder?: boolean;
  populated?: boolean;
  resultsNavigation?: boolean;
  supportingText?: boolean;
  trailingIcon1?: boolean;
  trailingIcon2?: boolean;
  type?: string;
  chipType?: 'Default' | 'Filter';
  chipSize?: 'Small' | 'Medium';
  chipState?: 'Resting' | 'Hovered' | 'Pressed';
  chipStyle?: 'Contained' | 'Contained Light' | 'Outlined';
}

export interface CardProps extends BaseStyleProps {
  variant?: 'default' | 'surface' | 'outlined';
}

export interface MenuItemProps extends BaseStyleProps {
  label: string;
  active?: boolean;
  hasDropdown?: boolean;
}

export interface ContractCardProps extends BaseStyleProps {
  title: string;
  description?: string;
  status?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface ServiceCardProps extends BaseStyleProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface HeaderProps extends BaseStyleProps {
  property1?: 'Web' | 'Mob';
  property2?: 'Enter' | 'Login' | 'Login+Search';
  showMenu?: boolean;
  showIcon?: boolean;
  userName?: string;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
}

export interface MainContentProps extends BaseStyleProps {
  contracts?: ContractCardProps[];
  reports?: ServiceCardProps[];
  services?: ServiceCardProps[];
}

export interface FooterProps extends BaseStyleProps {
  property1?: 'Web' | 'Mob';
  showIcon?: boolean;
}

// Layout interfaces
export interface PageLayoutProps extends BaseStyleProps {
  header?: React.ReactNode;
  mainContent?: React.ReactNode;
  footer?: React.ReactNode;
}

// Color constants
export const COLORS = {
  PRIMARY: '#386DF7',
  PRIMARY_LIGHT: '#5D9EF8',
  SECONDARY: '#437AEC',
  BACKGROUND: '#FFFFFF',
  BACKGROUND_SECONDARY: '#FAFAFA',
  BACKGROUND_LIGHT: '#F2F2F2',
  BACKGROUND_WARNING: '#FFF9EF',
  CONTENT_PRIMARY: '#437AEC',
  CONTENT_ON_BACKGROUND: '#FFFFFF',
  CONTENT_DEFAULT: '#191919',
  CONTENT_MEDIUM: '#666666',
  CONTENT_PRESSED: '#333333',
  INTERACTIVE_DEFAULT: '#666666',
  INTERACTIVE_SELECTED: '#4D4D4D',
  OUTLINE_DEFAULT: '#B3B3B3',
  OUTLINE_SECONDARY: '#CCCCCC',
  OUTLINE_HOVER: '#F2F2F2',
  PRIMITIVES_YELLOW: '#C4703E',
  BORDER_DEFAULT: '#F5F5F5',
} as const;

// Typography constants
export const TYPOGRAPHY = {
  FONT_FAMILY: 'HelveticaNeueCyr',
  FONT_SIZES: {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 20,
    XL: 24,
    XXL: 32,
  },
  LINE_HEIGHTS: {
    TIGHT: 1.2,
    NORMAL: 1.3,
    RELAXED: 1.4,
    LOOSE: 1.6,
  },
  LETTER_SPACING: {
    TIGHT: 0.2,
    NORMAL: 0.3,
    RELAXED: 0.4,
    LOOSE: 0.5,
  },
} as const;

// Spacing constants
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 20,
  XXL: 24,
  XXXL: 32,
  XXXXL: 40,
} as const;
