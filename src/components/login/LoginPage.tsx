import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { LockOutlined } from '@material-ui/icons'
import FacebookIcon from '@material-ui/icons/Facebook';
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import createStylesLogin, { Createlogin } from './loginStyles'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

interface P{}
interface S{} 

class LoginPage extends PureComponent<P & WithStyles<Createlogin>, S> {
  public static Display = withStyles(createStylesLogin as any)(LoginPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 
    const API  = 'http://localhost:5000'
    //Connexion de l'utilisateur avec Google
    const responseGoogle = async (response:any) =>{
      try {
        //const res = await axios.post(API +'/user/googleLogin', {tokenId: response.tokenId})
        console.log(response)
      } catch (error) {
          console.log("une erreur a été rencontrée")
      }
    }

    const responseFacebook = async () =>{}

    return (
       <Grid container  justify="center" className={classes.root}>
            <Grid >
            <Paper elevation={10} className={classes.paper}>
                <Grid justify="center">
                    <Grid container direction="row" justify="center" alignItems="center">
                      <Avatar className={classes.avatar}><LockOutlined/></Avatar>
                    </Grid>
                    <h2 className={classes.titleConnexion}>Connexion✍</h2>
                </Grid>
                <form>
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
                </form>
            </Paper>
            </Grid>
              
            <Grid>
            <Paper elevation={10} className={classes.paper}>
                <Grid justify="center">
                      <Grid container direction="row" justify="center" alignItems="center" >
                        <Avatar className={classes.avatar}><FacebookIcon /></Avatar>
                        <Avatar className={classes.avatar}><FacebookIcon /></Avatar> {/* logo google à mettre */}
                      </Grid>
                    <h2 className={classes.titleConnexion}>Réseaux sociaux</h2>
                </Grid>

                <div className={classes.reseauButton}>
                <GoogleLogin
                  clientId="531304587187-r3odcr1i77rfkk4cekmg0b1ts0l0cvh4.apps.googleusercontent.com"
                  buttonText="Se connecter avec google"
                  onSuccess={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  />
                </div>                
                <div className={classes.reseauButton}>   
                 <FacebookLogin
                    appId="Par les identifiants de FaceBook"
                    autoLoad={false}
                    fields="name, email, picture"
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