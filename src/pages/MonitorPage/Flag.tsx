import React from 'react';
import { Divider, ListItem, ListItemText } from '@mui/material';
import { FlagOutlined } from '@mui/icons-material';

const Flag: React.FC = () => {
  return (
    <>
      <ListItem secondaryAction={<FlagOutlined color="warning" />}>
        <ListItemText primary="Matej, 17:31, vložil skopírovaný text" />
      </ListItem>
      <Divider />
    </>
  );
};

export default Flag;
