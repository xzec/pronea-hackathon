import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useStyles } from './MainLayout.styles';

interface TopBarLinkProps {
  to: string;
  activeWhen?: string | string[];
}

const TopBarLink: React.FC<TopBarLinkProps> = ({
  to,
  activeWhen = to,
  children
}) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Button
      component={RouterLink}
      to={to}
      color="secondary"
      className={clsx({
        [classes.active]: Array.isArray(activeWhen)
          ? activeWhen.some((path) => pathname.startsWith(path))
          : pathname.startsWith(activeWhen)
      })}
    >
      {children}
    </Button>
  );
};

export default TopBarLink;
