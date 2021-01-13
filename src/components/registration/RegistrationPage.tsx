import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { LockOutlined } from '@material-ui/icons'
import {  makeStyles, Paper } from '@material-ui/core'
import axios from 'axios'
import { dispatchLogin } from '../../redux/actions/authAction'
import { isEmail, isEmpty, isLength, isMatch } from '../../utils/validation'
import { showErrMessage, showSuccessMessage } from '../../utils/Notification';




const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConf: '',
  err: '',
  success: ''
}


const  RegistrationPage  = ()  => {

const classes = createStylesRegister()
const [user, setUser] = useState(initialState)
const {username, email, password,passwordConf, err, success} = user


// Récupérer les changements dans le formulaire
const onChangeValue = (e:any) =>{
  const {name, value} = e.target
      setUser({...user, [name]:value, err: '', success: ''})
}


  // traitement de la soumission du formulaire
  const  onSubmitForm =  async (e: any) => {
    e.preventDefault();
    if(isEmpty(username) || isEmpty(password)){
      return setUser({...user, err: "Veillez remplir tous les champs", success: ''})
    }
    if(!isEmail(email)){
      return setUser({...user, err: "Adresse email invalide.", success: ''})
    }
    if(isLength(password)){
      return setUser({...user, err: "Mot de passe trop court", success: ''})
    }
    if(!isMatch(password, passwordConf)){
      return setUser({...user, err: "Les mots de passe ne sont pas indentiques", success: ''})
    }
    
    try {
      const res = await axios.post('/user/inscription', { username, email, password });
      console.log(res)
      
    } catch (err) {
      err.response.data.msg && 
      setUser({ ...user, err: err.response.data.msg, success: '' });
    }
  }


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
        {/* {err && showErrMessage(err)}
        {success && showSuccessMessage(success)} */}
      </Typography>
      <form  onSubmit={onSubmitForm} noValidate autoComplete="off" className={classes.form}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              value={username}
              label="Nom d'utilisateur"
              name="username"
              autoComplete="off"
              onChange={onChangeValue} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              value={email}
              label="Adresse email"
              name="email"
              autoComplete="email"
              onChange={onChangeValue} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              value={password}
              type="password"
              id="password"              
              onChange={onChangeValue} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="passwordConf"
              label="Confirmez votre mot de passe"
              value={passwordConf}
              type="password"
              id="passwordConf"
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

export default RegistrationPage

const createStylesRegister = makeStyles({
  root:{
    backgroundColor: 'linear-gradient(.5deg, #1b1b1b, #222, #1b1b1b)',
    borderRadius:'5px'
},
BorderPaper:{
  padding :30,
  height:'80vh',
  width:500, 
  margin:"30px auto"
},
paper: {
    //marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    // marginTop: theme.spacing(2),
  },
  submit: {
    // margin: theme.spacing(2, 0, 2),
    alignItems:'center'
  },
  centerButton:{
      textAlign: 'center'
  },
  titleInscription:{
    textAlign: 'center',
    fontWeight: 600,
    fontFamily: 'Lobster, cursive',
    fontSize : '35px',
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







/*class RegistrationPage extends PureComponent<P & WithStyles<CreateRegister>, S> {
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
*/

