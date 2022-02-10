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
  Paper,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { ArrowBack, Close, Edit } from '@mui/icons-material';
import { useStyles } from './ExamSettings.styles';
import logStudentEvent from '../../logStudentEvent';
import { getDatabase, ref, set } from 'firebase/database';
import { Link as RouterLink } from 'react-router-dom';

const ExamSettings: React.FC = () => {
  const classes = useStyles();
  const { addQuestion, questions } = useExam();
  const [question, setQuestion] = useState<string>('');
  const [extraMinutes, setExtraMinutes] = useState<number>(0);
  const { bonusMinutes } = useExam();

  const handleQuestionChange = (event) => setQuestion(event.target.value);

  const handleTimeChange = (event) =>
    setExtraMinutes(parseInt(event.target.value, 10));

  const handleAdd5 = () => setExtraMinutes((prev) => prev + 5);

  const handleRemove5 = () =>
    setExtraMinutes((prev) => (prev - 5 > 0 ? prev - 5 : 0));

  const handleAddTime = () => {
    const db = getDatabase();
    set(ref(db, 'bonusMinutes'), bonusMinutes + extraMinutes);
    logStudentEvent({
      message: `Čas bol zvýšený o ${extraMinutes} minút`
    });
  };

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
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}
      >
        <IconButton component={RouterLink} to="/monitor">
          <ArrowBack />
        </IconButton>
        <Typography variant="h3" color="textPrimary">
          Test z Občianskej výchovy
        </Typography>
      </Box>
      <Typography variant="h5" color="textPrimary" paragraph>
        Nastavenie času
      </Typography>
      <Box sx={{ display: 'flex', marginBottom: 2 }}>
        <Paper sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Box sx={{ display: 'flex', gap: 4, marginTop: 2, marginBottom: 2 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                className={classes.button}
                color="secondary"
                onClick={handleRemove5}
                variant="outlined"
              >
                - 5
              </Button>
              <TextField
                value={extraMinutes}
                type="number"
                onChange={handleTimeChange}
                color="secondary"
                variant="standard"
                className={classes.textfield}
                multiline
              />
              <Button
                className={classes.button}
                color="secondary"
                onClick={handleAdd5}
                variant="outlined"
              >
                + 5
              </Button>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleAddTime}
              disabled={!extraMinutes || extraMinutes === 0}
            >
              Zvýšiť čas o&nbsp;{extraMinutes}&nbsp;minút
            </Button>
          </Box>
        </Paper>
      </Box>
      <Typography variant="h5" color="textPrimary" paragraph>
        Otázky
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
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h5" color="textPrimary" paragraph>
          Pridať novú otázku
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 2,

            marginBottom: 6
          }}
        >
          <TextField
            value={question}
            onChange={handleQuestionChange}
            color="secondary"
            multiline
            fullWidth
          />
          <Button color="secondary" onClick={handleSubmit} variant="contained">
            Pridať
          </Button>
        </Box>
      </Box>
    </Content>
  );
};

export default ExamSettings;
