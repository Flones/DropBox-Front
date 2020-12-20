import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesCodePage, { CreateCodePage } from './codePageStyles'

interface P{}
interface S{} 
// page permettant à l'utilisateur d'éditer le code
class CodePage extends PureComponent<P & WithStyles<CreateCodePage>, S> {
  public static Display = withStyles(createStylesCodePage as any)(CodePage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>Page pour éditer le code</p>
       </div>
      )
  }
}
export default CodePage