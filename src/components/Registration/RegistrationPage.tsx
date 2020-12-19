import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesRegister, { CreateRegister } from './registrationStyles'

interface P{}
interface S{} 

class RegistrationPage extends PureComponent<P & WithStyles<CreateRegister>, S> {
  public static Display = withStyles(createStylesRegister as any)(RegistrationPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>Page d'inscription</p>
       </div>
      )
  }
}
export default RegistrationPage

