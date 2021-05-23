import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export  function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{position: "fixed", bottom: "0", backgroundColor: "whitesmoke", maxWidth: "100%"}}
    >
      <Link to="/" ><BottomNavigationAction label="Home" icon={<HomeIcon />} /></Link>
    </BottomNavigation>
  );
}

