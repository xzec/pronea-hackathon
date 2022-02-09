import React from 'react';
import { useStyles } from './Content.styles';
import { Container } from '@mui/material';

const Content: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      {children}
    </Container>
  );
};

export default Content;
