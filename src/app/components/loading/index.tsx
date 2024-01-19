import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';

//import useStyles from './useStyles';

const Loading = (_: any) => {
  //const classes = useStyles();

  //return <Paper elevation={0} square={true} className={classes.preloader}>
  return <Paper elevation={0} square={true}>
    <CircularProgress size={50} />
  </Paper>;
};

Loading.propTypes = {
  // interesting times; there are components not using any prop...
};

export default Loading;
