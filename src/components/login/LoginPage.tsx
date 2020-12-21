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
            <Paper elevation={10} className={classes.paper}>
                <Grid justify="center">
                     <Avatar className={classes.avatar}><LockOutlined/></Avatar>
                    <h2 className={classes.titleConnexion}>Connexion</h2>
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
                        Forgot password ?
                </Link>
                </Typography>
                <Typography >
                     <Link to="/inscription">
                     Créer mon compte
                </Link>
                </Typography>
                </form>
            </Paper>
        </Grid>
      )
  }
}

export default LoginPage