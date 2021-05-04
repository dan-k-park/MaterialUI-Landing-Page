import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Background from './assets/bg.jpg';
import Header from './components/Header';

import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
    </div>
  )
}
