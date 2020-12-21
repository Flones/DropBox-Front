import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { LockOutlined } from '@material-ui/icons'
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import createStylesLogin, { Createlogin } from './loginStyles'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

interface P{}
interface S{} 

class LoginPage extends PureComponent<P & WithStyles<Createlogin>, S> {
  public static Display = withStyles(createStylesLogin as any)(LoginPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    //A faire plutard pour la connexion avec Google et Facebook
    const responseGoogle = async () =>{}
    const responseFacebook = async () =>{}

    return (
       <Grid container  justify="center" className={classes.root}>
            <Grid>
            <Paper elevation={10} className={classes.paper}>
                <Grid justify="center">
                     <Avatar className={classes.avatar}><LockOutlined/></Avatar>
                    <h2 className={classes.titleConnexion}>Connexion✍</h2>
                </Grid>
                <TextField 
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                autoComplete="email"
                />
                <TextField 
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                 />
                <Button type='submit' color='primary' variant="contained" className={classes.Bouton} fullWidth>Connexion</Button>
                <Typography >
                     <Link to="/motdePasseOublie">
                        <span className={classes.Motdepasseoublie}>Forgot password ?</span>
                      </Link>
                </Typography>
                <Grid container>
                     <div className={classes.titleMessage}> Si vous n'avez pas de compte &nbsp;</div> <br/>
                     <Link to="/inscription" >
                       <div className={classes.Connexion}> Inscription</div>
                </Link>
                </Grid>
            </Paper>
            </Grid>
              
            <Grid>
            <Paper elevation={10} className={classes.paper}>
                <Grid justify="center">
                     <Avatar className={classes.avatar}>réseaux sociaux</Avatar>
                    <h2 className={classes.titleConnexion}>Réseaux sociaux</h2>
                </Grid>

                <div className={classes.reseauButton}>
                <GoogleLogin
                  clientId="Par nos identifiant nodejs"
                  buttonText="Se connecter avec google"
                  onSuccess={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  />
                </div>                
                <div className={classes.reseauButton}>   
                 <FacebookLogin
                    appId="Par les identifiant de FaceBook"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    icon="fa-facebook"
                      />
                </div>
            </Paper>
            </Grid>
        </Grid>
      )
  }
}

export default LoginPage