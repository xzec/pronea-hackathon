import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const ExamPage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </Button>
      <Typography variant="body1" color="textPrimary">
        test
      </Typography>
    </Box>
  );
};

export default ExamPage;
