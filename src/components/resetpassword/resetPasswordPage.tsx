import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesRestPass, { CreateRestpass } from './resetPasswordStyles'

interface P{}
interface S{} 

class ResetPasswodPage extends PureComponent<P & WithStyles<CreateRestpass>, S> {
  public static Display = withStyles(createStylesRestPass as any)(ResetPasswodPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>Page de rénitialisation du mot de passe</p>
       </div>
      )
  }
}
export default ResetPasswodPage

