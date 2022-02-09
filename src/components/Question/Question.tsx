import React from 'react';
import {Box, Divider, Paper, Typography} from '@mui/material';
import { useStyles } from './Question.styles';

interface QuestionProps {
  title: string;
  points?: number;
}

const Question: React.FC<QuestionProps> = ({ title, points = 1, children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Box className={classes.heading}>
        <Typography variant="h2" component="h3" color="black">
          {title}
        </Typography>
        <Box flexGrow={1} />
        <Typography className={classes.points}>{points}&nbsp;bod</Typography>
      </Box>
      <Box className={classes.body}>
        {children}
      </Box>
    </Paper>
  );
};

export default Question;
