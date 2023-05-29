import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import extendedTheme from './types/styled.d';
import { RouterPages } from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
 
  return (
    <ThemeProvider theme={extendedTheme}>

      <GlobalStyle />
      <BrowserRouter>
        <RouterPages/>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
