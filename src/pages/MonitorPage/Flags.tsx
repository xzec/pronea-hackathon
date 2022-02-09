import React from 'react';
import { Box } from '@mui/material';
import Flag from './Flag';

const Flags: React.FC = () => {
  return (
    <Box sx={{ color: "white" }}>
      <Flag />
      <Flag />
      <Flag />
    </Box>
  );
};

export default Flags;
