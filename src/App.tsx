import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { Box } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

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
    <Box>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      {routing}
    </Box>
  );
};

export default App;
