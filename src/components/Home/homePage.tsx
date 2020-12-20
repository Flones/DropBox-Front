import { WithStyles,  Container, CssBaseline } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import React, { PureComponent} from 'react'
import { Link } from 'react-router-dom'
import createStylesHomePage, {  CreateHome } from './homePageStyles'


interface P{}
interface S{}

class HomePage extends PureComponent<P & WithStyles<CreateHome>, S> {
  public static Display = withStyles(createStylesHomePage as any)(HomePage) as React.ComponentType<P>
    render() {
      const {classes} = this.props 
      return (
        <div>
          <CssBaseline/>                  
              <div className={classes.root}>
              <Container maxWidth="md">
                <p className={classes.header}>Bienvenue sur l'application <br/><span className={classes.appName} >DropBoite</span></p>
                <div>
                  <p className={classes.messageText}> Un site web de partage de documents collaboratifs ou personnels. Accessible via différentes plateformes
                      en se connectant à son compte ou en en créant un. Un outil de modification de
                      fichier directement depuis l’application ☺.
                  </p>
                </div>
                <Container maxWidth="sm">
                  <div className={classes.margintop}>
                    <p className={classes.CreerCompte}>Créer votre compte  &nbsp;
                    <Link to="/inscription"><Button variant="contained" color="primary">Inscription</Button></Link></p>
                  </div>
                </Container>
              </Container>
              </div>
        </div>
      )
    }
  }

export default HomePage
