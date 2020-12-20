import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesFooter, { CreateFooter } from './footerStyles'

interface P{}
interface S{} 

class Footer extends PureComponent<P & WithStyles<CreateFooter>, S> {
  public static Display = withStyles(createStylesFooter as any)(Footer) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>footer </p>
       </div>
      )
  }
}

export default Footer

