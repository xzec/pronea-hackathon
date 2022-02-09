import React from 'react';
import { useStyles } from './Content.styles';
import { Container } from '@mui/material';
import clsx from 'clsx';

interface ContentProps {
  maxWidth?: string;
  className?: string;
  [rest: string]: any;
}

const Content: React.FC<ContentProps> = ({
  maxWidth = 'md',
  className,
  children,
  rest
}) => {
  const classes = useStyles();

  return (
    <Container
      maxWidth={maxWidth}
      className={clsx(classes.container, className)}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Content;
