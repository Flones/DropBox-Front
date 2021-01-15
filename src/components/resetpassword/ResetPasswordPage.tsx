import { Avatar, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { isLength, isMatch } from '../../utils/validation'


const initialState = {
  password: '',
  cf_password: '',
  err: '',
  success: ''
}


const  ResetPasswodPage  = ()  => {

  const [data, setData] = useState(initialState)
  const { token } : any = useParams();
  const classes = createStylesRestPass()
  const history = useHistory()


  const {password, cf_password, err, success} = data

  const handleChangeInput = (e:any) => {
    const {name, value} = e.target
    setData({...data, [name]:value, err: '', success: ''})

}

const ResetPass = async (e: any) => {
  e.preventDefault();
 
  if(isLength(password))
      return setData({...data, err: "Mot de passe trop court.", success: ''})

  if(!isMatch(password, cf_password))
      return setData({...data, err: "Les mots de passe ne sont pas indentiques.", success: ''})

  try {
      const res = await axios.post('/user/reset', {password}, {
      headers: {Authorization: token}
      })

      return setData({...data, err: "", success: res.data.msg})

  } catch (err) {
      err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
  }
  
}


  return (
    <Container maxWidth="sm" className={classes.root}>
  <CssBaseline />
  <div className={classes.paper}>
    <Avatar className={classes.avatar}>
      {/* <LockIcon /> */}
    </Avatar>
    <Typography component="h1" variant="h5">
    <div className={classes.titleInscription}>Rénitialisation du mot de passe</div>
    </Typography>
    <form className={classes.form} noValidate autoComplete="off">
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
            value={password}
            onChange={handleChangeInput} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="cf_password"
            label="Confirmez votre mot de passe"
            type="password"
            id="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </Grid>
      </Grid>
      <Grid>
      <Button
        fullWidth
        onClick={ResetPass}
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

export default ResetPasswodPage


const createStylesRestPass =  makeStyles({
  root:{
    backgroundColor: 'linear-gradient(.5deg, #1b1b1b, #222, #1b1b1b)',
    borderRadius:'5px',
    marginTop: '100px',
},
paper: {
    //marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '5px',
    backgroundColor: 'blue'
  },
  form: {
    width: '100%',
    marginTop: '15px',
  },
  submit: {
   marginTop: '10px',
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

});
