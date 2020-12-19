import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesErrorPage, { CreateErroPage } from './errorPagestyles'

interface P{}
interface S{} 

class ErrorPage extends PureComponent<P & WithStyles<CreateErroPage>, S> {
  public static Display = withStyles(createStylesErrorPage as any)(ErrorPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>Page 404 </p>
       </div>
      )
  }
}

export default ErrorPage
