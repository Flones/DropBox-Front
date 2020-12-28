import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { LockOutlined } from '@material-ui/icons'
import FacebookIcon from '@material-ui/icons/Facebook';
import React, { PureComponent} from 'react'
import { Link} from 'react-router-dom'
import createStylesLogin, { Createlogin } from './loginStyles'
import { GoogleLogin } from 'react-google-login';
// import axios from 'axios';
// import { showErrMessage, showSuccessMessage } from '../../utils/Notification';



interface Login { email?: string; password?: string; err?: string; success?: string  }
interface P{}
interface S{login: Login} 

class LoginPage extends PureComponent<P & WithStyles<Createlogin>, S> {
  public state: Readonly<S> = { login: {email: '', password: '', err: '', success: ''} }
  public static Display = withStyles(createStylesLogin as any)(LoginPage) as React.ComponentType<P>
  render() {

    const API_URL = 'http://localhost:5000'

    const {classes} = this.props 
    const { login}  = this.state

    const onChangeEmail = () => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newEmail = e.target.value;
      this.setState({ login: { email: newEmail} })
      }

      
    const onChangePassword = () => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPass = e.target.value;
      this.setState({ login: { password: newPass} })}

    const validationForm = () => (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
       console.log(this.state.login);
   }

    

    //A faire plutard pour la connexion avec Google et Facebook
    const responseGoogle = async () =>{}
    // const responseFacebook = async () =>{}
    
    return (
       <Grid container  justify="center" className={classes.root}>
            <Grid >
            <Paper elevation={10} className={classes.paper}>
                <Grid justify="center">
                    <Grid container direction="row" justify="center" alignItems="center">
                      <Avatar className={classes.avatar}><LockOutlined/></Avatar>
                    </Grid>
                    <h2 className={classes.titleConnexion}>Connexion✍</h2>
                    {/* {err && showErrMessage(err)}
                    {success && showSuccessMessage(success)} */}
                </Grid>
                <form onSubmit={validationForm}>
                <Grid item xs={12}>
                <TextField 
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                // value={login.email}
                onChange={onChangeEmail} 
                autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField 
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                // value={login.password}              
                id="password"
                onChange={onChangePassword}
                autoComplete="current-password"
                 />
                 </Grid>
                <Button type='submit' color='primary' variant="contained" className={classes.Bouton} fullWidth>Connexion</Button>
                </form>
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
                      <Grid container direction="row" justify="center" alignItems="center" >
                        <Avatar className={classes.avatar}><FacebookIcon /></Avatar>
                        <Avatar className={classes.avatar}><FacebookIcon /></Avatar> {/* logo google à mettre */}
                      </Grid>
                    <h2 className={classes.titleConnexion}>Réseaux sociaux</h2>
                </Grid>

                <div className={classes.reseauButton}>
                <GoogleLogin
                  clientId="Par nos identifiants nodejs"
                  buttonText="Se connecter avec google"
                  onSuccess={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  />
                </div>                
                <div className={classes.reseauButton}>   
                 {/* <FacebookLogin
                    appId="Par les identifiants de FaceBook"
                    autoLoad={false}
                    fields="name, email, picture"
                    callback={responseFacebook}
                    icon="fa-facebook"
                      /> */}
                </div>
            </Paper>
            </Grid>
        </Grid>
      )
  }
}

export default LoginPage