import { createStyles } from '@mui/material';

export const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(',');

export const globalStyles = {
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontFamily
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      minHeight: '100%',
      width: '100%'
    },
    body: {
      minHeight: '100vh',
      width: '100%'
    },
    a: {
      textDecoration: 'none'
    },
    '#root': {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#1c1c23'
    }
  }
};
