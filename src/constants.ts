import { createStyles } from '@mui/material';
import {IQuestion} from "./types";

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

export const Q_TYPE = {
  SINGLE_CHOICE: "SINGLE_CHOICE",
  MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
  OPEN_ENDED: "OPEN_ENDED",
}

export const QUESTIONS: IQuestion[] = [
  {
    title: 'Kedy začala 1. svetová vojna?',
    type: 'SINGLE_CHOICE',
    options: [
      {
        value: '1912',
        correct: false
      },
      {
        value: '1913',
        correct: false
      },
      {
        value: '1914',
        correct: true
      },
      {
        value: '1915',
        correct: false
      }
    ]
  },
  {
    title: 'Popíšte vzťahy medzi Winstonom Churchillom a Kráľom Jurajom VI.',
    type: 'OPEN_ENDED'
  },
  {
    title:
      'Ktoré tri úlohy štát zabezpečuje v ekonomike a každú jednu podrobne popíš.',
    type: 'OPEN_ENDED'
  },
  {
    title:
      'Definuj pojem hospodárska politika a uveď hlavný subjekt hospodárskej politiky v Slovenskej republike.',
    type: 'OPEN_ENDED'
  },
  {
    title:
      'Aké najčastejšie ciele z hľadiska stability ekonomiky sleduje hospodárska politika a uveď  ako sa takáto hospodárska politika nazýva?',
    type: 'OPEN_ENDED'
  },
  {
    title:
      'Ktoré štyri čiastkové hospodárske politiky poznáme a každú stručne popíš.',
    type: 'OPEN_ENDED'
  },
  {
    title:
      'Charakterizuj monetárnu politiku a uveď rozdiel medzi reštriktívnou a expanzívnou monetárnou politikou.',
    type: 'OPEN_ENDED'
  }
];
