import { Avatar, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { PureComponent } from 'react'
import createStylesRestPass, { CreateRestpass } from './resetPasswordStyles'

interface P{}
interface S{} 

class ResetPasswodPage extends PureComponent<P & WithStyles<CreateRestpass>, S> {
  public static Display = withStyles(createStylesRestPass as any)(ResetPasswodPage) as React.ComponentType<P>
  render() {
    const {classes} = this.props 

    return (
      <Container maxWidth="sm" className={classes.root}>
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        {/* <LockIcon /> */}
      </Avatar>
      {/* <Button onClick={() => { alert('Tous les champs doivent être rempli') }}>Attention</Button> */}
      <Typography component="h1" variant="h5">
      <div className={classes.titleInscription}>Rénitialisation du mot de passe</div>
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Nouveau mot de passe"
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
      )
  }
}
export default ResetPasswodPage

