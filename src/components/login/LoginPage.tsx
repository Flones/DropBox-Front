import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { LockOutlined } from '@material-ui/icons'
import FacebookIcon from '@material-ui/icons/Facebook';
import React, { PureComponent, useState } from 'react'
import { Link} from 'react-router-dom'
import createStylesLogin, { Createlogin } from './loginStyles'
import { GoogleLogin } from 'react-google-login';

interface Login { email?: string; password?: string; err?: string; success?: string  }
interface P{}
interface S{login: Login} 


class LoginPage extends PureComponent<P & WithStyles<Createlogin>, S> {
  public state: Readonly<S> = { login: {email: '', password: '', err: '', success: ''} }
  public static Display = withStyles(createStylesLogin as any)(LoginPage) as React.ComponentType<P>
  render() {

    const {classes} = this.props 
    const { login}  = this.state
    
    const [user, setUser] = useState(login)
    const {email, password, err, success} = user
    const handleChangeInput  = ()=>(e:React.ChangeEvent<HTMLInputElement>) =>{
      const {name, value} = e.target
      setUser({...user, [name]:value, err: '', success: ''})

    }
    const dispatch = useDispatch()
    const history = useHistory()

    const formSubmit = async e =>{
      
    }

    

    // const {login.email, login.password, login.err, login.success} = user

    

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
                </Grid>
                <form onSubmit={formSubmit}>
                <TextField 
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                value={login.email}
                onChange={handleChangeInput} 
                autoComplete="email"
                />
                <TextField 
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                value={login.password}              
                id="password"
                onChange={handleChangeInput} 
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