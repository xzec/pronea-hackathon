import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useStyles } from './MainLayout.styles';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

interface TopBarProps {
  className?: string;
  [rest: string]: any;
}

const TopBar = ({ className, ...rest }: TopBarProps) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <AppBar className={className} elevation={1} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h3" component="span" color="textPrimary">
          Realtime Exams
        </Typography>
        <Box flexGrow={1} />
        <Button
          component={RouterLink}
          to="/exam"
          color="secondary"
          className={clsx({ [classes.active]: pathname.startsWith('/exam') })}
        >
          Student
        </Button>
        <Button
          component={RouterLink}
          to="/monitor"
          color="secondary"
          className={clsx({
            [classes.active]: pathname.startsWith('/monitor')
          })}
        >
          Teacher
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
