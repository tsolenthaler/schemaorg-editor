import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
  preloader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
