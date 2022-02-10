import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex'
  },
  content: {
    paddingTop: theme.spacing(2)
  },
  notiText: {
    margin: theme.spacing(2, 2)
  },
  drawer: {
    width: 300,
    height: `calc(100vh - 64px)`,
    backgroundColor: '#19191e'
  },
  flags: {
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      width: theme.spacing(1),
      height: theme.spacing(1)
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.background.default
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[500],
      borderRadius: theme.spacing(1)
    },
    height: "100%",
    maxHeight: `calc(100vh - 121px)`,
    color: 'white',
    overflow: 'auto'
  },
  card: {
    borderRadius: 12,
  },
  cardActionArea: {
    padding: theme.spacing(1, 2),
  },
  studentIcon: {
   fontSize: 64,
  }
}));
