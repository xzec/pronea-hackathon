import { createStyles, makeStyles } from '@mui/styles';
import { globalStyles } from '../constants';

const useStyles = makeStyles(() => createStyles(globalStyles));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
