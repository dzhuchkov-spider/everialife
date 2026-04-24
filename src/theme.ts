export interface Theme {
  colors: {
    content: {
      default: string;
      medium: string;
    };
    background: {
      defaultLight: string;
    };
    action: {
      outline: {
        neutral: {
          defaultLight: string;
        };
      };
    };
    accent: string;
  };
  typography: {
    fontFamily: {
      helveticaNeueCyr: string;
    };
    fontSize: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      body1: number;
      body2: number;
      subtitle: number;
      button: number;
      caption: number;
      overline: number;
    };
    fontWeight: {
      ultraLight: number;
      thin: number;
      light: number;
      roman: number;
      medium: number;
      bold: number;
      heavy: number;
      black: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
      loose: number;
    };
    letterSpacing: {
      tight: number;
      normal: number;
      wide: number;
      wider: number;
      widest: number;
    };
  };
  textStyles: {
    overline: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    h1: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    h2: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    h3: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    h4: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    body1: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    body2: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    subtitle: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    button: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    caption: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
  };
}

export const theme: Theme = {
  colors: {
    content: {
      default: '#191919',
      medium: '#666666',
    },
    background: {
      defaultLight: '#ffffff',
    },
    action: {
      outline: {
        neutral: {
          defaultLight: '#f2f2f2',
        },
      },
    },
    accent: '#b70d18',
  },
  typography: {
    fontFamily: {
      helveticaNeueCyr: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
    },
    fontSize: {
      h1: 96,
      h2: 60,
      h3: 48,
      h4: 32,
      body1: 20,
      body2: 16,
      subtitle: 16,
      button: 16,
      caption: 14,
      overline: 10,
    },
    fontWeight: {
      ultraLight: 100,
      thin: 200,
      light: 300,
      roman: 400,
      medium: 500,
      bold: 700,
      heavy: 800,
      black: 900,
    },
    lineHeight: {
      tight: 0.9,
      normal: 1.3,
      relaxed: 1.4,
      loose: 1.5,
    },
    letterSpacing: {
      tight: -0.5,
      normal: 0,
      wide: 0.15,
      wider: 0.2,
      widest: 1.2,
    },
  },
  textStyles: {
    overline: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 12,
      letterSpacing: 1.2,
    },
    h1: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 96,
      fontWeight: 300,
      lineHeight: 117,
      letterSpacing: -0.5,
    },
    h2: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 60,
      fontWeight: 300,
      lineHeight: 78,
      letterSpacing: -0.5,
    },
    h3: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 56,
      letterSpacing: 0,
    },
    h4: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 42,
      letterSpacing: 0.2,
    },
    body1: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 22.4,
      letterSpacing: 0.5,
    },
    body2: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 19.6,
      letterSpacing: 0.2,
    },
    subtitle: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 16,
      letterSpacing: 0.1,
    },
    button: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 20.8,
      letterSpacing: 0.3,
    },
    caption: {
      fontFamily: "'Helvetica Neue Cyrillic', system-ui, 'Segoe UI', Roboto, sans-serif",
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 16,
      letterSpacing: 0.4,
    },
  },
};

// Helper functions for applying text styles
export const getTextStyle = (styleName: keyof Theme['textStyles']) => {
  const style = theme.textStyles[styleName];
  return {
    fontFamily: style.fontFamily,
    fontSize: `${style.fontSize}px`,
    fontWeight: style.fontWeight,
    lineHeight: `${style.lineHeight}px`,
    letterSpacing: `${style.letterSpacing}px`,
  };
};

// CSS-in-JS style helpers
export const cssTheme = {
  colors: theme.colors,
  typography: theme.typography,
  textStyles: Object.fromEntries(
    Object.entries(theme.textStyles).map(([key, style]) => [
      key,
      {
        fontFamily: style.fontFamily,
        fontSize: `${style.fontSize}px`,
        fontWeight: style.fontWeight,
        lineHeight: `${style.lineHeight}px`,
        letterSpacing: `${style.letterSpacing}px`,
      },
    ])
  ),
};

// Export individual CSS custom properties for use in CSS files
export const cssVariables = {
  '--color-content-default': theme.colors.content.default,
  '--color-content-medium': theme.colors.content.medium,
  '--color-background-default-light': theme.colors.background.defaultLight,
  '--color-action-outline-neutral-default-light': theme.colors.action.outline.neutral.defaultLight,
  '--color-accent': theme.colors.accent,
  '--font-family-helvetica-neue-cyr': theme.typography.fontFamily.helveticaNeueCyr,
  '--font-size-h1': `${theme.textStyles.h1.fontSize}px`,
  '--font-size-h2': `${theme.textStyles.h2.fontSize}px`,
  '--font-size-h3': `${theme.textStyles.h3.fontSize}px`,
  '--font-size-h4': `${theme.textStyles.h4.fontSize}px`,
  '--font-size-body1': `${theme.textStyles.body1.fontSize}px`,
  '--font-size-body2': `${theme.textStyles.body2.fontSize}px`,
  '--font-size-subtitle': `${theme.textStyles.subtitle.fontSize}px`,
  '--font-size-button': `${theme.textStyles.button.fontSize}px`,
  '--font-size-caption': `${theme.textStyles.caption.fontSize}px`,
  '--font-size-overline': `${theme.textStyles.overline.fontSize}px`,
  '--line-height-h1': `${theme.textStyles.h1.lineHeight}px`,
  '--line-height-h2': `${theme.textStyles.h2.lineHeight}px`,
  '--line-height-h3': `${theme.textStyles.h3.lineHeight}px`,
  '--line-height-h4': `${theme.textStyles.h4.lineHeight}px`,
  '--line-height-body1': `${theme.textStyles.body1.lineHeight}px`,
  '--line-height-body2': `${theme.textStyles.body2.lineHeight}px`,
  '--line-height-subtitle': `${theme.textStyles.subtitle.lineHeight}px`,
  '--line-height-button': `${theme.textStyles.button.lineHeight}px`,
  '--line-height-caption': `${theme.textStyles.caption.lineHeight}px`,
  '--line-height-overline': `${theme.textStyles.overline.lineHeight}px`,
  '--letter-spacing-h1': `${theme.textStyles.h1.letterSpacing}px`,
  '--letter-spacing-h2': `${theme.textStyles.h2.letterSpacing}px`,
  '--letter-spacing-h3': `${theme.textStyles.h3.letterSpacing}px`,
  '--letter-spacing-h4': `${theme.textStyles.h4.letterSpacing}px`,
  '--letter-spacing-body1': `${theme.textStyles.body1.letterSpacing}px`,
  '--letter-spacing-body2': `${theme.textStyles.body2.letterSpacing}px`,
  '--letter-spacing-subtitle': `${theme.textStyles.subtitle.letterSpacing}px`,
  '--letter-spacing-button': `${theme.textStyles.button.letterSpacing}px`,
  '--letter-spacing-caption': `${theme.textStyles.caption.letterSpacing}px`,
  '--letter-spacing-overline': `${theme.textStyles.overline.letterSpacing}px`,
};

export default theme;
