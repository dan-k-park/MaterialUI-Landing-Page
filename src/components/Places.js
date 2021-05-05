import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IslandCard from './IslandCard';
import islands from '../static/islands';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
export default function() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IslandCard island={islands[0]}/>
      <IslandCard island={islands[1]}/>
    </div>
  )
}
