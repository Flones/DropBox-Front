import React, { PureComponent } from 'react'
import {  WithStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import makeStylesHeader, { CreateHeader } from './headerStyles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


interface P{}
interface S{} 

class Header extends PureComponent<P & WithStyles<CreateHeader>, S> {
  public static Display = withStyles(makeStylesHeader as any)(Header) as React.ComponentType<P>
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
            <Button color="inherit">Accueil</Button>
            <Button color="inherit">Connexion</Button>
          </Toolbar>
        </AppBar>
    </div>
      )
  }
}

export default Header




// eslint-disable-next-line no-lone-blocks
{/* <Grid item className={classes.headerBar} >
           <Grid item >
             <span>DropBoite <MenuBookIcon/> </span>
           </Grid>
            <Grid item className={classes.lienNav}>
            <li><a href="/">Acceuil</a></li>
            <li><a href="/inscription">inscription</a></li>
            </Grid>
            </Grid> */}
