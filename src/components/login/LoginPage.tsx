import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesLogin, { Createlogin } from './loginStyles'

interface P{}
interface S{} 

class LoginPage extends PureComponent<P & WithStyles<Createlogin>, S> {
  public static Display = withStyles(createStylesLogin as any)(LoginPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>Page de connexion</p>
       </div>
      )
  }
}

export default LoginPage