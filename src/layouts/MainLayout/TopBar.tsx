import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useStyles } from './MainLayout.styles';
import React from 'react';
import TopBarLink from './TopBarLink';
import { useLocation } from 'react-router-dom';

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
        <Typography variant="h2" component="h2" color="textPrimary">
          Testerly
        </Typography>
        <Box flexGrow={1} display="flex" justifyContent="center">
          {pathname.startsWith('/exam') && <Typography variant="h4" className={classes.timer}>4:45</Typography>}
        </Box>
        <TopBarLink to="/exam">Študent</TopBarLink>
        <TopBarLink to="/monitor">Učiteľ</TopBarLink>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
