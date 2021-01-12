import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { indigo } from "@material-ui/core/colors";
import { Home, Add, Help } from '@material-ui/icons';
import {Link} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  theme: {
    background: indigo[500],
    marginBottom: 60,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Contacts
          </Typography>
          <Button component={Link} to={'/'}  color="inherit"> <Home/>  Home</Button>
          <Button component={Link} to={'/addcontact'} color="inherit"> <Add/> Add Contact</Button>
          <Button component={Link} to={'/abouteme'} color="inherit"> <Help /> About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
