import { makeStyles } from '@mui/material/styles';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: 40,
 
    '& img': {
      width: 'auto',
      height: 25,
    },
    '& h6': {
      paddingLeft: 15,
    },
  },
  buttons: {
    marginTop: 30,
  },
}));