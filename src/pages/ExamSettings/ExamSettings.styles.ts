import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    fontWeight: theme.typography.fontWeightBold,
    minWidth: 0,
  },
  textfield: {
    width: 50,
  }
}));
