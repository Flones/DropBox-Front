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
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        {/* <Button onClick={() => { alert('Tous les champs doivent être rempli') }}>Attention</Button> */}
        <Typography component="h1" variant="h5">
        <div className={classes.titleInscription}>Mot de passe oublié</div>
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
                // autoComplete="email"
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
             M'envoyer les instructions par email
          </Button>
          </Grid>
        </form>
      </div>
    </Container>
      )
  }
}
export default ForgotPasswordPage
