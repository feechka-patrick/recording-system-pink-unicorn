
import Header from './components/Header/Header';
import Router from './router/Router';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { $auth } from 'auth/model';
import {useStore} from 'effector-react'
import { ThemeOptions } from '@mui/material/styles';


export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#86c232',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#161b1c',
    },
    // divider: '#86c232',
  },
};


export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#86c232',
    },
    secondary: {
      main: '#d2c9c9',
      dark: '#545050',
    },
    background: {
      default: '#f7f7f7',
      paper: 'rgba(255,255,255,0.75)',
    },
    divider: '#ffffff',
    text: {
      primary: '#000000',
    },
  },
};

const darkTheme = createTheme(darkThemeOptions);
const lightTheme = createTheme(lightThemeOptions);

const App = () => {
  const auth = useStore($auth);
  return (
    <>
    <ThemeProvider theme={darkTheme}>
       {auth && <Header/>}
        <Router />
    </ThemeProvider>
    </>
  );
}

export default App;
