import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const defaultTheme = {
  color: {
    main: '#61DAFB',
  },
} as const;

type Props = {
  children: React.ReactNode;
  theme?: typeof defaultTheme;
};

export const ThemeProvider: React.FC<Props> = ({
  children,
  theme = defaultTheme,
}: Props) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
