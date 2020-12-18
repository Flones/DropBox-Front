import React, { Fragment, PureComponent } from 'react'
import { Grid,  WithStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import makeStylesHeader, { CreateHeader } from './headerStyles';


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
            <li><a href="/">Acceuil</a></li>
            <li><a href="/inscription">inscription</a></li>
            <li><a href="/connexion">connexion</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Home</a></li>
            </Grid>
            </Grid>
       </Fragment>
      )
  }
}

export default Header
