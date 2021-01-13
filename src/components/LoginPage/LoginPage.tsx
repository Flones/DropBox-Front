import { Avatar, Button,  Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import FacebookIcon from '@material-ui/icons/Facebook';
import React, { useState } from 'react'
import { Link, useHistory} from 'react-router-dom'
// import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { showErrMessage, showSuccessMessage } from '../../utils/Notification';
import { useDispatch } from 'react-redux';
import { dispatchLogin } from '../../redux/actions/authAction';


const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}


const  LoginPage  = ()  => {
  const [user, setUser] = useState(initialState)
  const dispatch = useDispatch()
  const history = useHistory()

  const classes = createStylesLogin()
  const {email, password, err, success} = user


  const onChangeValue = (e:any) =>{
    const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
  }


  // traitement de la soumission du formulaire
   const  onSubmitForm =  async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/connexion', { email, password });
      setUser({...user, err: '', success: res.data.message})
      localStorage.setItem('firstLogin', 'OK')
      dispatch(dispatchLogin())
      history.push("/profil")
    } catch (err) {
      err.response.data.msg && 
      setUser({ ...user, err: err.response.data.msg, success: '' });
    }
  }

  // const responseGoogle = async () =>{}
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
                  <span>
                    {/* {err && showErrMessage(err)}  
                    {success && showSuccessMessage(success)} */}
                  </span>
                  <form  onSubmit={onSubmitForm} noValidate autoComplete="off">
                  <Grid item xs={12}>
                  <TextField 
                  required
                  fullWidth
                  id="email"
                  label="Adresse email"
                  name="email"
                  value={email}
                  onChange={onChangeValue} 
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField 
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  value={password}              
                  id="password"
                  onChange={onChangeValue}
                  />
                   </Grid>
                  <Button type='submit' color='primary' variant="contained" fullWidth className={classes.Bouton} >Connexion</Button>
                  </form>
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
              </Paper>
              </Grid>
              <Grid>
              <Paper elevation={10} className={classes.paper}>
                  <Grid justify="center">
                        <Grid container direction="row" justify="center" alignItems="center" >
                          <Avatar className={classes.avatar}><FacebookIcon /></Avatar>
                          <Avatar className={classes.avatar}><FacebookIcon /></Avatar>
                        </Grid>
                      <h2 className={classes.titleConnexion}>Réseaux sociaux</h2>
                  </Grid>
  
                  <div className={classes.reseauButton}>
                  {/* <GoogleLogin
                    clientId="Par nos identifiants nodejs"
                    buttonText="Se connecter avec google"
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    /> */}
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
  
    export default LoginPage

const createStylesLogin =  makeStyles({
  root:{
    marginTop:'30px',
  },
    paper:{
        padding :50,
        height:'70vh',
        width:400, 
        margin:"20px auto"
    },
    avatar: {
        backgroundColor:'#1bbd7e',
        textAlign:'center'
      },
      Bouton: {
        margin:'30px 0',
      },
      GrisAlign:{
          textAlign:'center',
      },
      titleConnexion:{
        textAlign: 'center',
        fontWeight: 600,
        fontFamily: 'Lobster, cursive',
        fontSize : '40px',
        color: "green",
      },
      reseauButton:{
        width: '100%',
        margin: "10px 0",
        fontSize:'14px',
        fontWeight:200,
        textTransform: 'capitalize',
        letterSpacing: '1.3px',
        marginTop: "20px",
        boxShadow: "0 2px 4px #777"

        },
        Connexion:{
          fontWeight: 500,
          fontFamily: 'Lobster, cursive',
          fontSize : '15px',
          color: 'blue'
        },
        Motdepasseoublie:{
          fontWeight: 500,
          fontFamily: 'Lobster, cursive',
          fontSize : '15px',
          color: 'red',
        },
        titleMessage:{
        fontWeight: 500,
        fontFamily: 'Lobster, cursive',
        fontSize : '15px',

        },
});



// class LoginPage extends PureComponent<P & WithStyles<Createlogin>, S> {
// //  public state: Readonly<S> = { login: {email: '', password: '', err: '', success: ''} }
//   public static Display = withStyles(createStylesLogin as any)(LoginPage) as React.ComponentType<P>
  
//   render() {

//     const {classes} = this.props 


//     //A faire plutard pour la connexion avec Google et Facebook
//     const responseGoogle = async () =>{}
//     // const responseFacebook = async () =>{}
    
//     return (
//        <Grid container  justify="center" className={classes.root}>
//             <Grid >
//             <Paper elevation={10} className={classes.paper}>
//                 <Grid justify="center">
//                     <Grid container direction="row" justify="center" alignItems="center">
//                       <Avatar className={classes.avatar}><LockOutlined/></Avatar>
//                     </Grid>
//                     <h2 className={classes.titleConnexion}>Connexion✍</h2>
//                     {/* {err && showErrMessage(err)}
//                     {success && showSuccessMessage(success)} */}
//                 </Grid>
//                 <form>
//                 <Grid item xs={12}>
//                 <TextField 
//                 required
//                 fullWidth
//                 id="email"
//                 label="Adresse email"
//                 name="email"
//                 value={Email}
//                 // onChange={onChangeEmail} 
//                 autoComplete="email"
//                 />
//                 </Grid>
//                 <Grid item xs={12}>
//                 <TextField 
//                 required
//                 fullWidth
//                 name="password"
//                 label="Mot de passe"
//                 type="password"
//                 // value={login.password}              
//                 id="password"
//                 // onChange={onChangePassword}
//                 autoComplete="current-password"
//                  />
//                  </Grid>
//                 <Button type='submit' color='primary' variant="contained" className={classes.Bouton} fullWidth>Connexion</Button>
//                 </form>
//                 <Typography >
//                      <Link to="/motdePasseOublie">
//                         <span className={classes.Motdepasseoublie}>Forgot password ?</span>
//                       </Link>
//                 </Typography>
//                 <Grid container>
//                      <div className={classes.titleMessage}> Si vous n'avez pas de compte &nbsp;</div> <br/>
//                      <Link to="/inscription" >
//                        <div className={classes.Connexion}> Inscription</div>
//                 </Link>
//                 </Grid>
//             </Paper>
//             </Grid>
              
//             <Grid>
//             <Paper elevation={10} className={classes.paper}>
//                 <Grid justify="center">
//                       <Grid container direction="row" justify="center" alignItems="center" >
//                         <Avatar className={classes.avatar}><FacebookIcon /></Avatar>
//                         <Avatar className={classes.avatar}><FacebookIcon /></Avatar> {/* logo google à mettre */}
//                       </Grid>
//                     <h2 className={classes.titleConnexion}>Réseaux sociaux</h2>
//                 </Grid>

//                 <div className={classes.reseauButton}>
//                 <GoogleLogin
//                   clientId="Par nos identifiants nodejs"
//                   buttonText="Se connecter avec google"
//                   onSuccess={responseGoogle}
//                   cookiePolicy={'single_host_origin'}
//                   />
//                 </div>                
//                 <div className={classes.reseauButton}>   
//                  {/* <FacebookLogin
//                     appId="Par les identifiants de FaceBook"
//                     autoLoad={false}
//                     fields="name, email, picture"
//                     callback={responseFacebook}
//                     icon="fa-facebook"
//                       /> */}
//                 </div>
//             </Paper>
//             </Grid>
//         </Grid>
//       )
//   }
// }


