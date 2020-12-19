import { WithStyles,  Container, CssBaseline } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, { Fragment, PureComponent} from 'react'
import createStylesHomePage, {  CreateHome } from './homePageStyles'


interface P{}
interface S{}

class HomePage extends PureComponent<P & WithStyles<CreateHome>, S> {
  public static Display = withStyles(createStylesHomePage as any)(HomePage) as React.ComponentType<P>
    render() {
      const {classes} = this.props 
      return (
        <Fragment>
          <CssBaseline/>                  
              <div className={classes.root}>
              <Container maxWidth="md">
                <p className={classes.header}>Bienvenue sur l'application <br/><span className={classes.appName} >DropBoite</span></p>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum beatae ipsam tempora obcaecati? Officiis, quia amet sed esse 
                    accusamus ipsum voluptate? Dignissimos quis natus error voluptatem in itaque sunt?</p>
                </div>
              </Container>
              </div>
        </Fragment>
      )
    }
  }

export default HomePage
