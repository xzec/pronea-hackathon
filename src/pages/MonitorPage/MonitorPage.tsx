import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './MonitorPage.styles';
import Flags from './Flags';
import Content from '../../components/Content';

const MonitorPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box flexGrow={1}>
        <Content>
          <Typography variant="body1" color="textPrimary"></Typography>
        </Content>
      </Box>
      <Box width={300}>
        <Flags />
      </Box>
    </Box>
  );
};

export default MonitorPage;
