
import Header from './components/Header/Header';
import Router from './router/Router';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from './styles/colors';
import styled from '@emotion/styled';

const theme = createTheme({
  palette: {
    primary: {
      main: colors['accent-text'],
      contrastText: colors['primary-text'],
    },
    secondary: {
      main: colors['primary-text'],
      contrastText: colors['primary-text'],
    },
    background: {
      paper: colors['main-container-background']
    },
    action: {
      disabled: colors['primary-text']
    },
  },
});

const ColorProvider = styled.div`color: #fff`;

const App = () => {

  return (
    <>
    <ThemeProvider theme={theme}>
      <ColorProvider>
        <Header/>
        <Router />
      </ColorProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
