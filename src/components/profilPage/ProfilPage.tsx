import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesProfil, { CreateProfil } from './profilPageStyles'

interface P{}
interface S{} 

class ProfilPage extends PureComponent<P & WithStyles<CreateProfil>, S> {
  public static Display = withStyles(createStylesProfil as any)(ProfilPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <div>
           <p className={classes.root}>Page de rénitialisation du mot de passe</p>
       </div>
      )
  }
}
export default ProfilPage
