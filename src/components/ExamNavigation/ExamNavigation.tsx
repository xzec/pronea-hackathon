import React from 'react';
import { AppBar, Box, Button } from '@mui/material';
import { useStyles } from './ExamNavigation.styles';
import { useNavigate } from 'react-router-dom';
import useQuestionNumber from '../../hooks/useQuestionNumber';
import clsx from 'clsx';

interface ExamNavigationProps {
  count?: number;
}

const ExamNavigation: React.FC<ExamNavigationProps> = ({ count = 1 }) => {
  const classes = useStyles();
  const questionNumber = useQuestionNumber();
  const navigate = useNavigate();

  const handleNavigateBack = () => navigate(`/exam/${questionNumber - 1}`);

  const handleNavigateForward = () => navigate(`/exam/${questionNumber + 1}`);

  const handleNavigateToQuestion = (qNumber) => () =>
    navigate(`/exam/${qNumber}`);

  return (
    <AppBar className={classes.navigation} elevation={1}>
      <Button
        disabled={questionNumber <= 1}
        onClick={handleNavigateBack}
        className={classes.button}
        color="secondary"
      >
        Späť
      </Button>
      <Box flexGrow={1} />
      {Array(count)
        .fill(0)
        .map((value, index) => {
          return (
            <Button
              key={index}
              variant="contained"
              color="secondary"
              onClick={handleNavigateToQuestion(index + 1)}
              className={clsx(classes.button, {
                [classes.active]: questionNumber === index + 1
              })}
            >
              {index + 1}
            </Button>
          );
        })}
      <Box flexGrow={1} />
      <Button
        disabled={questionNumber >= count}
        onClick={handleNavigateForward}
        className={classes.button}
        color="secondary"
      >
        Ďalej
      </Button>
    </AppBar>
  );
};

export default ExamNavigation;
