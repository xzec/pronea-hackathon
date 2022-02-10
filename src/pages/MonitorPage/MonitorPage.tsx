import React, { useEffect, useState } from 'react';
import { Box, Button, Hidden, Typography } from '@mui/material';
import { useStyles } from './MonitorPage.styles';
import Content from '../../components/Content';
import { getDatabase, ref, onValue } from 'firebase/database';
import { ExamEvent } from '../../types';
import Flag from './Flag';
import { Settings } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const MonitorPage: React.FC = () => {
  const classes = useStyles();
  const [events, setEvents] = useState<ExamEvent[]>([]);

  useEffect(() => {
    const db = getDatabase();
    const eventsRef = ref(db, 'events');
    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const evts = snapshot.val();
      setEvents(Object.values(evts || {}));
    });
    return unsubscribe;
  }, []);

  return (
    <Box className={classes.container}>
      <Box flexGrow={1}>
        <Content maxWidth="lg" className={classes.content}>
          <Hidden mdUp>
            <Box >
              <Typography variant="h3" color="textPrimary" paragraph>
                Test z Občianskej výchovy
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button
                color="secondary"
                endIcon={<Settings />}
                component={RouterLink}
                to="/exam-settings"
              >
                Nastavenia
              </Button>
            </Box>
          </Hidden>
          <Hidden mdDown>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h3" color="textPrimary">
                Test z Občianskej výchovy
              </Typography>
              <Box flexGrow={1} />
              <Button
                color="secondary"
                endIcon={<Settings />}
                component={RouterLink}
                to="/exam-settings"
              >
                Nastavenia
              </Button>
            </Box>
          </Hidden>
        </Content>
      </Box>
      <Box sx={{ width: 300, color: 'white' }}>
        {events?.map((event) => (
          <Flag key={event.createdAt} {...event} />
        ))}
      </Box>
    </Box>
  );
};

export default MonitorPage;
