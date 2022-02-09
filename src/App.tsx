import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { Box, Button, Typography } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@mui/material';
import theme from '../src/theme';
import GlobalStyles from './components/GlobalStyles';

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
  const [count, setCount] = useState(0);
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <GlobalStyles />
        <Button onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </Button>
        {routing}
      </Box>
      <Typography variant="body1" color="textPrimary">
        test
      </Typography>
    </ThemeProvider>
  );
};

export default App;
