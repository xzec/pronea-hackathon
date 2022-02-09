import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2.5, 3)
  },
  points: {
    fontWeight: theme.typography.fontWeightBold
  },
  body: {
    padding: theme.spacing(3)
  },
  paper: {
    backgroundColor: theme.palette.common.white,
    boxShadow: 'inset 0 0 24px #75758a',
    borderRadius: 16,
    color: theme.palette.common.black,
  }
}));
