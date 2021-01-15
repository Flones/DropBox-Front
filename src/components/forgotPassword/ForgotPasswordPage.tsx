import { makeStyles} from '@material-ui/core/styles'
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios'
import { isEmail } from '../../utils/validation'
import {showErrmsg, showSuccessmsg} from '../../utils/Notification'


const initialState = {
  email: '',
  err: '',
  success: ''
}
const  ForgotPasswordPage  = ()  => {

  const [data, setData] = useState(initialState)
  const {email, err, success} = data
  const classes = createStylesForgotPassword()

  const onChangeValue = (e:any) => {
    const {name, value} = e.target
    setData({...data, [name]:value, err: '', success: ''})
}

const forgotPassword = async (e:any) => {
  e.preventDefault();
    if(!isEmail(email))
        return setData({...data, err: 'Adresse email invalide.', success: ''})     
    try {
        const res = await axios.post('/user/forgot', {email})
        return setData({...data, err: '', success: res.data.msg})
    } catch (err) {
        err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
    }
}


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
        <span>
            {/* {err && showErrmsg(err)}
            {success && showSuccessmsg(success)} */}
        </span>
        <form onSubmit={forgotPassword} className={classes.form} noValidate >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                label="Adresse email"
                name="email"
                value={email}
                onChange={onChangeValue} 

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
export default ForgotPasswordPage

const createStylesForgotPassword =  makeStyles({
  root:{
    backgroundColor: 'linear-gradient(.5deg, #1b1b1b, #222, #1b1b1b)',
    borderRadius:'5px',
    marginTop: '110px',
},
paper: {
    marginTop: "10%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // marginTop: '100px',
    backgroundColor: 'blue',
    margin: '15px'
  },
  form: {
    width: '100%',
    marginTop: '15px',
  },
  submit: {
    marginTop: '20px',
    alignItems:'center',
    backgroundColor: 'green'
  },
  centerButton:{
      textAlign: 'center'
  },
  titleInscription:{
    textAlign: 'center',
    fontWeight: 600,
    fontFamily: 'Lobster, cursive',
    fontSize : '35px',
    color: 'blue',
  },
  titleConnexion:{
    fontWeight: 500,
    fontFamily: 'Lobster, cursive',
    fontSize : '15px',
  },
  Connexion:{
    fontWeight: 500,
    fontFamily: 'Lobster, cursive',
    fontSize : '15px',
    color: 'blue'
  }
})
/*class ForgotPasswordPage extends PureComponent<P & WithStyles<CreateForgotPassword>, S> {
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
        <Button onClick={() => { alert('Tous les champs doivent être rempli') }}>Attention</Button>
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
} */
