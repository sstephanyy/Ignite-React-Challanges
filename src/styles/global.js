import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body{
    background: ${defaultTheme.colors['brand-purple-dark']};
  }
`;
