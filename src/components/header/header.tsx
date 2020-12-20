import React, { PureComponent } from 'react'
import {  WithStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import createStylesHeader, { CreateHeader } from './headerStyles';
import { Link } from 'react-router-dom';

interface P{}
interface S{} 

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
            <Link to="/"><Button color="inherit">Acceuil</Button></Link>
            <Link to="/connexion"><Button color="inherit">Connexion</Button></Link> 
          </Toolbar>
        </AppBar>
    </div>
      )
  }
}

export default Header


