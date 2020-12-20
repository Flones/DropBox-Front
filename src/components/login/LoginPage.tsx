import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { LockOutlined } from '@material-ui/icons'
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import createStylesLogin, { Createlogin } from './loginStyles'

interface P{}
interface S{} 

class LoginPage extends PureComponent<P & WithStyles<Createlogin>, S> {
  public static Display = withStyles(createStylesLogin as any)(LoginPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
       <Grid>
            <Paper elevation={} className={classes.paper}>
                <Grid className={classes.GrisAlign}>
                     <Avatar className={classes.avatar}><LockOutlined/></Avatar>
                    <h2>Connexion</h2>
                </Grid>
                <TextField label='email' placeholder='Adresse email' fullWidth required/>
                <TextField label='Password' placeholder='Mot de passe' type='password' fullWidth required/>
                
                <Button type='submit' color='primary' variant="contained" className={classes.Bouton} fullWidth>Sign in</Button>
                <Typography >
                     <Link to="/motdePasseOublie">
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Vous n'avez pas encore de compte ?
                     <Link to="/inscription">
                        Inscription
                </Link>
                </Typography>
            </Paper>
        </Grid>
      )
  }
}

export default LoginPage