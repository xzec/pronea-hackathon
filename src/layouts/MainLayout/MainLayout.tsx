import React from 'react';
import { Outlet } from 'react-router-dom';
import { useStyles } from './MainLayout.styles';
import TopBar from './TopBar';

const MainLayout: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar className={classes.topbar} />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
