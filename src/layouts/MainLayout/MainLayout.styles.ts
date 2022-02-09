import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
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
  }
}));
