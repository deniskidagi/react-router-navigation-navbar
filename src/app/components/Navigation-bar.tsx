import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {createStyles, makeStyles} from '@mui/styles'
import { lightBlue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    spacing: 4,
})
const useStyles = makeStyles(() =>
createStyles({
   root: {
       flexGrow: 1,
   },
   menuButton: {
       marginRight: theme.spacing(2),
   },
   link: {
       color: lightBlue[50],
       textDecoration: 'none'
   },
   title: {
       flexGrow: 1,
   },
}),
);



export default function NavigationBar() {
    const classes = useStyles();
  return (
      <div className={classes.root}>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Link className={`${classes.link}, ${classes.title}`} to={'/'}>Logo</Link>
            <Button color="inherit">
                <Link className={classes.link} to={'/'}>Home</Link>
            </Button>
            <Button color="inherit">
                <Link className={classes.link} to={'/about'}>About</Link>
            </Button>
            <Button color="inherit">
                <Link className={classes.link} to={'/dashboard'}>Dashboard</Link>
            </Button>
            <Button color="inherit">
                <Link className={classes.link} to={'/login'}>Login</Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
