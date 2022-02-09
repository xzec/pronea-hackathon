import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  navigation: {
    display: "flex",
    gap: 4,
    position: "fixed",
    height: 64,
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: "unset",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    padding: theme.spacing(1.5),
    minWidth: 10,
    fontWeight: theme.typography.fontWeightBold,
  },
  active: {
    backgroundColor: theme.palette.secondary.dark,
  }
}));
