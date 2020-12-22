import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesForgotPassword, { CreateForgotPassword } from './forgotPasswordStyles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock';


interface P{}
interface S{} 

class ForgotPasswordPage extends PureComponent<P & WithStyles<CreateForgotPassword>, S> {
  public static Display = withStyles(createStylesForgotPassword as any)(ForgotPasswordPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
      <Container maxWidth="sm" className={classes.root}>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        {/* <Button onClick={() => { alert('Tous les champs doivent être rempli') }}>Attention</Button> */}
        <Typography component="h1" variant="h5">
        <div className={classes.titleInscription}>Choisissez un nouveau mot de passe</div>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
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
                //autoComplete="current-password"
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
                //autoComplete="current-password"
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
             Changer de mot de passe
          </Button>
          </Grid>
        </form>
      </div>
    </Container>
      </Container>
      )
  }
}
export default ForgotPasswordPage
