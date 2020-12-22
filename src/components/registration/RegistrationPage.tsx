import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesRegister, { CreateRegister } from './registrationStyles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { LockOutlined } from '@material-ui/icons'
import { Paper } from '@material-ui/core'


interface P{}
interface S{} 

class RegistrationPage extends PureComponent<P & WithStyles<CreateRegister>, S> {
  public static Display = withStyles(createStylesRegister as any)(RegistrationPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
      <Container maxWidth="sm" className={classes.root}>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={10} className={classes.paper + ' ' + classes.BorderPaper}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5">
        <div className={classes.titleInscription}>Créer votre compte ✍</div>
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={3}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Nom d'utilisateur"
                name="username"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confPassword"
                label="Confirmez votre mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
             inscription
          </Button>
          </Grid>
        </form>
          <Grid container justify="center">
          <div className={classes.titleConnexion}>Si vous avez déjà un compte alors?</div> &nbsp;         
              <Link to="/connexion">
                <span className={classes.Connexion}> Connectez-vous</span>
              </Link>
          </Grid>
      </Paper>
    </Container>
      </Container>
      )
  }
}
export default RegistrationPage

