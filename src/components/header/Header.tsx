
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';



const  Header  = ()  =>{
    // const auth = useSelector(state=> state.auth)
    // const {user, isLogged} = auth

const classes = createStylesHeader()

// liens visible que si l'utilisateur est connecté.
const userLink = () => {
  return 
      <span>
        <Link to="/profil"><Button color="inherit">username</Button></Link>
      <Link to="/connexion"><Button color="inherit"  >Logout</Button></Link>
      </span>
}

  return (
    <div className={classes.root}> 
     <AppBar position="static" className={classes.navBar}>
       <Toolbar>
         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
         </IconButton>
         <Typography variant="h2" className={classes.title}>
           DropBoite
         </Typography>
         <Link to="/"><Button color="inherit">Accueil</Button></Link>
         <Link to="/connexion"><Button color="inherit">Connexion</Button></Link> 
       </Toolbar>
     </AppBar>
 </div>
   )
}

export default Header

const createStylesHeader = makeStyles({
  root: {
    flexGrow: 1,
  },
  navBar:{
    backgroundColor: 'rgb(20, 35, 75)',
    paddingTop: 15,
    paddingBottom: 15,
  },
  menuButton: {
    //marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    fontSize: 50,
    fontFamily: 'Roboto',
    fontWeight: 500

  },
});






/*
class Header extends PureComponent<P & WithStyles<CreateHeader>, S> {
  public static Display = withStyles(createStylesHeader as any)(Header) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div className={classes.root}> 
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h2" className={classes.title}>
              DropBoite
            </Typography>
            <Link to="/"><Button color="inherit">Accueil</Button></Link>
            <Link to="/connexion"><Button color="inherit">Connexion</Button></Link> 
          </Toolbar>
        </AppBar>
    </div>
      )
  }
}*/



