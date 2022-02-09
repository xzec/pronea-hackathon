import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useStyles } from './MainLayout.styles';
import React from 'react';
import TopBarLink from './TopBarLink';
import { Link as RouterLink } from 'react-router-dom';

interface TopBarProps {
  className?: string;
  [rest: string]: any;
}

const TopBar = ({ className, ...rest }: TopBarProps) => {
  const classes = useStyles();

  return (
    <AppBar className={className} elevation={1} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h2"
          color="textPrimary"
          component={RouterLink}
          to="/exam/1"
        >
          Testerly
        </Typography>
        <Box flexGrow={1} display="flex" justifyContent="center">
          <Typography variant="h4" className={classes.timer}>
            4:45
          </Typography>
        </Box>
        <TopBarLink to="/exam" activeWhen="/exam/">
          Študent
        </TopBarLink>
        <TopBarLink to="/monitor" activeWhen={["/monitor", "/exam-settings"]}>Učiteľ</TopBarLink>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
