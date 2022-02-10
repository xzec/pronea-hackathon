import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useStyles } from './MainLayout.styles';
import React, { useEffect, useState } from 'react';
import TopBarLink from './TopBarLink';
import { Link as RouterLink } from 'react-router-dom';
import { getDatabase, onValue, ref } from 'firebase/database';
import clsx from 'clsx';
import useExam from '../../hooks/useExam';

interface TopBarProps {
  className?: string;
  [rest: string]: any;
}

const TopBar = ({ className, ...rest }: TopBarProps) => {
  const classes = useStyles();
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const { bonusMinutes } = useExam();

  useEffect(() => {
    const countDownDate = new Date();
    countDownDate.setHours(new Date().getHours() + 1);
    countDownDate.setMinutes(bonusMinutes);
    countDownDate.setSeconds(0);
    const interval = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, [bonusMinutes]);

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
          <Typography
            variant="h4"
            className={clsx(classes.timer, {
              [classes.bonus]: bonusMinutes > 0
            })}
          >
            {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
              2,
              '0'
            )}`}
          </Typography>
        </Box>
        <TopBarLink to="/exam" activeWhen="/exam/">
          Študent
        </TopBarLink>
        <TopBarLink to="/monitor" activeWhen={['/monitor', '/exam-settings']}>
          Učiteľ
        </TopBarLink>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
