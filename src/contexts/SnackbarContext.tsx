import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import {Button, Snackbar} from '@mui/material';
import { StudentEvent } from '../types';
import { Link as RouterLink } from 'react-router-dom';

const SnackbarContext = React.createContext({
  // showSnackbar: (data: StudentEvent) => null
});

export const SnackbarProvider = ({ children }) => {
  const [event, setEvent] = useState<StudentEvent>();

  const handleClose = () => {
    setEvent(null);
  };

  useEffect(() => {
    const db = getDatabase();
    const studentEventsRef = ref(db, 'studentEvents');
    const unsubscribe = onValue(studentEventsRef, (snapshot) => {
      if (snapshot.exists()) {
        const newEvent: StudentEvent = Object.values(snapshot.val())[0] as StudentEvent;

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
        open={Boolean(event)}
        autoHideDuration={6000}
        onClose={handleClose}
        message={event?.message}
        action={
          <Button color="secondary" size="small" component={RouterLink} to={event?.link || "/exam"}>
            {event?.actionLabel}
          </Button>
        }
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
