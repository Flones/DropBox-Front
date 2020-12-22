import { createStyles, Theme } from "@material-ui/core";

export type CreateForgotPassword = ("root" |"paper" |"avatar"|"form"|"submit"|"centerButton" 
|"titleInscription"|"titleConnexion"|"Connexion") ;

const createStylesForgotPassword= (theme: Theme) => createStyles<CreateForgotPassword, {}>({
    root:{
        backgroundColor: 'linear-gradient(.5deg, #1b1b1b, #222, #1b1b1b)',
        borderRadius:'5px'
    },
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
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

export default  createStylesForgotPassword