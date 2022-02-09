import React, { useState } from 'react';
import useExam from '../../hooks/useExam';
import Content from '../../components/Content';
import {
  Box,
  Button,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { Close, Edit } from '@mui/icons-material';
import { useStyles } from './ExamSettings.styles';
import logStudentEvent from '../../logStudentEvent';

const ExamSettings: React.FC = () => {
  const { addQuestion, questions } = useExam();
  const [question, setQuestion] = useState<string>('');
  const classes = useStyles();

  const handleQuestionChange = (event) => setQuestion(event.target.value);

  const handleSubmit = () => {
    const newQuestionNumber = questions.length;
    addQuestion(newQuestionNumber, {
      title: question,
      type: 'OPEN_ENDED'
    });
    logStudentEvent({
      message: 'Učiteľ pridal novú otázku',
      link: `/exam/${newQuestionNumber + 1}`,
      actionLabel: 'Zobraziť'
    });
  };

  return (
    <Content>
      <Typography variant="h3" color="textPrimary" paragraph>
        Test z Občianskej výchovy
      </Typography>
      {questions.map((question, index) => (
        <Box key={question.title} color="white">
          <ListItem>
            <ListItemIcon>
              <Typography>{index + 1}</Typography>
            </ListItemIcon>
            <ListItemText primary={question.title} />
            <Tooltip title="Upraviť">
              <IconButton color="default">
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="Vymazať otázku">
              <IconButton color="error">
                <Close />
              </IconButton>
            </Tooltip>
          </ListItem>
          <Divider />
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
        <TextField
          value={question}
          onChange={handleQuestionChange}
          color="secondary"
          multiline
          fullWidth
        />
        <Button color="secondary" onClick={handleSubmit}>
          Pridať
        </Button>
      </Box>
    </Content>
  );
};

export default ExamSettings;
