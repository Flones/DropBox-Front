import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesLostPassword, { CreateLostPassword } from './forgotPasswordStyles'

interface P{}
interface S{} 

class Forgotpassword extends PureComponent<P & WithStyles<CreateLostPassword>, S> {
  public static Display = withStyles(createStylesLostPassword as any)(Forgotpassword) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>Mot de passe oublié</p>
       </div>
      )
  }
}

export default Forgotpassword


