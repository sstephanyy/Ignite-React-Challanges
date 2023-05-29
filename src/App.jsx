import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import extendedTheme from './types/styled.d';


function App() {

  return (
    <ThemeProvider theme={extendedTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
