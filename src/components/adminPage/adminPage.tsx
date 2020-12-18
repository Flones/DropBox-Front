import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesAdmin, { CreateAdmin } from './adminPageStyles'

interface P{}
interface S{} 

class AdminPage extends PureComponent<P & WithStyles<CreateAdmin>, S> {
  public static Display = withStyles(createStylesAdmin as any)(AdminPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>Page d'administration</p>
       </div>
      )
  }
}
export default AdminPage
