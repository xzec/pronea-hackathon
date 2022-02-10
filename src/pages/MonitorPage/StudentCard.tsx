import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  LinearProgress,
  Typography,
  useTheme
} from '@mui/material';
import { useStyles } from './MonitorPage.styles';
import useExam from '../../hooks/useExam';
import {
  NetworkCell,
  Person,
  SignalCellularConnectedNoInternet0Bar
} from '@mui/icons-material';

interface CardProps {
  name: string;
  questionsTouched: number;
  connectionGood: boolean;
}

const StudentCard: React.FC<CardProps> = ({
  name,
  questionsTouched,
  connectionGood
}) => {
  const classes = useStyles();
  const { questions } = useExam();
  const theme = useTheme();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    console.log(
      'setting progress',
      Math.round((questionsTouched / questions.length) * 100)
    );
    setProgress(Math.round((questionsTouched / questions.length) * 100));
  }, [questionsTouched, questions]);

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h4" color="textPrimary">
            {name}
          </Typography>
          <Box flexGrow={1} />
          {connectionGood ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.success.main,
                fontWeight: 'bold',
                fontSize: 12
              }}
            >
              <NetworkCell color="success" fontSize="small" />
              &nbsp;Dobré
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.warning.main,
                fontWeight: 'bold',
                fontSize: 12
              }}
            >
              <SignalCellularConnectedNoInternet0Bar
                color="warning"
                fontSize="small"
              />
              &nbsp;Slabé
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 2,
            paddingBottom: 2
          }}
        >
          <Person className={classes.studentIcon} />
        </Box>
        <Typography variant="body2" gutterBottom color="textPrimary">
          {questionsTouched > questions?.length ? questions?.length : questionsTouched}/{questions?.length}
        </Typography>
        <Box sx={{ paddingBottom: 1}}>
          <LinearProgress
            sx={{ height: 8, borderRadius: 4 }}
            variant="determinate"
            color="success"
            value={progress > 100 ? 100 : progress}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default StudentCard;
