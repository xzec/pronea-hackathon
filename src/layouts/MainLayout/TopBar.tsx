import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import { useStyles } from './MainLayout.styles';
import React from 'react';

interface TopBarProps {
  className?: string;
  [rest: string]: any;
}

const TopBar = ({ className, ...rest }: TopBarProps) => {
  const classes = useStyles();

  return (
    <AppBar className={className} elevation={1} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h3" component="span" color="textPrimary">
          Realtime Exams
        </Typography>
        <Box flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
