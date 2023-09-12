import { createStitches } from '@stitches/react';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches<'', {}, Theme>({
  theme: {
    colors: {
      primary: '#EBCFB6',
      primaryHighlighted: '#ECB380',
      onPrimary: '#FFFFFF',
      onSecondary: '#FFFFFF',
      secondary: '#D0B8A8',
      secondaryHighlighted: '#C89C7E',
    },
    radii: {
      small: '4px',
    },
    space: {
      small: '4px',
      medium: '8px',
      large: '16px',
      xlarge: '24px',
    },
    lineHeights: {
      small: '16px',
      medium: '24px',
    },
    letterSpacings: {
      small: '4%',
    },
  },
});
