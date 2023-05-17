
import Header from './components/Header/Header';
import Router from './router/Router';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from './styles/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: colors['accent-text'],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

const App = () => {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Header/>
      <Router />
    </ThemeProvider>
    </>
  );
}

export default App;
