import { initializeApp } from 'firebase/app';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@mui/material';
import theme from '../src/theme';
import GlobalStyles from './components/GlobalStyles';
import { StyledEngineProvider } from '@mui/material/styles';
import { ExamProvider } from './contexts/ExamContext';
import { SnackbarProvider } from './contexts/SnackbarContext';

const firebaseConfig = {
  apiKey: 'AIzaSyCU0FHAVPib7mG43DSu3ZfUJmv7TWAP7JY',
  authDomain: 'pronea-hackathon.firebaseapp.com',
  databaseURL:
    'https://pronea-hackathon-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'pronea-hackathon',
  storageBucket: 'pronea-hackathon.appspot.com',
  messagingSenderId: '160994317805',
  appId: '1:160994317805:web:0b67d63fb71e5ab41c03e4'
};

initializeApp(firebaseConfig);

const App = () => {
  const routing = useRoutes(routes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <ExamProvider>
            <GlobalStyles />
            {routing}
          </ExamProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
