import React, { Fragment, PureComponent } from 'react'
import { Grid,  WithStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import makeStylesHeader, { CreateHeader } from './headerStyles';
import {Link} from 'react-router-dom';


interface P{}
interface S{} 

class Header extends PureComponent<P & WithStyles<CreateHeader>, S> {
  public static Display = withStyles(makeStylesHeader as any)(Header) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <Fragment>
         <Grid item className={classes.headerBar} >
           <Grid item >
             <span>DropBoite</span>
           </Grid>
            <Grid item className={classes.lienNav}>
            <li><Link to="/">Acceuil</Link></li>
            <li><Link to="/">Connexion</Link></li>
            <li><Link to="/">Inscription</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            </Grid>
            </Grid>
       </Fragment>
      )
  }
}

export default Header
