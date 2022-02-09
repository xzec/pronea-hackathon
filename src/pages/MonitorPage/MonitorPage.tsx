import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './MonitorPage.styles';
import Content from '../../components/Content';
import { getDatabase, ref, onValue } from 'firebase/database';
import { ExamEvent } from '../../types';
import Flag from './Flag';

const MonitorPage: React.FC = () => {
  const classes = useStyles();
  const [events, setEvents] = useState<ExamEvent[]>([]);

  useEffect(() => {
    const db = getDatabase();
    const eventsRef = ref(db, 'events');
    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const evts = snapshot.val();
      setEvents(Object.values(evts));
    });
    return unsubscribe;
  }, []);

  return (
    <Box className={classes.container}>
      <Box flexGrow={1}>
        <Content>
          <Typography variant="body1" color="textPrimary"></Typography>
        </Content>
      </Box>
      <Box sx={{ width: 300, color: 'white' }}>
        {events.map((event) => (
          <Flag key={event.createdAt} {...event} />
        ))}
      </Box>
    </Box>
  );
};

export default MonitorPage;
