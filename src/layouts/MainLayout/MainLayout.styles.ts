import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    minHeight: '100%',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto'
  },
  content: {
    flex: '1 1 auto',
    minHeight: '100%'
  },
  toolbar: {
    pointerEvents: 'none',
    '& > *': {
      pointerEvents: 'auto'
    }
  },
  topbar: {
    pointerEvents: 'none'
  },
  active: {
    fontWeight: '700 !important'
  },
  timer: {
    fontWeight: '700'
  },
  bonus: {
    color: theme.palette.success.main
  }
}));
