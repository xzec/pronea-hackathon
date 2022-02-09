import React from 'react';
import { Divider, ListItem, ListItemText } from '@mui/material';
import { FlagOutlined } from '@mui/icons-material';
import { ExamEvent } from '../../types';

const Flag: React.FC<ExamEvent> = ({
  questionNumber,
  message,
  username,
  createdAt
}) => {
  return (
    <>
      <ListItem secondaryAction={<FlagOutlined color="warning" />}>
        <ListItemText
          primary={`${username}, ${new Date(
            createdAt
          ).toLocaleTimeString()}, otázka č. ${questionNumber}`}
          secondary={message}
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default Flag;
