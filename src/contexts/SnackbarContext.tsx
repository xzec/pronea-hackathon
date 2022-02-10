import React, { useEffect, useState } from 'react';
import {
  getDatabase,
  ref,
  onValue,
  query,
  limitToLast
} from 'firebase/database';
import { Button, Snackbar } from '@mui/material';
import { StudentEvent } from '../types';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  snackbar: {
    bottom: 80
  }
}));

const SnackbarContext = React.createContext({});

export const SnackbarProvider = ({ children }) => {
  const classes = useStyles();
  const [event, setEvent] = useState<StudentEvent>();
  const [eventOccurences, setEventOccurences] = useState<number>(0);
  const { pathname } = useLocation();

  const handleClose = () => setEvent(null);

  useEffect(() => {
    if (event) setEventOccurences((prev) => prev + 1);
  }, [event]);

  useEffect(() => {
    const db = getDatabase();
    const studentQuery = query(
      ref(db, 'studentEvents'),
      limitToLast(1)
    );

    const unsubscribe = onValue(studentQuery, (snapshot) => {
      if (snapshot.exists()) {
        const newEvent: StudentEvent = Object.values(
          snapshot.val()
        )[0] as StudentEvent;
        setEvent({
          message: newEvent.message,
          actionLabel: newEvent.actionLabel,
          link: newEvent.link,
          createdAt: newEvent.createdAt
        });
      }
    });
    return unsubscribe;
  }, []);

  return (
    <SnackbarContext.Provider value={{}}>
      {children}
      <Snackbar
        open={Boolean(event && pathname.startsWith('/exam/') && eventOccurences > 1)}
        autoHideDuration={6000}
        onClose={handleClose}
        message={event?.message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        className={classes.snackbar}
        action={
          <Button
            color="secondary"
            size="small"
            onClick={handleClose}
            component={RouterLink}
            to={event?.link || '/exam'}
          >
            {event?.actionLabel}
          </Button>
        }
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
