import { createTheme, colors, Theme } from '@mui/material';
import shadows from './shadows';
import typography from './typography';

// declare module '@mui/styles' {
//   interface DefaultTheme extends Theme {}
// }

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.teal[500]
    },
    background: {
      default: '#1c1c23',
      paper: '#2d2d38'
    }
  },
  shadows,
  typography
});

export default theme;