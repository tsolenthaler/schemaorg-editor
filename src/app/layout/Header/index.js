import React from 'react';

import HeaderLoader from '@/app/sections/Header';
import { asyncComponentLoader } from '@/app/utils';

//import useStyles from './useStyles';

const HeaderSection = asyncComponentLoader(HeaderLoader);

const Header = _ => {
  const classes = {
    root: {
      flexGrow: 1,
      marginBottom: theme.mixins.toolbar.minHeight + 4,
    }
  };

  return (
    <div className={classes.root}>
      <HeaderSection />
    </div>
  );
};

export default Header;
