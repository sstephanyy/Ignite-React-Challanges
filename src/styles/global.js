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
    background: ${defaultTheme.colors['base-background']};
    color: ${defaultTheme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: ${defaultTheme.fonts['regular']};
    font-weight: 400;
    font-size: ${defaultTheme.textSizes['text-regular-m']}
  }

  a{
    text-decoration: none;
  }
`;
