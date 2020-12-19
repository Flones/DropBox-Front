import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesCodePage, { CreateCodePage } from './codePageStyles'

interface P{}
interface S{} 

class Codepage extends PureComponent<P & WithStyles<CreateCodePage>, S> {
  public static Display = withStyles(createStylesCodePage as any)(Codepage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>Page pour éditer le code</p>
       </div>
      )
  }
}
export default Codepage