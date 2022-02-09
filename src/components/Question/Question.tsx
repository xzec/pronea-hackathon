import React, { useState } from 'react';
import { Box, Paper, TextField, Typography } from '@mui/material';
import { useStyles } from './Question.styles';
import { IOption, QType } from '../../types';
import Options from '../Options';
import useQuestionNumber from "../../hooks/useQuestionNumber";

interface QuestionProps {
  title: string;
  type: QType;
  options?: IOption[];
  points?: number;
}

const Question: React.FC<QuestionProps> = ({
  title,
  type,
  options,
  points = 1
}) => {
  const classes = useStyles();
  const questionNumber = useQuestionNumber();
  const [answer, setAnswer] = useState<string>('');

  const handleAnswerChange = (event) => setAnswer(event.target.value);

  return (
    <Paper className={classes.paper}>
      <Box className={classes.heading}>
        <Typography variant="h2" component="h3" color="black">
          {questionNumber}.&nbsp;{title}
        </Typography>
        <Box flexGrow={1} />
        <Typography className={classes.points}>{points}&nbsp;bod</Typography>
      </Box>
      <Box className={classes.body}>
        {Boolean(options) ? (
          <Options options={options} type={type} />
        ) : (
          <TextField
            value={answer}
            onChange={handleAnswerChange}
            color="secondary"
            InputProps={{ className: classes.textField }}
            multiline
            fullWidth
          />
        )}
      </Box>
    </Paper>
  );
};

export default Question;
